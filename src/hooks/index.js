import { useState, useEffect } from "react"; // To hold some state and check for some live cycle changes within the application
import moment from "moment";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";

//Getting data from the database
//This block of code is to get a particular task on each condition / pulling each new task

export const useTasks = selectedProject => {
  // creating the hooks
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "WPuIeddml90noRt2P94Z");

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;


    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      // To extract data from an oject with different key values
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        // calling the hook to check for tasks that are due in the next 7 days
        selectedProject === "NEXT_7_DAYS"
          ? newTasks.filter(
              task =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });
    //       setTasks(   // calling the hook to check for tasks that are due in the next 30 days
    // selectedProject === 'NEXT_MONTH'
    // ? newTasks.filter(
    //     task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') > 7 &&
    //     task.archived !==true
    // )
    // : newTasks.filter(task => task.archived !== true)
    // );
    //     setArchivedTasks(newTasks.filter(task => task.archived !== false));
    //         });
    return () => unsubscribe();
  }, [selectedProject]);
  return { tasks, archivedTasks };
};
//This block of code above is to get a particular task on each condition

// The code below shows how what was inputed above works . It is to give all tasks for selected project 1 and give archieved tasks, if there is a project that has the project ID of 1 but has been archieved as well (destructeured)
// const selectedProjected = 1;
// const { tasks, archievedTasks } = useTasks(selectedProject);

// To get projects once
export const useProjects = () => {
  //Creating another hook
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //methods inside to get things
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", "WPuIeddml90noRt2P94Z")
      .orderBy("projectId")
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id, //We need this to delete items
        }));
        // To avoid an infinite loop when project changes
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
