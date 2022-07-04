import React, { createContext,useContext, useState } from "react";
import PropTypes from 'prop-types';


//context provides where to pass data down react compononents without having to use props. We have a provider and a consumer

export const SelectedProjectContext = createContext(); //
export const SelectedProjectProvider = ({ children }) => {    //children is destructured and rendered within the provider  
  const [SelectedProject, setSelectedProject] = useState('INBOX');

  return (     //access provider which gives the value and renders the children  and value can beaccessed from any level 
    <SelectedProjectContext.Provider 
    value={{ SelectedProject, setSelectedProject }}
    >   
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext); // gives us access to context which gives access to value at any level when called 

SelectedProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};