import React from "react";
import { FaPizzaSlice } from 'react-icons/fa';




export const Header = () => {
const x = 1; 


return <header className="header" data-testid="header">
    <nav>
        <div className="logo">
            <img src = " " alt="Productivity" /> 
        </div>
        <div className="settings">
            <ul>
                <li>+</li>
                <li>
                    <FaPizzaSlice />
                     </li>
            </ul>
        </div>
    </nav>
</header>
}