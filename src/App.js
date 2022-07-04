import React from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { Sidebar } from "./components/layout/Sidebar";
import { ProjectsProvider, SelectedProjectProvider } from './context';


// SelectedProjectProvider will access context 
 export const App = () => (
   <SelectedProjectProvider> 
     <ProjectsProvider>
       <div className="App">
         <Header />
         <Content />
       </div>
     </ProjectsProvider>
   </SelectedProjectProvider>
 );
