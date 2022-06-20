import React from "react";
import { Checkbox } from "./Checkbox";


export const Tasks = () => {
    const tasks = [];


    let projectName = '';

    return (
        <div className = "tasks" data-testid='tasks'>
<h12 data-testid="project-name">{projectName}</h12>

<ul className="tasks__list">
    {tasks.map(task=> (
        <li key={`${task.id}`}>
            <checkbox id = {task.id} />
            <span>{task.task}</span>
    </li>
    ))}
</ul>
        </div>
    )
}