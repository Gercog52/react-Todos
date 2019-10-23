import React from 'react'
import FormInput from "./FormInput";
import styles from './FormList.module.css'
import Task from "./Task";


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
          pauseTimer={props.pauseTimer}
    /> );
    return (
        <div className={styles.form}>
            <FormInput items={(props.tasks.length>0)} addTaskThink={props.addTaskThink} addTask={props.addTask} />
            {task}
            <div className={styles.btns} style={{display:!(props.fullCarrentItems>0) && 'none' }}>
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
                <div style={{width:'116px'}}>
                    <button style={{ display: (!(props.fullCarrentItems-props.items > 0)) ? 'none' : ''}} onClick={props.delDeactTask}>
                        <span>
                            Clear completed
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default FormList;