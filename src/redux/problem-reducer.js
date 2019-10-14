import {reset} from 'redux-form'

const NEW_TASK = 'NEW_TASK';
const SET_TYPE_TASK = 'SET_TYPE_TASK';
const ACT_TASK = 'ACT_TASK';
const DEACT_TASK = 'DEACT_TASK';
const DEL_DEACT_TASK = 'DEL_DEACT_TASK';
const DELL_TASK = 'DELL_TASK';

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
}

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
        }
    }
};
export const addTaskThink = (text, nameForm) => {
    return (dispach) => {
        dispach(addTask(text));
        dispach(reset(nameForm));
    }
};


const startStore = {
    data: {
        act: [],
        notAct: [],
        full: [],
    },
    isData: 'Full',
    itemsAct: 0,
    fullItems: 0,// id
    fullCarrentItems:0,
};

const problem_reducer = (state = startStore, actions) => {
    switch (actions.type) {
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
                            return false
                        }
                    }),
                },
                fullCarrentItems: current,
            };
        default: {
            return state
        }
    }
};

export default problem_reducer