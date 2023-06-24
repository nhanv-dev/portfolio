import {BiChevronRight} from 'react-icons/bi'

export function WelcomeSlide({active}) {

    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Welcome to my world</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    Hi There.
                </text>
            </svg>

            <div className="w-full mb-10">
                <p className="font-semibold tracking-[.8px] text-[.8rem] md:text-[.9rem] leading-7">
                    My name is Thanh Nhan. Currently, I am studying at the NongLam University.
                    <br/>
                    My major is information technology. I am a front-end developer.
                </p>
            </div>
            <a href={"#about"}
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">About me</span>
            </a>
        </div>
    )
}

export function SpotifySlide({active, project}) {

    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Project #{project.project_number}</span>
            </div>
            <svg width="100%" height="100px" className="hidden lg:flex">
                <text x="0%" y="60%" textAnchor="left">
                    Spotify Webapp
                </text>
            </svg>
            <svg width="100%" height="100px" className="visible lg:hidden">
                <text x="0%" y="60%" textAnchor="left">
                    Spotify
                </text>
            </svg>
            <svg width="100%" height="100px" className="visible lg:hidden">
                <text x="0%" y="60%" textAnchor="left">
                    Webapp
                </text>
            </svg>
            <div className="mb-10 w-full">
                <div className="flex flex-wrap gap-5">
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Services</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Spotify Music, Searching API, UI/UX
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Client</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Spotify Music
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Agency</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Project
                        </p>
                    </div>
                </div>
            </div>
            <a href={project.website} target={"_blank"}
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none"
               rel="noreferrer">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">View case</span>
            </a>
        </div>
    )
}

export function TodoSlide({active, project}) {

    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Project #{project.project_number}</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left" className="">
                    Todo List
                </text>
            </svg>
            <div className="mb-10">
                <div className="flex flex-wrap gap-5">
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Services</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Todo list
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Technology</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            React - Redux
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Agency</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Project
                        </p>
                    </div>
                </div>
            </div>
            <a href={project.website} target={"_blank"}
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none"
               rel="noreferrer">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">View case</span>
            </a>
        </div>
    )
}

export function NoonpostSlide({active, project}) {
    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Project #{project.project_number}</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    Noonpost.
                </text>
            </svg>
            <div className="mb-10">
                <div className="flex flex-wrap gap-5">
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Services</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Blog
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Client</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Noonpost
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Agency</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Project
                        </p>
                    </div>
                </div>
            </div>
            <a href={project.website} target={"_blank"}
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none"
               rel="noreferrer">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">View case</span>
            </a>
        </div>
    )
}

export function ElectronicSlide({active, project}) {
    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Project #{project.project_number}</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    Electronic - eCommerce
                </text>
            </svg>
            <div className="mb-10">
                <div className="flex flex-wrap gap-5">
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Services</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            eCommerce
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Technology</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Java - JSP/Servlet - MySQL
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Agency</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Project
                        </p>
                    </div>
                </div>
            </div>
            <a href={project.website} target={"_blank"}
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none"
               rel="noreferrer">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">View case</span>
            </a>
        </div>
    )
}

export function ChitchatSlide({active, project}) {
    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Project #{project.project_number}</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    Chitchat - App Chat
                </text>
            </svg>
            <div className="mb-10">
                <div className="flex flex-wrap gap-5">
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Services</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            App Chat
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Technology</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Angular - Websocket
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Agency</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Project
                        </p>
                    </div>
                </div>
            </div>
            <a href={project.website} target="_blank" rel="noreferrer"
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">View case</span>
            </a>
        </div>
    )
}

export function SnakeSlide({active, project}) {
    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Project #{project.project_number}</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    Snake Game - Entertainment
                </text>
            </svg>
            <div className="mb-10">
                <div className="flex flex-wrap gap-5">
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Services</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Game
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Technology</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Javascript - Jquery
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Agency</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Project
                        </p>
                    </div>
                </div>
            </div>
            <a href={project.website} target={"_blank"}
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none"
               rel="noreferrer">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">View case</span>
            </a>
        </div>
    )
}

export function DepotSlide({active, project}) {
    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Project #{project.project_number}</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    Depot Store. - eCommerce
                </text>
            </svg>
            <div className="mb-10">
                <div className="flex flex-wrap gap-5">
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Services</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            eCommerce
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Technology</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            React - Spring - MySQL
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Agency</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Project
                        </p>
                    </div>
                </div>
            </div>
            <a href={project.website} target={"_blank"}
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none"
               rel="noreferrer">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">View case</span>
            </a>
        </div>
    )
}

export function ShopioSlide({active, project}) {
    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Project #{project.project_number}</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    Shopio. - eCommerce
                </text>
            </svg>
            <div className="mb-10">
                <div className="flex flex-wrap gap-5">
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Services</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            eCommerce
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Technology</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            React - Node - Express - Mongoose
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Agency</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Project
                        </p>
                    </div>
                </div>
            </div>
            <a href={project.website} target={"_blank"}
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none"
               rel="noreferrer">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">View case</span>
            </a>
        </div>
    )
}

export function CommoditiesSlide({active, project}) {
    return (
        <div
            className={active + " slide-text p-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Project #{project.project_number}</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    Commodies Data.
                </text>
            </svg>
            <div className="mb-10">
                <div className="flex flex-wrap gap-5">
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Services</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            ETL - Data Warehouse
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Technology</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Jave - Jsoup - JSP - Servlet
                        </p>
                    </div>
                    <div className="pl-3 border-l-4 border-[rgba(255,255,255,.1)]">
                        <p className="font-bold tracking-[1px] text-[10px] uppercase text-[rgba(255,255,255,.7)] mb-[5px]">Agency</p>
                        <p className="font-bold text-[.9rem] text-[rgba(255,255,255,.9)]">
                            Personal Project
                        </p>
                    </div>
                </div>
            </div>
            <a href={"https://ecommerce-d49f8.web.app/"} target={"_blank"}
               className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none"
               rel="noreferrer">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">View case</span>
            </a>
        </div>
    )
}