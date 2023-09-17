import {useEffect} from 'react';
import './style.css'

function Preloader() {
    useEffect(() => {
        const runLoader = setTimeout(() => {
            // console.log(document.querySelector('#loader'))
            document.querySelector('#loader').style.display = 'none';
        }, 600)
        return () => {
            clearTimeout(runLoader)
        }
    }, [])

    return (
        <div id={"loader"} className={"loader"}>
            <div className="clock-loader"></div>
        </div>
    );
}

export default Preloader;