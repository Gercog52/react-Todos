import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import FormList from "./FormList";
import {
    activeTask,
    actTask,
    addTask,
    addTaskThink,
    completedTask,
    deactTask,
    delDeactTask, delTask,
    fullTask
} from "../redux/problem-reducer";
import {taskSel} from "../helpers/selectors";

const FormListContainer = (props) => {

    let tasks = (props.isData === "Full") ? props.data.full : (props.isData === 'Act') ?
        props.data.act : props.data.notAct;
    return (
        <div>
            <FormList addTaskThink={props.addTaskThink} addTask={props.addTask} tasks={tasks}
                      fullTask={props.fullTask} activeTask={props.activeTask} completedTask={props.completedTask}
                      actTask={props.actTask} deactTask={props.deactTask} items={props.itemsAct}
                      delDeactTask={props.delDeactTask} isData={props.isData}
                      fullCarrentItems={props.fullCarrentItems} delTask={props.delTask}
            />
        </div>
    )
};

export default compose(
    connect((state)=> {
        return {
            data:taskSel(state).data,
            isData:taskSel(state).isData,
            itemsAct:taskSel(state).itemsAct,
            fullCarrentItems: taskSel(state).fullCarrentItems,
        }
    }, {
            addTask,
            addTaskThink,
            fullTask,
            activeTask,
            completedTask,
            actTask,
            deactTask,
            delDeactTask,
            delTask,
    }
        )
)(FormListContainer);