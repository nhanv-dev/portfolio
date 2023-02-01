import React from 'react';
import {MdOutlineZoomOutMap} from "react-icons/md";

function Image({src, alt}) {
    return (
        <div className="border-2 border-white w-[900px] max-w-full mx-auto">
            <div className="group relative w-full">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] backdrop-blur-md flex items-center justify-center min-w-[40px] min-h-[40px] bg-white/80 rounded-full text-[#000] text-[1.45rem]">
                        <MdOutlineZoomOutMap className="relative top-[1px]"/>
                    </button>
                </div>
                <img src={src} alt={alt} className="w-full"/>
            </div>
        </div>
    );
}

export default Image;