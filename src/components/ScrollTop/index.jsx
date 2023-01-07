import { useEffect, useRef, useState, useReducer } from 'react'
import easing from 'easing-js';

export default function ScrollTop({ scrollbar }) {

    const containerRef = useRef(null)
    const svgRef = useRef(null)
    const buttonRef = useRef(null)
    const [percent, setPercent] = useState(0)

    function scrollTop() {
        scrollbar.scrollbar.scrollTo(0, 0, 800, { easing: easing.swing })
    }
    function transformScrollButton(e) {
        let value = Math.round(e.offset.y / e.limit.y * 100) || 0
        setPercent(value)
        if (svgRef.current.style) svgRef.current.style.transform = `rotate(${value * 10}deg)`
        if (e.offset.y > 100) {
            if (containerRef.current.style) containerRef.current.style.transform = `translate3d(0,${e.offset.y}px,0)`
            if (containerRef.current.style) containerRef.current.style.opacity = '1'
            if (containerRef.current.style) containerRef.current.style.visibility = 'visible'
            if (containerRef.current.style) containerRef.current.classList.remove('hidden')
        } else {
            if (containerRef.current.style) containerRef.current.style.transform = 'translate3d(0,0,0)'
            if (containerRef.current.style) containerRef.current.classList.add('hidden')
            if (containerRef.current.style) containerRef.current.style.opacity = '0'
            if (containerRef.current.style) containerRef.current.style.visibility = 'hidden'
        }
    }

    useEffect(() => {
        scrollbar.scrollbar?.addListener(transformScrollButton)

        return () => {
            scrollbar.scrollbar?.removeListener(transformScrollButton)
        }

    }, [scrollbar.scrollbar])

    return (
        <div ref={containerRef} onClick={scrollTop} className="cursor-pointer hidden absolute right-[1.5rem] top-[85vh] z-[1000] opacity-0 transition-opacity ease duration-[1000ms]">
            <button ref={buttonRef} key={percent} className="cursor-pointer z-[10001] w-[70px] h-[70px] rounded-full text-gray-300 font-bold transition-all ease-in-out duration-[2000ms]">
                {percent}%
            </button>
            <svg ref={svgRef} className="z-10 transition-transform ease-out duration-[2000ms] block w-full h-full fill-gray-300 absolute left-0 top-0"
                version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 174 173" xmlxspace="preserve" >
                <g>
                    <path className="st0" d="M49.7,20.7c0.5,0.7,1.3,0.9,2.2,0.4c1-0.5,1.1-1.1,0.7-1.7c-0.4-0.8-1.1-0.8-2.5-0.5c-2.2,0.5-3.3,0.2-4-1
        c-0.9-1.6-0.1-3.1,1.5-4c2-1.1,3.4-0.5,4.3,0.8l-1.7,0.9c-0.4-0.6-1-0.9-1.9-0.4c-0.8,0.4-0.9,1-0.6,1.6c0.3,0.6,0.9,0.6,2.2,0.3
        c2.5-0.6,3.5,0,4.2,1.2c0.8,1.4,0.5,3-1.7,4.3c-1.8,1-3.5,0.8-4.6-0.9L49.7,20.7z"></path>
                    <path className="st0" d="M67.9,12.8c0.3,1.6-0.3,3.4-2.6,4.2c-2.9,1-4.6-0.8-5.5-3.4c-0.9-2.6-0.2-5.1,2.4-6c2.5-0.8,3.9,0.4,4.5,1.8
        L64.9,10c-0.4-0.7-1-1.3-2.2-0.9c-1.5,0.5-1.5,2.2-1,3.8c0.6,1.7,1.5,3.1,3.1,2.5c1.2-0.4,1.3-1.4,1.2-2.1L67.9,12.8z"></path>
                    <path className="st0" d="M76.8,10l0.5,3.9l-1.9,0.2l-1.2-9.5l3.9-0.5c1.8-0.2,3.2,0.5,3.4,2.2c0.2,1.3-0.4,2-1.2,2.4
        c1,0.2,1.4,0.9,1.6,2.1l0,0.2c0.1,0.8,0.3,1.6,0.4,2.2l-1.9,0.2c-0.2-0.4-0.3-1-0.5-2.2l0-0.3c-0.1-1.1-0.6-1.4-1.8-1.3L76.8,10z
         M76.6,8.5l1.4-0.2c0.9-0.1,1.6-0.5,1.5-1.5c-0.1-0.9-0.8-1.1-1.6-1L76.3,6L76.6,8.5z"></path>
                    <path className="st0" d="M97.7,8.7c-0.2,2.8-1.6,4.9-4.7,4.7c-3-0.2-4.1-2.5-3.9-5.3c0.1-2.4,1.6-4.8,4.7-4.6
        C96.6,3.8,97.8,6.2,97.7,8.7z M91.1,8.3c-0.1,1.9,0.5,3.5,2.1,3.6c1.7,0.1,2.4-1.3,2.5-3.3c0.1-1.8-0.4-3.4-2.1-3.5
        C92,5.1,91.2,6.5,91.1,8.3z"></path>
                    <path className="st0" d="M106.4,5.5l1.9,0.5l-2,7.7l4.2,1.1l-0.6,1.5l-5.8-1.5L106.4,5.5z"></path>
                    <path className="st0" d="M120,9.7l1.8,0.8l-3.3,7.3l3.9,1.7l-0.8,1.4l-5.5-2.5L120,9.7z"></path>
                    <path className="st0" d="M140.9,24.2l-2-1.7l1.1-1.2l5.4,4.7l-1.1,1.2l-2-1.7l-5.2,6.1l-1.5-1.3L140.9,24.2z"></path>
                    <path className="st0" d="M152.6,41.2c-2.2,1.7-4.7,2.1-6.6-0.3c-1.9-2.3-0.9-4.7,1.3-6.4c1.8-1.5,4.6-2,6.5,0.4
        C155.5,37.1,154.6,39.6,152.6,41.2z M148.5,36.1c-1.5,1.2-2.2,2.7-1.3,3.9c1,1.3,2.5,0.9,4.1-0.4c1.4-1.1,2.2-2.5,1.1-3.9
        C151.5,34.5,149.9,34.9,148.5,36.1z"></path>
                    <path className="st0" d="M160.9,45.5l1.6,3.1c0.8,1.6,0.8,3.4-1,4.3c-1.8,0.9-3.4,0.1-4.3-1.7l-0.7-1.2l-3.3,1.7l-0.9-1.7L160.9,45.5z
         M158,49.2l0.6,1.1c0.5,0.9,1.1,1.3,2.1,0.8c0.8-0.4,0.9-1.2,0.4-2.1l-0.6-1.2L158,49.2z"></path>
                    <path className="st0" d="M165.5,72.8l-1.6,0.3l-0.7-3.6l1.6-0.3L165.5,72.8z"></path>
                    <path className="st0" d="M165.1,90.7c-0.9,0.1-1.5,0.6-1.6,1.6c-0.1,1.1,0.4,1.5,1.1,1.5c0.9,0.1,1.3-0.4,1.7-1.8
        c0.8-2.2,1.6-2.9,3-2.8c1.8,0.1,2.6,1.6,2.5,3.4c-0.2,2.3-1.4,3.2-3,3.2l0.1-1.9c0.7-0.1,1.3-0.4,1.3-1.4c0.1-0.9-0.3-1.3-1-1.4
        c-0.7,0-0.9,0.4-1.4,1.7c-0.9,2.4-1.9,3-3.3,2.9c-1.6-0.1-2.8-1.2-2.7-3.7c0.1-2.1,1.3-3.4,3.2-3.4L165.1,90.7z"></path>
                    <path className="st0" d="M162,110.3c-1.5-0.7-2.7-2.1-2.1-4.5c0.8-2.9,3.2-3.4,5.8-2.7c2.6,0.7,4.4,2.6,3.7,5.3c-0.6,2.5-2.5,3.1-4,2.8
        l0.5-1.8c0.8,0,1.6-0.1,2-1.4c0.4-1.5-1-2.5-2.7-2.9c-1.8-0.5-3.4-0.4-3.8,1.2c-0.3,1.2,0.4,1.8,1.1,2.2L162,110.3z"></path>
                    <path className="st0" d="M159.5,119.3l-3.6-1.7l0.8-1.7l8.7,4.1l-1.7,3.5c-0.8,1.6-2.1,2.4-3.7,1.7c-1.2-0.6-1.5-1.5-1.4-2.3
        c-0.7,0.7-1.6,0.7-2.6,0.2l-0.2-0.1c-0.8-0.4-1.5-0.7-2-0.8l0.8-1.7c0.4,0,1,0.3,2.1,0.8l0.2,0.1c1,0.5,1.5,0.3,2-0.9L159.5,119.3z
         M160.9,119.9l-0.6,1.3c-0.4,0.8-0.5,1.6,0.5,2.1c0.8,0.4,1.4-0.1,1.7-0.8l0.7-1.6L160.9,119.9z"></path>
                    <path className="st0" d="M149.2,137.5c-2.2-1.6-3.2-4-1.4-6.5c1.8-2.4,4.3-2,6.5-0.4c1.9,1.4,3.1,3.9,1.3,6.4
        C153.9,139.3,151.3,139,149.2,137.5z M153.1,132.2c-1.5-1.1-3.2-1.4-4.1-0.2c-1,1.3-0.2,2.7,1.4,3.9c1.4,1.1,3,1.5,4,0.1
        C155.4,134.7,154.6,133.3,153.1,132.2z"></path>
                    <path className="st0" d="M147.2,146.6l-1.4,1.3l-5.4-5.9l-3.1,2.9l-0.9-1.3l4.4-4.1L147.2,146.6z"></path>
                    <path className="st0" d="M136.4,155.7l-1.6,1.1l-4.4-6.7l-3.6,2.3L126,151l5-3.3L136.4,155.7z"></path>
                    <path className="st0" d="M112.8,165.5l2.5-0.7l0.5,1.5l-6.9,2l-0.5-1.5l2.5-0.7l-2.3-7.6l1.9-0.6L112.8,165.5z"></path>
                    <path className="st0" d="M92.2,166c-0.3-2.7,0.8-5.1,3.8-5.4c2.9-0.3,4.4,1.8,4.7,4.6c0.2,2.4-0.8,5-3.8,5.3
        C94,170.8,92.5,168.6,92.2,166z M98.7,165.4c-0.2-1.9-1.1-3.3-2.6-3.2c-1.7,0.2-2.1,1.6-1.9,3.6c0.2,1.8,0.9,3.2,2.6,3.1
        C98.4,168.7,98.9,167.2,98.7,165.4z"></path>
                    <path className="st0" d="M84.1,170.7l-3.5-0.3c-1.8-0.2-3.3-1.2-3.1-3.2c0.2-2,1.7-2.9,3.8-2.7l1.4,0.1L83,161l2,0.2L84.1,170.7z
         M82.5,166.2l-1.3-0.1c-1-0.1-1.7,0.2-1.8,1.3c-0.1,1,0.5,1.4,1.5,1.5l1.3,0.1L82.5,166.2z"></path>
                    <path className="st0" d="M58.6,159.8l0.6-1.5l3.4,1.3l-0.6,1.5L58.6,159.8z"></path>
                    <path className="st0" d="M43.8,149.8c0.4-0.8,0.3-1.6-0.5-2.2c-0.9-0.7-1.5-0.5-1.9,0c-0.5,0.7-0.3,1.3,0.6,2.4c1.4,1.8,1.5,2.9,0.7,4
        c-1.1,1.4-2.8,1.4-4.2,0.3c-1.8-1.4-1.9-2.9-1.1-4.2l1.5,1.1c-0.3,0.6-0.4,1.3,0.4,1.9c0.7,0.5,1.3,0.4,1.7-0.1
        c0.4-0.6,0.2-1-0.7-2.2c-1.5-2-1.5-3.2-0.6-4.3c0.9-1.3,2.6-1.7,4.6-0.2c1.7,1.3,2.1,2.9,1.1,4.5L43.8,149.8z"></path>
                    <path className="st0" d="M29,136.4c1.4-0.9,3.2-1.2,4.9,0.7c2,2.2,1.2,4.5-0.8,6.4c-2,1.8-4.6,2.3-6.5,0.3c-1.8-1.9-1.2-3.8-0.2-4.8
        l1.3,1.4c-0.4,0.7-0.8,1.4,0.1,2.4c1.1,1.2,2.6,0.5,3.9-0.7c1.3-1.2,2.2-2.7,1-3.9c-0.9-0.9-1.8-0.6-2.4-0.3L29,136.4z"></path>
                    <path className="st0" d="M22.9,129.5l3.4-2.1l1,1.6l-8.1,5.1l-2.1-3.3c-1-1.5-0.9-3.1,0.6-4c1.1-0.7,2-0.4,2.7,0.1
        c-0.2-1,0.3-1.7,1.3-2.3l0.2-0.1c0.7-0.4,1.4-0.9,1.8-1.3l1,1.6c-0.3,0.3-0.8,0.7-1.8,1.3l-0.2,0.1c-0.9,0.6-1,1.1-0.4,2.2
        L22.9,129.5z M21.6,130.3l-0.8-1.2c-0.5-0.8-1.1-1.3-2-0.7c-0.8,0.5-0.7,1.2-0.3,1.9l0.9,1.5L21.6,130.3z"></path>
                    <path className="st0" d="M13.1,111c2.6-1,5.1-0.5,6.2,2.3c1,2.8-0.6,4.8-3.2,5.7c-2.2,0.8-5,0.5-6.1-2.4C9,114,10.7,111.9,13.1,111z
         M15.4,117.2c1.8-0.7,2.9-1.9,2.4-3.3c-0.6-1.6-2.1-1.6-4-0.9c-1.7,0.6-2.9,1.7-2.3,3.3C12.1,117.7,13.7,117.8,15.4,117.2z"></path>
                    <path className="st0" d="M6.5,104.4l-0.3-1.9l7.9-1.4l-0.7-4.2l1.6-0.1l1.1,5.9L6.5,104.4z"></path>
                    <path className="st0" d="M6.8,78.9l-0.3,2.6l-1.6-0.2l0.8-7.1l1.6,0.2L7,76.9l7.9,0.9l-0.2,2L6.8,78.9z"></path>
                    <path className="st0" d="M14.3,59.7c2.6,0.8,4.4,2.7,3.5,5.6c-0.9,2.8-3.4,3.4-6,2.6c-2.3-0.7-4.3-2.7-3.4-5.6
        C9.2,59.6,11.8,59,14.3,59.7z M12.4,66c1.8,0.6,3.5,0.3,4-1.2c0.5-1.6-0.7-2.6-2.6-3.2c-1.7-0.5-3.4-0.4-3.9,1.2
        C9.4,64.4,10.6,65.5,12.4,66z"></path>
                    <path className="st0" d="M13.2,50.4l1.7-3.1c0.9-1.6,2.4-2.5,4.1-1.6c1.8,0.9,2,2.7,1,4.6l-0.7,1.2l3.3,1.8L21.6,55L13.2,50.4z
         M18,50.8l0.6-1.1c0.5-0.9,0.5-1.7-0.5-2.2c-0.8-0.5-1.5-0.1-2,0.8l-0.6,1.2L18,50.8z"></path>
                    <path className="st0" d="M33.3,31.3l1.1,1.1l-2.5,2.6l-1.1-1.1L33.3,31.3z"></path>
                </g>
            </svg>
        </div>
    )
}

