
import React, { Component } from "react";
import TodoItems from "./TodoItems.js";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        
      }
       
      addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
            
          }
           
          console.log(this.state.items);
             
          e.preventDefault();
      }
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
      

    render() {
      return (
        <div className="todoList">
          <div className="header">
            <h1>Todo</h1>
            <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
                
               placeholder="Enter task">
              </input>
         
              <button type="submit">Add</button>


            </form>
          </div>
          <TodoItems entries={this.state.items}
                      delete={this.deleteItem}
                      />
        </div>
      );
    }
    
  }
  const TodoItem = (props) =>{
    return <div>{props.text}
   <button onClick={() => props.deleteTodo(props.text)}>delete</button> </div>

};
   
  export default TodoList;
