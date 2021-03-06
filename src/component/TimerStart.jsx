import React,{useState} from 'react';
import {Form} from "./timer";
import styles from "./FormList.module.css";

function TimerStart(props) {
    const [inp, setInp] = useState(true);
    //const init = {[`hor`]:'00',[`min`]:'00',[`sec`]:'00'};
    const sub = (data) => {
        data.hor = data.hor || '0';
        data.min = data.min || '0';
        data.sec = data.sec || '0';
        let sec = data[`hor`]*60*60+data[`min`]*60+(+data[`sec`]);
        // eslint-disable-next-line no-useless-escape
        //Oct 25 2019 19:15:29
        let date = (new Date()+'').match(/(\d\d):(\d\d):(\d\d)/);

        console.log(new Date(date) - new Date(date),'data',date,new Date());
        props.newTimersThink(sec,props.id,date);
        props.setForm(false);
        setInp((r=>!r));
    };
    /*
                    * [`hor${props.id}`]
            [`min${props.id}`]
            [`sec${props.id}`]
        * */
    return (
        <div>
            {
                (inp) ? (
                    <div className={(props.offlineIsOff) ? styles.hovAct : ''}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle2}></div>
                        <img className={styles.hov} onClick={()=>{
                            if(props.formOn) {
                                return
                            }
                            if (props.offlineIsOff) {
                                props.delTimer(props.timer.id);
                            }
                            props.setForm(true);
                            setInp((r)=>!r)
                        }
                        } src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDUuNzczIDQ1Ljc3MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUuNzczIDQ1Ljc3MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01LjA4MSwxMy43MzdjMi41ODItMy45NDIsNi42MDktNi44NDksMTEuMzItNy45ODhjMC4zNjMtMC4wODcsMC42NjItMC4zNDQsMC44MDItMC42ODkgICAgYzAuMTQxLTAuMzQ2LDAuMTA3LTAuNzM4LTAuMDkxLTEuMDU1QzE1LjYwNCwxLjYwMSwxMi45MzYsMCw5Ljg4OCwwQzUuMTc2LDAsMS4zNTQsMy44MiwxLjM1NCw4LjUzMmMwLDIsMC42OTEsMy44MzcsMS44NDUsNS4yOSAgICBjMC4yMzEsMC4yOTMsMC41ODksMC40NTUsMC45NjIsMC40MzhTNC44NzcsMTQuMDQ4LDUuMDgxLDEzLjczN3oiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMzUuODg2LDBjLTMuMDM0LDAtNS42OTMsMS41ODYtNy4yMDQsMy45NzRjLTAuMiwwLjMxNi0wLjIzNSwwLjcxMS0wLjA5NCwxLjA1OWMwLjE0MiwwLjM0OSwwLjQ0MiwwLjYwNSwwLjgwOSwwLjY5MSAgICBjNC43MjQsMS4xMTIsOC43NjUsMy45OTksMTEuMzY5LDcuOTI4YzAuMjA3LDAuMzEyLDAuNTUyLDAuNTA1LDAuOTI3LDAuNTE4YzAuMzc1LDAuMDE0LDAuNzMxLTAuMTU0LDAuOTYxLTAuNDUxICAgIGMxLjEwNS0xLjQzNiwxLjc2Ni0zLjIzMiwxLjc2Ni01LjE4NkM0NC40MTcsMy44Miw0MC41OTgsMCwzNS44ODYsMHoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNDEuNzUyLDI2LjEzMmMwLTMuMjk0LTAuODU3LTYuMzktMi4zNTEtOS4wODRjLTIuNzY5LTQuOTktNy43NDItOC41NzctMTMuNTk1LTkuNDc1Yy0wLjkzMy0wLjE0My0xLjg4LTAuMjQtMi44NTMtMC4yNCAgICBjLTEuMDE2LDAtMi4wMDYsMC4xMDQtMi45NzksMC4yNkMxNC4xNDYsOC41MjgsOS4xOTgsMTIuMTMsNi40NTgsMTcuMTI2Yy0xLjQ2NywyLjY3Ni0yLjMwNCw1Ljc0NC0yLjMwNCw5LjAwNiAgICBjMCw1LjU4NiwyLjQ2MywxMC41OTcsNi4zNDMsMTQuMDQxbC0xLjU4NCwyLjIzMWMtMC42ODIsMC45NjEtMC40NTYsMi4yOTEsMC41MDUsMi45NzVjMC4zNzUsMC4yNjYsMC44MDYsMC4zOTUsMS4yMzMsMC4zOTUgICAgYzAuNjY4LDAsMS4zMjYtMC4zMTMsMS43NDEtMC44OThsMS41ODMtMi4yM2MyLjY2OSwxLjQ1Nyw1LjcyOCwyLjI4Nyw4Ljk3OCwyLjI4N2MzLjI0OSwwLDYuMzA4LTAuODMsOC45NzctMi4yODdsMS41ODMsMi4yMyAgICBjMC40MTYsMC41ODYsMS4wNzMsMC44OTgsMS43NDEsMC44OThjMC40MjcsMCwwLjg1Ny0wLjEyOSwxLjIzMi0wLjM5NWMwLjk2MS0wLjY4NCwxLjE4OC0yLjAxNCwwLjUwNi0yLjk3NWwtMS41ODQtMi4yMzEgICAgQzM5LjI4OCwzNi43MjksNDEuNzUyLDMxLjcxOCw0MS43NTIsMjYuMTMyeiBNMjIuOTU0LDM5LjY3NGMtNy40NjgsMC0xMy41NDItNi4wNzQtMTMuNTQyLTEzLjU0MiAgICBjMC0yLjMyOCwwLjU5MS00LjUxOSwxLjYyOS02LjQzNWMxLjk3Ni0zLjY0NCw1LjU4LTYuMjY5LDkuODI2LTYuOTNjMC42ODItMC4xMDYsMS4zNzUtMC4xNzgsMi4wODctMC4xNzggICAgYzAuNjcsMCwxLjMyNSwwLjA2NSwxLjk3LDAuMTZjNC4yODIsMC42MjgsNy45MjUsMy4yNTMsOS45MjQsNi45MTNjMS4wNSwxLjkyMywxLjY0Nyw0LjEyNiwxLjY0Nyw2LjQ2OSAgICBDMzYuNDk1LDMzLjYsMzAuNDIxLDM5LjY3NCwyMi45NTQsMzkuNjc0eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0zMC41NCwyOS4zbC01LjE2Ni0zLjE5Yy0wLjEwNy0wLjYwNC0wLjQzNC0xLjEyNS0wLjg5My0xLjQ5NGwwLjIzNi02LjQ4MmMwLjAyOS0wLjgyOC0wLjYxNy0xLjUyMy0xLjQ0NC0xLjU1NCAgICBjLTAuODI1LTAuMDM4LTEuNTIzLDAuNjE2LTEuNTU0LDEuNDQ0bC0wLjIzNyw2LjQ4OWMtMC42NDEsMC40NTItMS4wNjMsMS4xOTYtMS4wNjMsMi4wNDFjMCwxLjM4MSwxLjExOSwyLjQ5OSwyLjUsMi40OTkgICAgYzAuMzkzLDAsMC43Ni0wLjA5OSwxLjA5LTAuMjZsNC45NTUsMy4wNjJjMC4yNDYsMC4xNSwwLjUxOSwwLjIyMywwLjc4NywwLjIyM2MwLjUwMywwLDAuOTkzLTAuMjUyLDEuMjc4LTAuNzExICAgIEMzMS40NjUsMzAuNjYsMzEuMjQ1LDI5LjczNiwzMC41NCwyOS4zeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="  alt=''/>
                    </div>
                ) : (
                    <Form id={props.id} onSubmit={sub}
                          className={styles.timerForm}
                          initialValues={{[`hor`]:'00',[`min`]:'00',[`sec`]:'00'}}/>
                )
            }
        </div>
    );
}

export default TimerStart;