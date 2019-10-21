<<<<<<< HEAD
import React, {Component} from 'react'
=======
import React from 'react'
>>>>>>> ed549858d8ec364d0cc6f1060390c94a28005041
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
<<<<<<< HEAD
    fullTask, newTimersThink
} from "../redux/problem-reducer";
import {taskSel} from "../helpers/selectors";

class FormListContainer extends Component {
    componentDidMount() {
        window.onbeforeunload = (() => {
            localStorage.setItem('state', JSON.stringify(this.props.state.task));
        })
    }
    render() {
        console.log(this.props,'gfd');
        let tasks = (this.props.isData === "Full") ? this.props.data.full : (this.props.isData === 'Act') ?
            this.props.data.act : this.props.data.notAct;
        return (
            <div>
                <FormList addTaskThink={this.props.addTaskThink} addTask={this.props.addTask} tasks={tasks}
                          fullTask={this.props.fullTask} activeTask={this.props.activeTask}
                          completedTask={this.props.completedTask}
                          actTask={this.props.actTask} deactTask={this.props.deactTask} items={this.props.itemsAct}
                          delDeactTask={this.props.delDeactTask} isData={this.props.isData}
                          fullCarrentItems={this.props.fullCarrentItems} delTask={this.props.delTask}
                          timers={this.props.timers} newTimersThink={this.props.newTimersThink}
                />
            </div>
        )
    }
}

export default compose(
    connect((state)=> {
            console.log(state,'я тут');
=======
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
>>>>>>> ed549858d8ec364d0cc6f1060390c94a28005041
        return {
            data:taskSel(state).data,
            isData:taskSel(state).isData,
            itemsAct:taskSel(state).itemsAct,
            fullCarrentItems: taskSel(state).fullCarrentItems,
<<<<<<< HEAD
            state: state,
            timers:taskSel(state).timers,
=======
>>>>>>> ed549858d8ec364d0cc6f1060390c94a28005041
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
<<<<<<< HEAD
            newTimersThink,
=======
>>>>>>> ed549858d8ec364d0cc6f1060390c94a28005041
    }
        )
)(FormListContainer);