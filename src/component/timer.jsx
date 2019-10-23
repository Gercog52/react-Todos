import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import styles from "./FormList.module.css";
import Input from "../helpers/formHoc";
import {fullSec} from "../helpers/HelpFuncJs";
import Audio from "../music/audio";

function Timer(props) {
    const [inpState, setInp] = useState(false);
    const [isOnTimer, setIsOnTimer] = useState(!props.timer.pause);/////////////
    const [play, setPlay] = useState(false);
    const [playBtn, setPlayBtn] = useState(false);

    let hourst = 0;
    let menut = 0;
    let sec = 0;
    if (props.timer.status) {
        if(!playBtn) {
            if (!play) {
                setPlay(true);
            }
        }
        if (isOnTimer) {
            setIsOnTimer(false);
        }
        hourst = Math.floor(props.timer.fullTime / 60 / 60);
        menut = Math.floor((props.timer.fullTime - (hourst * 60 * 60)) / 60);
        sec = Math.floor(props.timer.fullTime - (hourst * 60 * 60 + menut * 60));
    } else {
        hourst = Math.floor(props.timer.time / 60 / 60);
        menut = Math.floor((props.timer.time - (hourst * 60 * 60)) / 60);
        sec = Math.floor(props.timer.time - (hourst * 60 * 60 + menut * 60));
    }

    sec = ((sec + '').length === 1) ? '0' + sec : sec;
    menut = ((menut + '').length === 1) ? '0' + menut : menut;
    hourst = ((hourst + '').length === 1) ? '0' + hourst : hourst;
    const sub = (data) => {
        props.newTimersThink(+data.hor * 60 * 60 + (+data.min) * 60 + (+data.sec), props.id);
        setInp((r) => !r);
        setIsOnTimer(true);
    };
    //(props.timer.) <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[]} drums={[]} />
    return (
        <div>
            {
                (inpState) ?
                    (
                        <div>
                            <Form onSubmit={sub} initialValues={{hor: hourst, min: menut, sec: sec}}
                                  className={styles.timerForm}/>
                        </div>
                    )
                    :
                    (
                        <div style={{display: 'flex', 'alignitems': 'center',}}>
                            <Audio play={play} autoPlay={props.timer.status}/>
                            <span onClick={() => {
                                props.timer.delFunc();
                                setInp(r => !r);
                            }}>
                                {hourst}:{menut}:{sec}
                            </span>
                            {
                                (isOnTimer) ? (
                                    <div onClick={() => {
                                        props.timer.delFunc();
                                        props.pauseTimer(props.id);
                                        setIsOnTimer(false);
                                        setPlay(false);
                                    }} className={styles.payse}>
                                        <span></span>
                                        <span></span>
                                    </div>
                                ) : (
                                    <>
                                        <div onClick={() => {
                                            props.newTimersThink(fullSec(hourst, menut, sec), props.id);
                                            setIsOnTimer(true);
                                            setPlayBtn(false);
                                        }} className={styles.payse}>
                                                <img
                                                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMTI0LjUxMiAxMjQuNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjQuNTEyIDEyNC41MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTEzLjk1Niw1Ny4wMDZsLTk3LjQtNTYuMmMtNC0yLjMtOSwwLjYtOSw1LjJ2MTEyLjVjMCw0LjYsNSw3LjUsOSw1LjJsOTcuNC01Ni4yICAgQzExNy45NTYsNjUuMTA1LDExNy45NTYsNTkuMzA2LDExMy45NTYsNTcuMDA2eiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" alt=''/>
                                        </div>
                                        {   (play) ?

                                                <div onClick={()=> {
                                                    setPlay(false);
                                                    setPlayBtn(true);
                                                }
                                                } className={styles.payse+' '+styles.song}>
                                                    <img style={{'width':'100%','height':'85%','marginLeft':'-7px'}} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2LjAwNCA0Ni4wMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2LjAwNCA0Ni4wMDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMzYuNDA2LDAuNDAyYy0wLjk3Ni0wLjU1Mi0yLjEzMS0wLjUzNC0zLjA5LDAuMDQ0Yy0wLjA0NiwwLjAyNy0wLjA5LDAuMDU5LTAuMTMsMC4wOTNMMTkuNjM2LDEyLjAwMkg5LjAwMiAgYy0wLjU1MywwLTEsMC40NDctMSwxdjE5YzAsMC4yNjYsMC4xMDUsMC41MiwwLjI5MywwLjcwN3MwLjQ0MSwwLjI5MywwLjcwNywwLjI5M2wxMC42MS0wLjAwNWwxMy41NDMsMTIuNDQgIGMwLjA1LDAuMDQ2LDAuMTA0LDAuMDg2LDAuMTYxLDAuMTJjMC40OTIsMC4yOTcsMS4wMzcsMC40NDYsMS41ODIsMC40NDZjMC41MTctMC4wMDEsMS4wMzMtMC4xMzQsMS41MDgtMC40MDIgIGMwLjk5OS0wLjU2NCwxLjU5Ni0xLjU5NSwxLjU5Ni0yLjc1NlYzLjE1OEMzOC4wMDIsMS45OTcsMzcuNDA1LDAuOTY3LDM2LjQwNiwwLjQwMnogTTM2LjAwMiw0Mi44NDUgIGMwLDAuNDMxLTAuMjE3LDAuODEtMC41NzksMS4wMTVjLTAuMTU1LDAuMDg3LTAuNTQ4LDAuMjU1LTEsMC4wMjZMMjEuMDAyLDMxLjU1N3YtNC41NTZjMC0wLjU1My0wLjQ0Ny0xLTEtMXMtMSwwLjQ0Ny0xLDF2My45OTYgIGwtOSwwLjAwNHYtMTdoOXY0YzAsMC41NTMsMC40NDcsMSwxLDFzMS0wLjQ0NywxLTF2LTQuNTM2bDEzLjQwNS0xMS4zNGMwLjQ2MS0wLjI0MiwwLjg2LTAuMDcsMS4wMTYsMC4wMTggIGMwLjM2MiwwLjIwNSwwLjU3OSwwLjU4NCwwLjU3OSwxLjAxNVY0Mi44NDV6IiBmaWxsPSJ3aGl0ZSIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" alt=""/>
                                                    <div className={styles.bresh} style={{'marginLeft':'2px'}}></div>
                                                    <div className={styles.bresh2} style={{'marginLeft':'1px'}}></div>
                                                    <div className={styles.lepTop}></div>
                                                    <div className={styles.lepRight}></div>
                                                    <div className={styles.lepBottom}></div>
                                                </div>

                                             : ''
                                        }

                                    </>
                                )
                            }
                        </div>
                )
                }
                </div>
                );
                }
                const ReduxForm = (props) => {
                return (
                <form className={props.className} onSubmit={props.handleSubmit}>
                <Field autoComplete={'off'} tag='input' component={Input} name={'hor'} />:
                <Field autoComplete={'off'} tag='input' component={Input} name={'min'} />:
                <Field autoComplete={'off'} tag='input' component={Input} name={'sec'} />
                <button className={styles.BottomTimer}>
                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMTI0LjUxMiAxMjQuNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjQuNTEyIDEyNC41MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTEzLjk1Niw1Ny4wMDZsLTk3LjQtNTYuMmMtNC0yLjMtOSwwLjYtOSw1LjJ2MTEyLjVjMCw0LjYsNSw3LjUsOSw1LjJsOTcuNC01Ni4yICAgQzExNy45NTYsNjUuMTA1LDExNy45NTYsNTkuMzA2LDExMy45NTYsNTcuMDA2eiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" alt=''/>
                </button>
                </form>
                )
            };
                export const Form = reduxForm({
                form:'timer'
            })(ReduxForm);


                export default Timer;