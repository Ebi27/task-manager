import { collatedTasks } from "../constants";

// export const collatedTasksExist = function collatedTasksExist(selectedProject) {
//   return  collatedTasks.find(task => task.key === selectedProject);
//   };

  export const collatedTasksExist = (selectedProject) =>
    collatedTasks.find((task) => task.key === selectedProject);
