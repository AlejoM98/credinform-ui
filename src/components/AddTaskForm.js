/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './AddTaskForm.css';
import FormAdPo from '../pages/FormAdPo';
import {Link} from "react-router-dom";

export default class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const taskText = this.textInput.value.trim();
    const listNumber = this.props.formNum;
    console.log(listNumber)
    if (taskText && this.props.onAdd) {
      this.props.onAdd(taskText, listNumber);
    }
    this.textInput.value = '';
  }

 setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if(!this.state.editing) {
      return (
        <div className="open-add-button" onClick={() => this.setEditing(true)}>
          <Link to = {`/formAdPo/${FormAdPo}`}>
            <a href="#">Adicionar tarea!</a>
          </Link>
        </div>  
        ); 
    }
      return (
        <form className="card add-task-form" onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" class="task-input" ref={input => this.textInput = input} aria-label="Add a task" />
          <div>
            <button className="button add-button">Adicionar</button>
            <button className="button cancel-button" onClick={() => this.setEditing(false)}>Cancelar</button>
          </div>
        </form>
      );
  }
}