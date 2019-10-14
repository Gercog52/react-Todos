import React from 'react';
import styles from "./FormList.module.css";

const Task = (props) => {
    return (
        <div className={styles.item}>
            <button onClick={(props.task.act) ? ()=> {props.deactTask(props.task.id)} :()=> {props.actTask(props.task.id)}}  className={styles.taskBtn}><span style={{display:(props.task.act) ? 'none' : ''}}>
            </span></button>
            <div className={styles.taskTextAct + ((!props.task.act) ? ' ' + styles.taskTextDezebl : '')}>
                <span>
                    {props.task.text}
                </span>
            </div>
            <div onClick={()=> {props.delTask(props.task.id)}} className={styles.delTaskBtn}>
                <span>
                </span>
            </div>
        </div>
    )
}

export default Task;