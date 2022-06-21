

import {firebase} from '../firebase';
import React from 'react';

export const Checkbox = ({ id }) => {
  //passing a task id, so when the checkbox is hit, the task can be archived
const archiveTask =() => {
    firebase 
    .firebase()
    .collection('tasks')
    .doc(id)
    .update({
        archived: true,
    })
};

return(
    <div 
    className="checkbox-holder"
    data-testid="checkbox-action"
    onClick={() => archiveTask()}
    >

        <span className="checkbox" /> 
    </div>
);
};

