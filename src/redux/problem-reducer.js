import {reset} from 'redux-form'

const NEW_TASK = 'NEW_TASK';
const SET_TYPE_TASK = 'SET_TYPE_TASK';
const ACT_TASK = 'ACT_TASK';
const DEACT_TASK = 'DEACT_TASK';
const DEL_DEACT_TASK = 'DEL_DEACT_TASK';
const DELL_TASK = 'DELL_TASK';
const ADD_TIMER = 'ADD_TIMER';
const END_TIMER = 'END_TIMER';
const INIT = 'INIT';
const PAUTSE_TIMER = 'PAUTSE_TIMER';
const DEL_TIMER = 'DEL_TIMER';
const SET_FORM = 'SET_FORM';
const OFLAINE_TIMER_OFF = 'OFLAINE_TIMER_OFF';
const OFLAINE_TIMER_ON = 'OFLAINE_TIMER_ON';
const MOVE_ITEM = 'MOVE_ITEM';

export const moveItem = (idOne, idTwo) => {
    return {
        type: MOVE_ITEM,
        idOne,
        idTwo
    }
    
}

export const oflineTimerOff = (id) => {
    return {
        type:OFLAINE_TIMER_OFF,
        id,
    }
};
export const oflineTimerOn = (id) => {
    return {
        type: OFLAINE_TIMER_ON,
        id,
    }
}

export const setForm = (state) => {
    return {
        type:SET_FORM,
        stateForm:state,
    }
};

export const delTimer = (id) => {
  return {
      type:DEL_TIMER,
      id,
  }
};
export const pauseTimer = (id) => {
  return {
      type:PAUTSE_TIMER,
      id,
  }
};
export const initizlis = () => {
    return {
        type:INIT
    }
};
// dELL NOTACT TIMERS IS DELL_DEACT_TASK
export const  delDeactTask = () => {
    return {
        type: DEL_DEACT_TASK,
    }
};

export const delTask = (id) => {
    return {
        type:DELL_TASK,
        id,
    }
};

export const actTask = (id) => {
    return {
        type: ACT_TASK,
        id,
    }
};
export const deactTask = (id) => {
    return {
        type: DEACT_TASK,
        id,
    }
};

export const fullTask = () => {
    return {
        type: SET_TYPE_TASK,
        taskType: 'Full',
    }
};
export const activeTask = (d) => {
    return {
        type: SET_TYPE_TASK,
        taskType: 'Act',
    }
};
export const completedTask = () => {
    return {
        type: SET_TYPE_TASK,
        taskType: 'Complete',
    }
};

export const addTask = (text) => {
    return {
        type: NEW_TASK,
        task: {
            text,
            act: true,
            timer: false,
        }
    }
};
export const addTimer = (time,delFunc,status,id,isFullTime,date) => {
    return isFullTime ?
        {
            type: ADD_TIMER,
            time,
            delFunc,
            status,
            id,
            fullTime:time,
            pause: false,
            date: date || 'none',
            offlineIsOff: false,
    } :
     {
        type: ADD_TIMER,
        time,
        delFunc,
        status,
        id,
        pause: false,
        offlineIsOff: false
    }
};
export const endTimer = (id) => {
    return {
        type: END_TIMER,
        id,
    }
};
export const initizlisThink = () => {
    return async (dispach,state) => {
        let dateExit = state().task.dateExit;
        state().task.timers.map(item => {
            if (item.time!==0) {
                console.log('ну шо бля');
                if (!item.pause) {
                    if(item.date) {
                        let date = (new Date()+'').match(/(\d\d):(\d\d):(\d\d)/);
                        let data1 = +date[1]*60*60+(+date[2]*60)+(+date[3]);
                        let data2 = +dateExit[1]*60*60+(+dateExit[2]*60)+(+dateExit[3]);
                        let erorTime = data1-data2;
                        let time = item.time - erorTime;
                        console.log(time,date,dateExit);
                        console.log(data1,data2,erorTime);
                        if (time<=0) {
                            dispach(oflineTimerOff(item.id));
                        } else {
                            console.log('я запускаю наъуй');
                            dispach(newTimersThink(time,item.id,item.data));
                        }
                        return true
                    }
                    dispach(newTimersThink(item.time,item.id,item.data));
                }
            } else {
                dispach(delTimer(item.id))
            }
            return true
        });
        dispach(initizlis());
    }
};
// add task + reset forms
export const addTaskThink = (text, nameForm) => {
    return (dispach) => {
        dispach(addTask(text));
        dispach(reset(nameForm));
    }
};
/*export const stopTimer = (id) => {
    return {
        type:STOP_TIMER,
        id,
    }
};*/


