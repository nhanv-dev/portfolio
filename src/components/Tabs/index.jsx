import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {projects} from "../../data";
import {BiSearch} from "react-icons/bi";
import {IoClose} from "react-icons/io5";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";

export default function Tabs({scrollbar}) {
    const [active, setActive] = useState(-1);
    const [top, setTop] = useState(0);
    const containerRef = useRef(null)

    function show(index) {
        setActive(index)
        containerRef.current.style.transform = `translateY(${top}px)`;
        scrollbar.scrollbar?.updatePluginOptions('modal', {open: true});
    }

    function hidden() {
        setActive(-1);
        scrollbar.scrollbar?.updatePluginOptions('modal', {open: false});
    }

    function handleScrollingTabs(e) {
        if (containerRef?.current?.style) containerRef.current.style.transform = `translate3d(0,${e.offset.y}px,0)`
        setTop(e.offset.y);
    }

    useEffect(() => {
        scrollbar.scrollbar?.addListener(handleScrollingTabs)
        return () => scrollbar.scrollbar?.removeListener(handleScrollingTabs)
    }, [scrollbar.scrollbar])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div key={project.slug}>
                        <Card item={project} index={index} show={show}/>
                    </div>
                ))}
                <div ref={containerRef}
                     className={`${active !== -1 ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-500 backdrop-blur w-[100vw] h-[100vh] left-0 top-0 fixed z-[1000] flex items-center bg-[rgba(0,0,0,0.7)]`}>
                    <Slide active={active} projects={projects} hidden={hidden}/>
                    <button onClick={hidden}
                            className="z-[100] cursor-pointer absolute right-[22px] top-[22px] w-[28px] h-[28px] rounded-full bg-white text-black flex items-center justify-center ">
                        <IoClose className="text-2xl"/>
                    </button>
                    <button onClick={hidden} className="absolute left-0 right-0 top-0 bottom-0 z-[1] cursor-none"/>
                </div>
            </div>
        </div>
    );
}
const Slide = ({active, projects, hidden}) => {
    const [project, setProject] = useState(null);
    const [image, setImage] = useState(null);
    const [index, setIndex] = useState(-1);
    const [loaded, setLoaded] = useState(false);
    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            hidden();
        }
    }, []);

    useEffect(() => {
        if (active === -1) {
            setProject(null);
            document.removeEventListener("keydown", escFunction, false);
        } else {
            setProject(projects[active])
            document.addEventListener("keydown", escFunction, false);
        }
        return () => {
            setIndex(-1)
            setProject(null);
            setLoaded(false);
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [active])

    useEffect(() => {
        if (project) {
            setImage(project.images[index])
            setIndex(0)
            setLoaded(true)
        } else {
            setImage(null)
            setIndex(-1)
            setLoaded(false)
        }
    }, [project])

    useEffect(() => {
        if (index === -1) {
            setImage(null)
        } else {
            setImage(project.images[index])
        }
    }, [index])

    const handleNextImage = () => {
        if (index === project.images.length - 1)
            setIndex(0)
        else
            setIndex(prev => prev + 1)
    }

    const handlePrevImage = () => {
        if (index === 0)
            setIndex(project.images.length - 1)
        else
            setIndex(prev => prev - 1)
    }

    return loaded && (
        <div className="relative lg:p-10 md:p-5 w-full h-full">
            <div className="flex items-center justify-center mb-10 gap-10">
                <button onClick={handlePrevImage}
                        className={"relative z-50 font-semibold text-3xl text-black flex items-center justify-center w-[32px] h-[32px] bg-[rgba(255,255,255,.7)] rounded-full"}>
                    <BsArrowLeftShort/>
                </button>
                {image &&
                    <div
                        className="relative z-50 transition-all duration-300 flex items-center justify-center rounded-md border border-white">
                        <Image image={image} className={"w-auto h-[500px] rounded-md"}/>
                    </div>
                }
                <button onClick={handleNextImage}
                        className={"relative z-50 font-semibold text-3xl text-black flex items-center justify-center w-[32px] h-[32px] bg-[rgba(255,255,255,.7)] rounded-full"}>
                    <BsArrowRightShort/>
                </button>
            </div>
            <div className="flex items-center justify-center gap-2">
                {project.images.map((img, index) => (
                    <button key={index} onClick={() => setIndex(index)}
                            className={`${img === image ? 'border-white' : 'border-[transparent]'} relative z-50 transition-all border min-h-[80px] flex items-center justify-center rounded-md`}>
                        <Image image={img} className={"min-h-[80px] max-h-[80px] rounded-md"}/>
                    </button>
                ))}
            </div>
        </div>
    )
}
const Image = ({image, className}) => {
    const [didLoad, setLoad] = useState(false);


    return (
        <img src={`${image}`} alt={"project"} className={`${didLoad ? '' : 'blur'} ${className}`}
             onLoad={() => setLoad(true)}/>
    )
}
const Card = ({item, index, show}) => {
    let className = "group mt-[0px] "
    if (index % 3 === 2) className += "lg:mt-[60px] "
    if (index % 3 === 1) className += "lg:mt-[30px] "
    if (index % 3 === 0) className += "lg:mt-[0px] "
    if (index % 2 === 1) className += "md:mt-[30px] "
    if (index % 2 === 0) className += "md:mt-[0px] "


    return (
        <div className={className}>
            <button onClick={() => show(index)} tabIndex={-1}
                    className="outline-none group relative block mb-5 w-full h-[300px] cursor-pointer">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 after:absolute after:top-[-1px] after:left-[-1px] after:right-[-1px] after:bottom-[-1px] after:bg-black after:opacity-[.3]">
                    <div style={{backgroundImage: `url(${item.card_image})`}}
                         className="w-full h-full bg-cover bg-no-repeat bg-center"/>
                    <div
                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-100 transition-all">
                        <div
                            className="backdrop-blur-md flex items-center justify-center min-w-[40px] min-h-[40px] bg-white/80 rounded-full text-[#000] text-[1.45rem]">
                            <BiSearch className="relative top-[1px] left-[.75px] "/>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute top-[-1px] left-[-1px] bottom-[-1px] w-0 group-hover:w-[10px] bg-black transition-all duration-500"/>
                <div
                    className="absolute top-[-1px] right-[-1px] bottom-[-1px] w-0 group-hover:w-[10px] bg-black transition-all duration-500"/>
                <div
                    className="absolute left-[-1px] right-[-1px] top-[-1px] h-0 group-hover:h-[10px] bg-black transition-all duration-500"/>
                <div
                    className="absolute left-[-1px] right-[-1px] bottom-[-1px] h-0 group-hover:h-[10px] bg-black transition-all duration-500"/>
            </button>
            <div className="pl-4 border-l-2">
                <p className="text-[1.25rem] font-bold mb-1 cursor-pointer outline-none" tabIndex={-1}
                   dangerouslySetInnerHTML={{__html: item.card_title}}>
                </p>
                <div
                    className="relative overflow-hidden leading-6 mt-2 text-[#14bfb5] font-bold text-[14px]">
                    <p className="translate-y-[0] group-hover:translate-y-[-100%] transition-all duration-300 ease-in-out"
                       dangerouslySetInnerHTML={{__html: item.card_desc}}></p>
                    <a href={item.website} target="_blank" rel="noreferrer" tabIndex={-1}
                       className="block absolute top-[100%] left-0 group-hover:translate-y-[-100%] transition-all duration-300 ease-in-out">
                        Visit Website
                    </a>
                </div>
            </div>
        </div>
    )
}