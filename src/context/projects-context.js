import React, { createContext, useContext } from 'react';
import { useProjects } from '../hooks'; 

//context provides where to pass data down react compononents without having to use props. We have a provider and a consumer 

export const ProjectsContext = createContext(); 
export const projectsProvider = ({children}) => {
    const { projects, setProjects } = useProjects(); 

    return (
        <ProjectsContext.Provider value ={{ projects, setProjects}}> 
        {children}
        </ProjectsContext.Provider>
    );
}; 

export const useProjectsValue =() => useContext(projectsContext);


