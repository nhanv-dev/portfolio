import {useEffect, useRef, useState} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {WelcomeSlide} from './Slides'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'
import {projects} from "../../data";
import './style.css'

export default function Slider({scrollbar}) {

    const [activeSlide, setActiveSlide] = useState(0)
    const buttonRef = useRef(null)

    function handleScrollSlideImage({offset}) {
        const slide = document.querySelector('#slideImage')
        if (offset.y <= 50) slide.style.transform = `scale(1)`
        else slide.style.transform = `scale(${1 + offset.y * 0.0005})`
    }

    useEffect(() => {
        if (activeSlide < 0) setActiveSlide(0)
        if (activeSlide === 0) buttonRef.current.style.transform = `translateY(85px)`
        else buttonRef.current.style.transform = `translateY(-${85 * activeSlide - 85}px)`
    }, [activeSlide])

    useEffect(() => {
        const timeout = setTimeout(() => setActiveSlide(activeSlide + 1 <= 7 ? activeSlide + 1 : 0), 10 * 1000)
        return () => clearTimeout(timeout)
    }, [activeSlide])

    useEffect(() => {
        scrollbar.scrollbar?.addListener(handleScrollSlideImage)
        return () => {
            scrollbar.scrollbar?.removeListener(handleScrollSlideImage)
        }
    }, [scrollbar.scrollbar])

    useEffect(() => {
        if (!scrollbar.scrollbar) return
        const scroller = document.querySelector('#main-content')
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.scrollerProxy("#main-content", {
            scrollTop(value) {
                if (arguments.length) scrollbar.scrollbar.scrollTop = value
                return scrollbar.scrollbar.scrollTop
            }
        })
        scrollbar.scrollbar.addListener(ScrollTrigger.update)
        ScrollTrigger.defaults({scroller: scroller})
        gsap.utils.toArray('.slide-image').forEach((section, i) => {
            section.bg = section.querySelector(".slide-image-show")
            scrollbar.scrollbar.addListener(({offset}) => {
                section.bg.style.top = offset.y - section.bg.parentElement.offsetTop + 'px'
            })
            var innerHeight = section.innerHeight
            if (i) {
                section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;
                gsap.to(section.bg, {
                    backgroundPosition: `50% ${-innerHeight / 2}`,
                    ease: "none",
                    scrollTrigger: {trigger: section, scrub: true}
                })
            } else {
                section.bg.style.backgroundPosition = "50% 0px";
                gsap.to(section.bg, {
                    backgroundPosition: `50% ${-innerHeight / 2}px`,
                    ease: "none",
                    scrollTrigger: {trigger: section, start: "top top", scrub: true}
                })
            }
        })
    }, [scrollbar.scrollbar])

    return (
        <section className="h-[100vh] w-full">
            <div id="slider" className="h-full w-full flex relative overflow-hidden">
                <div className="flex-1 relative hidden lg:block">
                    <div
                        className="absolute max-h-[255px] py-[10px] overflow-hidden left-0 top-[50%] translate-y-[-50%]">
                        <div ref={buttonRef}
                             className="flex flex-col gap-[10px] transition-all duration-1000 ease-in-out">
                            <Button number="01" active={activeSlide === 0 && "active"}
                                    handleClick={() => setActiveSlide(0)}
                                    image="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/web%2Fastronaut-thumbbail.jpg?alt=media&token=fa0b2eff-ea5d-475d-9953-42a5c27f48f0"/>

                            {projects.map((project, index) => (
                                <Button key={index} number={project.slide_number}
                                        active={activeSlide === index + 1 && "active"}
                                        handleClick={() => setActiveSlide(index + 1)}
                                        image={project.slide_thumbnail}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div id="slideImage" className="w-full lg:w-[75%] h-full relative overflow-hidden">
                    <SlideImage number="01" active={activeSlide}
                                image={'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/web%2Fastronaut.jpg?alt=media&token=d3ad0965-b991-499a-ab95-257a8550619d'}/>
                    {projects.map((project, index) => (
                        <SlideImage key={index}
                                    number={project.slide_number}
                                    active={activeSlide}
                                    image={project.slide_image}/>
                    ))}
                    <div
                        className="absolute bottom-[50px] right-[50px] flex gap-5 transition-all linear duration-[800ms]">
                        <button onClick={() => {
                            setActiveSlide(activeSlide - 1 < 0 ? 0 : activeSlide - 1)
                        }}
                                className="w-[40px] h-[40px] z-[10] border-[1px] flex items-center justify-center rounded-full hover:scale-[1.2] transition-all duration-300 ease-in-out">
                            <BiChevronLeft className="text-[24px] leading-[40px] font-extrabold"/>
                        </button>
                        <button
                            onClick={() => setActiveSlide(activeSlide + 1 > 7 ? 0 : activeSlide + 1)}
                            className="w-[40px] h-[40px] z-[10] border-[1px] flex items-center justify-center rounded-full hover:scale-[1.2] transition-all duration-300 ease-in-out">
                            <BiChevronRight className="text-[24px] leading-[40px] font-extrabold"/>
                        </button>
                    </div>
                </div>
                <div
                    className="absolute top-[50%] translate-y-[-55%] bottom-0 lg:left-[15%] xl:w-[1200px] lg:w-[600px] md:w-[600px] sm:w-[500px] w-[100%]">
                    <div id="slideText" className="relative w-[100%]">
                        <WelcomeSlide active={activeSlide === 0 ? "active z-1" : "z-[-1]"}/>
                        {projects.map(project => (
                            <project.slide_component project={project} key={project.id}
                                                     active={activeSlide + 1 === project.id ? "active z-1" : "z-[-1]"}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
const SlideImage = ({image, number, active}) => {

    function setActive() {
        const index = number - 1
        if (index === active) {
            return "active"
        } else if (index === active - 1) {
            return "previous-slide"
        } else if (index === active + 1) {
            return "next-slide"
        }
    }

    return (
        <div
            className={setActive() + " slide-image translate-x-[100%] absolute top-0 left-0 right-0 bottom-0 transition-all ease-in-out duration-[1200ms]"}>
            <div
                className="slide-image-show w-[100%] h-[100%] absolute bg-no-repeat bg-center bg-cover after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[rgba(0,0,0,.3)]"
                style={{backgroundImage: `url(${image})`}}/>
            <div
                style={{WebkitTextStroke: '3px rgba(255, 255, 255, 0.5)'}}
                className="absolute right-[30px] bottom-[90px] text-[12vw] text-[rgba(255,255,255,0.05)] ">
                {number}
            </div>
        </div>
    )
}

const Button = ({number, image, handleClick, active}) => {
    return (
        <button onClick={handleClick}
                className={active + " w-[30px] z-[10] relative hover:w-[130px] transition-all duration-1000 ease-in-out"}>
            <div className="overflow-hidden w-full h-[75px] rounded-r-lg">
                <span
                    style={{WebkitTextStroke: '.75px rgba(255,255,255, 1)'}}
                    className="z-10 transition-all duration-[300ms] ease-in-out absolute right-0 top-[-20px] tracking-widest font-extrabold text-[28px] leading-[1.6] text-white opacity-[0] text-[rgba(255,255,255,.05)]">
                    {number}
                </span>
                <div
                    className="w-full h-full origin-center bg-center bg-fixed bg-clip-content bg-cover relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-20 after:rounded-r-lg"
                    style={{backgroundImage: `url(${image})`}}>
                </div>
            </div>
        </button>
    )
}