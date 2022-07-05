import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import {firebase} from '../firebase';

export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] =useState(false);// To get a confirmation before deleting to avoid accidental delete 
const { projects, setProjects} = useProjectsValue();
const { setSelectedProject } = useSelectedProjectValue();

//To delete project from firebase 
const deleteproject = docId => {
    firebase
    .firestore
    .collection('projects')
    .doc(docId)
    .delete()
    .then(() => {    //To refresh 
        setProjects([...projects]);
setSelectedProject('INBOX')
    });

};
return (
    <>
    <span className ='sidebar_dot'>•</span>
    <span className = 'sidebar_project-name'>{project}</span>
    <span className = 'sidebar_project-delete' 
    data-testid='delete-project'
    onClick={() => setShowConfirm(!showConfirm)}
    >
     <FaTrashAlt />
     {showConfirm && (
        <div className ='project-delete-modal'>
            <div className ='project-delete-modal_inner'>
                <p>Delete {project} ?</p>
                <button 
                type='button'
                onClick={() => deleteProject(project.docId)}
                >Delete
                <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span> 
                </button>
            </div>
        </div>
     )}
    </span>
    </>
)
}

