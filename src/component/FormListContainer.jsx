import React, {Component} from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import FormList from "./FormList";
import {DragDropContext} from 'react-beautiful-dnd';
import {
    activeTask,
    actTask,
    addTask,
    addTaskThink,
    completedTask,
    deactTask,
    delDeactTask, delTask, delTimer,
    fullTask, 
    initizlisThink, 
    newTimersThink, 
    oflineTimerOff, 
    oflineTimerOn, 
    pauseTimer, 
    setForm,
    moveItem,
} from "../redux/problem-reducer";
import {taskSel} from "../helpers/selectors";

class FormListContainer extends Component {
    componentDidMount() {
        window.onbeforeunload = (() => {
            localStorage.setItem('state', JSON.stringify({
                ...this.props.state.task,
                dateExit:(new Date()+'').match(/(\d\d):(\d\d):(\d\d)/)
            }));
        });
        if (!this.props.init) {
            this.props.initizlisThink();
        }
    }
    dragEnd(event) {
        let tasks = (this.props.isData === "Full") ? this.props.data.full : (this.props.isData === 'Act') ?
        this.props.data.act : this.props.data.notAct;               
        console.log(event,tasks, tasks[event.destination.index].id, tasks[event.source.index].id);
        this.props.moveItem(tasks[event.destination.index].id,tasks[event.source.index].id,
                            event.destination.index, event.source.index);
    }
    render() {
        let tasks = (this.props.isData === "Full") ? this.props.data.full : (this.props.isData === 'Act') ?
            this.props.data.act : this.props.data.notAct;
        console.log(tasks);
        if (!this.props.init) {
            return <div>*</div>
        }
        return (
            <DragDropContext onDragEnd={this.dragEnd.bind(this)}>
                {
                    <div>
                        <FormList {...this.props} tasks={tasks}/>
                    </div>   
                }
            </DragDropContext>
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
    },{
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
            oflineTimerOn,
            oflineTimerOff,
            delTimer,
            moveItem,
    }
        )
)(FormListContainer);