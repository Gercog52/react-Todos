(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{122:function(t,e,a){t.exports=a(230)},127:function(t,e,a){},128:function(t,e,a){},230:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(42),s=a.n(c),l=(a(127),a(128),a(6)),i=a(17),o=a(90),u=a(91),d=a(46),m=a(94);function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function T(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(a,!0).forEach((function(e){Object(d.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var k=function(t){return r.a.createElement("div",null,t.children,r.a.createElement("span",{style:t.meta.error&&t.meta.touched?{}:{display:"none"}},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"))},p=function(t){var e=t.input,a=(t.meta,Object(m.a)(t,["input","meta"])),n=T({},t.style);return console.log(a),r.a.createElement(k,t,r.a.createElement("".concat(t.tag),T({},e,{},a,{style:n}),null))},E=a(8),_=a.n(E),b=Object(u.a)({form:"inputTask"})((function(t){return console.log(t),r.a.createElement("form",{className:_.a.fomsR,onSubmit:t.handleSubmit},r.a.createElement("span",{className:_.a.str,style:{display:!t.items&&"none"}},"\u276f"),r.a.createElement(o.a,{autoComplete:"off",className:_.a.formInput,tag:"input",placeholder:"What needs to be done?",component:p,name:"TaskText"}))})),y=function(t){return r.a.createElement("div",null,r.a.createElement(b,{items:t.items,initialValues:{TaskText:""},onSubmit:function(e){console.log(e),0!==e.TaskText.length&&t.addTaskThink(e.TaskText,"inputTask")}}))},O=function(t){return r.a.createElement("div",{className:_.a.item},r.a.createElement("button",{onClick:t.task.act?function(){t.deactTask(t.task.id)}:function(){t.actTask(t.task.id)},className:_.a.taskBtn},r.a.createElement("span",{style:{display:t.task.act?"none":""}})),r.a.createElement("div",{className:_.a.taskTextAct+(t.task.act?"":" "+_.a.taskTextDezebl)},r.a.createElement("span",null,t.task.text)),r.a.createElement("div",{onClick:function(){t.delTask(t.task.id)},className:_.a.delTaskBtn},r.a.createElement("span",null)))},A=function(t){var e=t.tasks.map((function(e){return r.a.createElement(O,{actTask:t.actTask,deactTask:t.deactTask,task:e,key:e.id,delTask:t.delTask})}));return r.a.createElement("div",{className:_.a.form},r.a.createElement(y,{items:t.tasks.length>0,addTaskThink:t.addTaskThink,addTask:t.addTask}),e,r.a.createElement("div",{className:_.a.btns,style:{display:!(t.fullCarrentItems>0)&&"none"}},r.a.createElement("div",{className:_.a.info},t.items," items left"),r.a.createElement("div",null,r.a.createElement("button",{className:"Full"===t.isData?_.a.act:"",onClick:t.fullTask},"all"),r.a.createElement("button",{onClick:t.activeTask},"active"),r.a.createElement("button",{onClick:t.completedTask},"complited")),r.a.createElement("div",{style:{width:"116px"}},r.a.createElement("button",{style:{display:t.fullCarrentItems-t.items>0?"":"none"},onClick:t.delDeactTask},r.a.createElement("span",null,"Clear completed")))))},v=a(20),D=a(44);function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(a,!0).forEach((function(e){Object(d.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var j=function(t){return{type:"NEW_TASK",task:{text:t,act:!0}}},C={data:{act:[{id:1,text:"govno",act:!0},{id:2,text:"govno2",act:!0}],notAct:[{id:3,text:"govno3",act:!1}],full:[{id:1,text:"govno",act:!0},{id:2,text:"govno2",act:!0},{id:3,text:"govno3",act:!1}]},isData:"Full",itemsAct:2,fullItems:3,fullCarrentItems:3},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DELL_TASK":var a=!1;return console.log(t),h({},t,{data:h({},t.data,{full:t.data.full.filter((function(t){return t.id!==e.id||(a=t.act,!1)})),notAct:a?t.data.notAct:t.data.notAct.filter((function(t){return t.id!==e.id})),act:a?t.data.act.filter((function(t){return t.id!==e.id})):t.data.act}),fullCarrentItems:t.fullCarrentItems-1,itemsAct:a?t.itemsAct-1:t.itemsAct});case"NEW_TASK":return h({},t,{data:h({},t.data,{act:[].concat(Object(v.a)(t.data.act),[h({id:t.fullItems+1},e.task)]),full:[].concat(Object(v.a)(t.data.full),[h({id:t.fullItems+1},e.task)])}),itemsAct:t.itemsAct+1,fullItems:t.fullItems+1,fullCarrentItems:t.fullCarrentItems+1});case"SET_TYPE_TASK":return h({},t,{isData:e.taskType});case"ACT_TASK":return console.log(h({},t.data.notAct.filter((function(t){return t.id===e.id}))[0],{act:!0})),h({},t,{data:{full:Object(v.a)(t.data.full.map((function(t){return t.id===e.id?h({},t,{act:!0}):t}))),act:[].concat(Object(v.a)(t.data.act),[h({},t.data.notAct.filter((function(t){return t.id===e.id}))[0],{act:!0})]).sort((function(t,e){return-e.id+t.id})),notAct:t.data.notAct.filter((function(t){return t.id!==e.id}))},itemsAct:t.itemsAct+1});case"DEACT_TASK":return h({},t,{data:{full:Object(v.a)(t.data.full.map((function(t){return t.id===e.id?h({},t,{act:!1}):t}))),notAct:[].concat(Object(v.a)(t.data.notAct),[h({},t.data.act.filter((function(t){return t.id===e.id}))[0],{act:!1})]).sort((function(t,e){return-e.id+t.id})),act:t.data.act.filter((function(t){return t.id!==e.id}))},itemsAct:t.itemsAct-1});case"DEL_DEACT_TASK":var n=t.fullCarrentItems;return h({},t,{data:h({},t.data,{notAct:[],full:t.data.full.filter((function(t){return!!t.act||(--n,!1)}))}),fullCarrentItems:n});default:return t}},w=function(t){return t.task},I=Object(l.d)(Object(i.b)((function(t){return{data:w(t).data,isData:w(t).isData,itemsAct:w(t).itemsAct,fullCarrentItems:w(t).fullCarrentItems}}),{addTask:j,addTaskThink:function(t,e){return function(a){a(j(t)),a(Object(D.a)(e))}},fullTask:function(){return{type:"SET_TYPE_TASK",taskType:"Full"}},activeTask:function(t){return{type:"SET_TYPE_TASK",taskType:"Act"}},completedTask:function(){return{type:"SET_TYPE_TASK",taskType:"Complete"}},actTask:function(t){return{type:"ACT_TASK",id:t}},deactTask:function(t){return{type:"DEACT_TASK",id:t}},delDeactTask:function(){return{type:"DEL_DEACT_TASK"}},delTask:function(t){return{type:"DELL_TASK",id:t}}}))((function(t){var e="Full"===t.isData?t.data.full:"Act"===t.isData?t.data.act:t.data.notAct;return r.a.createElement("div",null,r.a.createElement(A,{addTaskThink:t.addTaskThink,addTask:t.addTask,tasks:e,fullTask:t.fullTask,activeTask:t.activeTask,completedTask:t.completedTask,actTask:t.actTask,deactTask:t.deactTask,items:t.itemsAct,delDeactTask:t.delDeactTask,isData:t.isData,fullCarrentItems:t.fullCarrentItems,delTask:t.delTask}))}));var P=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"Name"},"Todos"),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(96),L=a(92),N=Object(l.c)({task:S,form:L.a}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,K=Object(l.e)(N,F(Object(l.a)(x.a)));window.state=K,s.a.render(r.a.createElement(i.a,{store:K},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,a){t.exports={formInput:"FormList_formInput__1rNF-",item:"FormList_item__1MdTD",btns:"FormList_btns__3nRRa",info:"FormList_info__3DbmO",form:"FormList_form__N8ZRb",str:"FormList_str__1IU0e",fomsR:"FormList_fomsR__1vDP2",delTaskBtn:"FormList_delTaskBtn__3BeH9",act:"FormList_act__2kd1A",taskBtn:"FormList_taskBtn__3vJ0E",taskTextAct:"FormList_taskTextAct__3qauo",taskTextDezebl:"FormList_taskTextDezebl__3lSn6"}}},[[122,1,2]]]);
//# sourceMappingURL=main.ee22b1de.chunk.js.map