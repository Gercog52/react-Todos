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
    fullTask, initizlisThink, newTimersThink, pauseTimer, setForm
} from "../redux/problem-reducer";
import {taskSel} from "../helpers/selectors";

class FormListContainer extends Component {
    componentDidMount() {
        window.onbeforeunload = (() => {
            localStorage.setItem('state', JSON.stringify(this.props.state.task));
        });
        if (!this.props.init) {
            this.props.initizlisThink();
        }
    }
    render() {
        let tasks = (this.props.isData === "Full") ? this.props.data.full : (this.props.isData === 'Act') ?
            this.props.data.act : this.props.data.notAct;
        if (!this.props.init) {
            return <div>*</div>
        }
        return (
            <div>
                <FormList addTaskThink={this.props.addTaskThink} addTask={this.props.addTask} tasks={tasks}
                          fullTask={this.props.fullTask} activeTask={this.props.activeTask}
                          completedTask={this.props.completedTask}
                          actTask={this.props.actTask} deactTask={this.props.deactTask} items={this.props.itemsAct}
                          delDeactTask={this.props.delDeactTask} isData={this.props.isData}
                          fullCarrentItems={this.props.fullCarrentItems} delTask={this.props.delTask}
                          timers={this.props.timers} newTimersThink={this.props.newTimersThink}
                          pauseTimer={this.props.pauseTimer}
                          setForm={this.props.setForm} formOn={this.props.formOn}
                />
            </div>
        )
    }
}

export default compose(
    connect((state)=> {

        return {
            data:taskSel(state).data,
            isData:taskSel(state).isData,
            itemsAct:taskSel(state).itemsAct,
            fullCarrentItems: taskSel(state).fullCarrentItems,
            state: state,
            timers:taskSel(state).timers,
            init:taskSel(state).initizlis,
            formOn: taskSel(state).formOn,
        }
    }, {
            setForm,
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
            initizlisThink,
            pauseTimer,
    }
        )
)(FormListContainer);