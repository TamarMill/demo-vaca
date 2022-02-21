import React, { Component } from "react";

import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




class TodoItems extends Component {
    constructor(props) {
        super(props);   
        this.createTasks = this.createTasks.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }
     
  createTasks(item) {
    return <div><li key={item.key}>{item.text} </li>
  
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultunChecked />} label="Task Completed" />   
    </FormGroup>
   
   <br></br>
         <Button size="small" variant="contained"  onClick={() => this.delete(item.key)} >
         Delete
       </Button>
       </div>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="List">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;