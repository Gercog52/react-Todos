import React from 'react';
import styles from "./FormList.module.css";
import Timer from "./timer";
import TimerStart from "./TimerStart";
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {
    return (
        <Draggable draggableId={''+props.task.id} index={props.index}>
            {
                (provided) => {
                    return (
                        <div className={styles.item}
                             {...provided.dragHandleProps}
                             {...provided.draggableProps}
                             ref={provided.innerRef}
                        >
                            <button onClick={(props.task.act) ? () => { props.deactTask(props.task.id) } : () => { props.actTask(props.task.id) }} className={styles.taskBtn}><span style={{ display: (props.task.act) ? 'none' : '' }}>
                            </span></button>
                            <div className={styles.taskTextAct + ((!props.task.act) ? ' ' + styles.taskTextDezebl : '')}>
                                <span>
                                    {props.task.text}
                                </span>
                            </div>
                            {(typeof (props.timer) === "object") ? /// сделать чтобы работало по другому
                                <div className={styles.svg} style={{ display: 'block' }}>
                                    <Timer formOn={props.formOn} setForm={props.setForm} pauseTimer={props.pauseTimer} id={props.task.id} newTimersThink={props.newTimersThink} timer={props.timer} />
                                </div>
                                :
                                <div className={styles.svg}>
                                    <TimerStart
                                        timer={props.timer}
                                        formOn={props.formOn}
                                        setForm={props.setForm}
                                        id={props.task.id}
                                        newTimersThink={props.newTimersThink}
                                        oflineTimerOn={props.oflineTimerOn}
                                        oflineTimerOff={props.oflineTimerOff}
                                        delTimer={props.delTimer}
                                        offlineIsOff={props.offlineIsOff}
                                    />
                                </div>}
                            <div onClick={() => { props.delTask(props.task.id) }} className={styles.delTaskBtn}>
                                <span>
                                </span>
                            </div>
                        </div>
                    )
                }
            }
        </Draggable>
    )
};

export default Task