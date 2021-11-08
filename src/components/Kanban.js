import React, { Component } from 'react';
import './Kanban.css';
import List from './List';

export default class Kanban extends Component {
  //4. Leer toda la info de la local storage
  //5. convertir a jso
  //6.imprimir
  constructor(props) {
    super(props);
    //if there's a localStorage to be had grab it otherwise set state
    if(localStorage.getItem('lists')) {
      const rawLS = localStorage.getItem('lists');
      // Para obtener/leer datos se usa localStorage.getItem([nombre_del_item])
      // Para settear/establecer datos en la localStorage localStorage.setItem([miVar])
      const parsedLS = JSON.parse(rawLS);
      this.state = { lists: parsedLS }
    } else {
      this.state = {
        lists: [
          {
            title: 'Evaluar',
            id: 0,
            cards: [{
              taskText: 'A0174384 - Poliza de contragarantias',
              listNumber: 0,
              timeId: 0
            }, 
            {
              taskText: 'AF05677762 - Poliza de Cumplimmineto de Obra',
              listNumber: 0,
              timeId: 1
            }]
          },
          {
            title: 'Comite',
            id: 1,
            cards: [{
              taskText: 'AF184654123 - Poliza devengada ',
              listNumber: 1,
              timeId: 2
            }, 
            {
              taskText: 'AD174384',
              listNumber: 1,
              timeId: 3
            }]
          },
          {
            title: 'Ejecucion',
            id: 2,
            cards: [{
              taskText: 'Poliza 5',
              listNumber: 2,
              timeId: 4
            }, 
            {
              taskText: 'Poliza 6',
              listNumber: 2,
              timeId: 5
            }]
          },
          {
            title: 'Cierre',
            id: 3,
            cards: [{
              taskText: 'Poliza 7',
              listNumber: 3,
              timeId: 6
            }, 
            {
              taskText: 'Poliza 8',
              listNumber: 3,
              timeId: 7
            }]
          }
        ]
      }

      localStorage.setItem('lists', JSON.stringify(this.state.lists))
    }
  }

  //get id of item being dragged and list where it's coming from
  onDragStart = (e, fromList) => {
    console.log(`what a drag!`)
    const dragInfo = {
      taskId: e.currentTarget.id,
      fromList: fromList
    }
  
    localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDrop = (e, listNum) => {
    //get the dropped task card, the localStorage, 
    const droppedTask = localStorage.getItem('dragInfo');
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);
    const parsedDragInfo = JSON.parse(droppedTask)
    
    //get task cards array, get rid of moved card, and put a new card
    // in the list where it was dropped
    const cardsArray = parsedLS[parsedDragInfo.fromList].cards
    const taskCard = cardsArray.find(card => card.timeId = parsedDragInfo.taskId)
    const indexOfCard = cardsArray.findIndex(card => card.timeId = parsedDragInfo.taskId)
    parsedLS[parsedDragInfo.fromList].cards.splice(indexOfCard, 1)
    parsedLS[listNum].cards.push({...taskCard, listNumber: parseInt(listNum)})
   
    //sync the state and localStorage
    this.setState({
      lists: parsedLS
    });
    localStorage.setItem('lists', JSON.stringify(parsedLS));
    
  }

  //add some new task cards
  addTaskCard(taskText, listNumber) {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf()
    }

    parsedLS[listNumber].cards.push(newTask)

    //sync state and localStorage
    this.setState({
      lists: parsedLS
    })
    localStorage.setItem('lists', JSON.stringify(parsedLS))
  
  }

  handleSubmit = (e)=> {
    //TODO conection DB
    e.preventDefault();
    window.location.href = 'http://localhost:3000/formAdPo';
  }


render() {
  const lists = this.state.lists.map((list, index) => (
    <li className="list-wrapper" key={index}>
      <List {...list} 
        onAdd={(taskText, listNumber) => this.addTaskCard(taskText, listNumber)} 
        onDragStart={(e, fromList) => this.onDragStart(e, `${list.id}`)}
        onDragOver={(e) => this.onDragOver(e)} 
        onDrop={(e, listNumber) => {this.onDrop(e, `${list.id}`)}}
      />
    </li>
  ));
   
  return (
    <form onSubmit={(e) => {
      this.handleSubmit(e);
    }}>
      <div className="board" >
        <ul className="lists" >
          {lists}
          <button type="submit" className="btn btn-primary btn-block" > 
            Adicionar
          </button>
        </ul>
      </div>
    </form>
  )
  }
}