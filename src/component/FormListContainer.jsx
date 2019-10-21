import React, {Component} from 'react'
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
        return {
            data:taskSel(state).data,
            isData:taskSel(state).isData,
            itemsAct:taskSel(state).itemsAct,
            fullCarrentItems: taskSel(state).fullCarrentItems,
            state: state,
            timers:taskSel(state).timers,
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
            newTimersThink,
    }
        )
)(FormListContainer);