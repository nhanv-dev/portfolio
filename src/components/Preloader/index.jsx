import { useEffect } from 'react';
import './style.css'
function Preloader() {
    useEffect(() => {

        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 2000)

    }, [])

    return (
        <div className="loader">
            <div className="clock-loader"></div>
        </div>
    );
}

export default Preloader;