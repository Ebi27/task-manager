import React from "react";
import { FaPizzaSlice } from 'react-icons/fa';
import PropTypes from 'prop-types';



export const Header = () => {
const x = 1; 


return <header className="header" data-testid="header">
    <nav>
        <div className="logo">
            <img src = " " alt="Productivity" /> 
        </div>
        <div className="settings">
            <ul>
                <li data-testid="quick-add-task-action" className="add_settings">+</li>
                <li data-testid="dark-mode-setting"className="settings__darkmode"> 
                    <FaPizzaSlice />
                     </li>
            </ul>
        </div>
    </nav>
</header>
}