export const stopTimerThink = (id) => {
    return (dispach, state) => {
        let task = state().task.timers.find(item => item.id===id);
        task.delFunc();
    }
};
export const newTimersThink = (time,id,data) => {
    return (dispach,state) => {
        let newTime = time;
        let tim = setInterval(()=>{
            --newTime;
            if (newTime<0) {
                dispach(stopTimerThink(id));
                dispach(endTimer(id));
            } else {
                dispach(addTimer(newTime,delTimer,!(time>0),id));
            }
        },1000);
        const delTimer = () => {clearInterval(tim)};
        ///let newTim = new Date()
        //let date = state().task.timers.find(item => item.id===id).data;
        //let shift = (new Date()) - date;
        //let newTime2 = time - shift;
        dispach(addTimer(time,delTimer,false,id,true,data))
    }
};

let state = JSON.parse(localStorage.getItem('state'));
const startStore = (state) ? {...state,initizlis: false,formOn: false,} : {
    data: {
        act: [],
        notAct: [],
        full: [],
    },
    isData: 'Full',
    itemsAct: 0,
    fullItems: 0,// id
    fullCarrentItems: 0,
    timers: [],
    initizlis: false,
    formOn: false,
    dateExit: null,
};

const problem_reducer = (state = startStore, actions) => {
    switch (actions.type) {
        case MOVE_ITEM: {
            debugger
            let idOne = actions.idOne;
            let idTwo = actions.idTwo;
            let one;
            let two;
            let full = [...state.data.full];
            let notAct = [];
            let act = [];
            full.forEach(item => {
                if (item.id === idOne) {
                    one = item;
                }
                if (item.id === idTwo) {
                    two = item;
                }
            });
            for (let t=0; t<full.length; t++) {
                if (full[t].id === idOne) {
                    full[t] = two;
                } else if (full[t].id === idTwo) {
                    full[t] = one;
                }
            }
            full.forEach(item => {
                if (item.act === true) {
                    act.push(item);
                } else {
                    notAct.push(item);
                }
            })
            console.log(full, '<-');
            return {
                ...state,
                data: {
                    ...state.data,
                    // do full, act and notAct
                    full: full,
                    notAct: notAct,
                    act: act,
                }
            }
        }
        case OFLAINE_TIMER_OFF: {
            return {
                ...state,
                timers: state.timers.map(item => {
                    return (item.id === actions.id) ? {...item,offlineIsOff:true} : item
                })
            };
        }
        case OFLAINE_TIMER_ON: {
            return {
                ...state,
                timers: state.timers.map(item => {
                    return (item.id === actions.id) ? {...item,offlineIsOff:false} : item
                })
            };
        }
        case SET_FORM: {
            return {
                ...state,
                formOn: actions.stateForm,
            }
        }
        case DEL_TIMER: {
            return {
                ...state,
                timers: state.timers.filter(item => item.id!==actions.id)
            }
        }
        case PAUTSE_TIMER: {
            return {
                ...state,
                timers: state.timers.map(item => (item.id!==actions.id) ? item : {...item,pause:true})
            }
        }
        case INIT: {
            return {
                ...state,
                initizlis: true
            }
        }
        /*case STOP_TIMER: {
            return {
                ...state,
                timers: [...state.timers,{time.}]
            }
        }*/
        case END_TIMER: {
            let stat = false;
            return {
                ...state,
                data: {
                    ...state.data,
                    full:state.data.full.map(item => {
                        if (item.id !== actions.id) {
                            return item
                        } else {
                            stat = item.act;
                            return {...item,timer:true}
                        }
                    }),
                    notAct: !stat ? state.data.notAct.map(item => (item.id === actions.id) ?
                        {...item,timer: true} : item) : state.data.notAct,
                    act: stat ? state.data.act.map(item => (item.id === actions.id) ?
                        {...item,timer: true} : item) : state.data.act,
                },
                timers: state.timers.map(item => {
                    return (item.id===actions.id) ? {...item,status:true} : item
                })
            }
        }
        case ADD_TIMER: {
            //let typeTask = false;
            let stat = false;
            let timers = [...state.timers.map(item => {
                if (item.id !==actions.id) {
                    return item
                } else {
                    stat = true;
                    return {
                        time:actions.time,delFunc:actions.delFunc,
                        status:actions.status,id:actions.id,
                        pause:actions.pause,
                        fullTime:(actions.fullTime&&item.fullTime!==actions.fullTime) ?
                            actions.fullTime : item.fullTime,
                        date: (actions.date) ? (actions.date !== 'none' && actions.date!==item.date) ?
                            actions.date : item.date : item.date,
                        offlineIsOff: actions.offlineIsOff,
                    }
                }
            })];
            // eslint-disable-next-line no-unused-expressions
            if (!stat) {
                timers.push({time:actions.time,delFunc:actions.delFunc,
                    status:actions.status,id:actions.id,fullTime:actions.fullTime,
                    date:actions.date,oflineTimerOff:actions.offlineIsOff
                });
            }
            return {
                ...state,
                timers: timers,
                /*data: {
                    ...state.data,
                    full: state.data.full.map(item => {
                        if (item.id!==actions.id) {
                            return item
                        } else {
                            typeTask = item.act;
                            return {...item,timer:timers[timers.length-1]}
                        }
                    }),
                    act: (typeTask) ?
                }*/
            }
        }
        case DELL_TASK: {
            let typeTask = false;
            return {
                ...state,
                data: {
                    ...state.data,
                    full: state.data.full.filter(item => {
                        if (item.id!==actions.id) {
                            return true
                        } else {
                            typeTask = item.act;
                            return false
                        }
                    }),
                    notAct: (!typeTask) ? state.data.notAct.filter(item => {
                        return item.id !== actions.id;
                    }) : state.data.notAct,
                    act: (typeTask) ? state.data.act.filter(item => {
                        return item.id !== actions.id;
                    }) : state.data.act,
                },
                fullCarrentItems: state.fullCarrentItems - 1,
                itemsAct: (typeTask) ? state.itemsAct - 1 : state.itemsAct,
                timers: state.timers.filter(item => {
                    if (item.id===actions.id) {
                        item.delFunc();
                        return false;
                    }
                    return true
                })
            }

        }
        case NEW_TASK:
            return {
                ...state,
                data: {
                    ...state.data,
                    act: [...state.data.act, {id: state.fullItems  + 1, ...actions.task}],
                    full: [...state.data.full, {id: state.fullItems + 1, ...actions.task}],
                },
                itemsAct: state.itemsAct+1,
                fullItems: state.fullItems +1,
                fullCarrentItems: state.fullCarrentItems+1,
            };
        case SET_TYPE_TASK:
            return {
                ...state,
                isData: actions.taskType
            };
        case ACT_TASK:

            return {
                ...state,
                data: {
                    full: [...state.data.full.map(item => (item.id === actions.id) ? {...item, act:true} : item)],
                    act: [...state.data.act,{...state.data.notAct.filter(item => item.id===actions.id)[0],act:true}].sort((a,b) => -b.id+a.id),
                    notAct: state.data.notAct.filter(item => (item.id !== actions.id)),
                },
                itemsAct: state.itemsAct + 1,
            };
        case DEACT_TASK:
            return {
                ...state,
                data: {
                    full: [...state.data.full.map(item => (item.id === actions.id) ? {...item, act:false} : item)],
                    notAct: [...state.data.notAct,{...state.data.act.filter(item => item.id===actions.id)[0],act:false}].sort((a,b) => -b.id+a.id),
                    act: state.data.act.filter(item => (item.id !== actions.id)),
                },
                itemsAct: state.itemsAct - 1,
            };
        case DEL_DEACT_TASK:
            let current = state.fullCarrentItems;
            let newDelTimers = [];
            return {
                ...state,
                data: {
                    ...state.data,
                    notAct:[],
                    full: state.data.full.filter(item => {
                        if (item.act) {
                            return true
                        } else {
                            --current;
                            for (let t = 0; t<state.timers.length; t++) {
                                if (state.timers[t].id === item.id) {
                                    newDelTimers.push(state.timers[t]);
                                    return false
                                }
                            }
                            return false
                        }
                    }),
                },
                fullCarrentItems: current,
                timers: state.timers.filter(item => {
                    console.log(newDelTimers,'t');
                    for (let t=0; t<newDelTimers.length; t++) {
                        if (newDelTimers[t].id === item.id) {
                            debugger
                            newDelTimers[t].delFunc();
                            return false
                        }
                    }
                    return true
                })
            };
        default: {
            return state
        }
    }
};

export default problem_reducer