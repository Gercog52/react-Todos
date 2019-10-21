import React,{useEffect} from 'react';
import mp3 from './1/Sound_08419.mp3';

function Audio(props) {
    const myRef = React.createRef();
    useEffect(() => {
        if (props.autoPlay&&props.play) {
            myRef.current.play()
        } else {
            myRef.current.pause()
        }
    }, [myRef,props.autoPlay,props.play]);
    return (
        <div>
            <audio ref={myRef} src={mp3} autoPlay={props.autoPlay} loop={true}/>
        </div>
    );
}
export default Audio;