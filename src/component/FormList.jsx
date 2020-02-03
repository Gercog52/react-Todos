import React from 'react'
import FormInput from "./FormInput";
import styles from './FormList.module.css'
import Task from "./Task";
import {Droppable} from 'react-beautiful-dnd';
import {setForm} from "../redux/problem-reducer";


const FormList = (props) => {
    /**
     * <div className={styles.item} key={item.id}>
     {item.text}
     </div>
     * */

    let task = props.tasks.map(item => <Task actTask={props.actTask} deactTask={props.deactTask}
          task={item} key={item.id} delTask={props.delTask}
          timer={props.timers.find(itemTam => itemTam.id===item.id) || true}
          newTimersThink={props.newTimersThink}
          pauseTimer={props.pauseTimer} formOn={props.formOn} setForm={props.setForm}
          oflineTimerOn={props.oflineTimerOn} oflineTimerOff={props.oflineTimerOff}
          delTimer={props.delTimer}
          offlineIsOff={(props.timers.find(itemTam => (itemTam.id===item.id))) ?
              props.timers.find(itemTam => (itemTam.id===item.id)) : false
          }
    />);
    return (
        <Droppable droppableId={'10'}>
            {
                (provided) => {
                    return (
                        <div className={styles.form} ref={provided.innerRef} {...provided.droppableProps}>
                    <FormInput items={(props.tasks.length > 0)} addTaskThink={props.addTaskThink} addTask={props.addTask} />
                    {task}
                    {provided.placeholder}
                    <div className={styles.btns} style={{ display: !(props.fullCarrentItems > 0) && 'none' }}>
                        <div className={styles.info}>
                            {props.items} items left
                    </div>
                        <div>
                            <button className={(props.isData === 'Full') ? styles.act : ''} onClick={props.fullTask}>
                                all
                    </button>
                            <button onClick={props.activeTask}>
                                active
                    </button>
                            <button onClick={props.completedTask}>
                                complited
                    </button>
                        </div>
                        <div style={{ width: '116px' }}>
                            <button style={{ display: (!(props.fullCarrentItems - props.items > 0)) ? 'none' : '' }} onClick={props.delDeactTask}>
                                <span>
                                    Clear completed
                        </span>
                            </button>
                        </div>
                    </div>
                </div>
                    )
                }
            }
        </Droppable>
    )
    /*return (
                
    )*/
};

export default FormList;