import {FiDownload} from 'react-icons/fi'

function About() {
    return (
        <section id="about" className="bg-[#040404]">
            <div className="container py-[120px]">
                <div
                    className="px-4 py-2 bg-[#121212] w-[max-content] font-semibold text-[14px] tracking-[3px] text-[#bbb]">Hello
                </div>
                <div className=" mb-[60px]">
                    <h3 className="pb-6 font-bold text-[2.5rem] leading-[3.5rem] tracking-[2px] my-3">About Me</h3>
                    <div
                        className="relative block w-full h-[2px] bg-[#ffffff14] after:w-[200px] after:h-[2px] after:bg-[white] after:left-0 after:top-0 after:absolute "/>
                </div>

                <div className="flex flex-row flex-wrap ">
                    <div className="basis-full md:basis-1/2 md:pr-10 mb-10">
                        <h5 className="text-[#14bfb5] font-bold text-[1.3rem]">A little bit about myself</h5>
                        <div
                            className="py-5 my-5 border-b-2 border-t-2 border-[#ffffff14] font-semibold text-[14px] tracking-[.8px] leading-[24px]">
                            <p className="mb-3">
                                I’m Trần Thanh Nhân, a front-end developer and a java developer. Now, I am studying at
                                the NongLam University and my major is information technology.
                            </p>
                            <p className="mb-3">
                                I learned about <span className={"text-[#14bfb5] font-bold"}>Java</span>, <span
                                className={"text-[#14bfb5] font-bold"}>Javascript</span> programming languages and
                                oop programming in Java.
                                I have knowledge of database management for databases like <span
                                className={"text-[#14bfb5] font-bold"}>MySQL</span>, <span
                                className={"text-[#14bfb5] font-bold"}>SQL Server</span>, <span
                                className={"text-[#14bfb5] font-bold"}>MongoDB</span>.

                            </p>
                            <p className="mb-3">
                                Besides, I learned about Web Development, front-end and back-end. I have knowledge
                                about <span className={"text-[#14bfb5] font-bold"}>React</span>, <span
                                className={"text-[#14bfb5] font-bold"}>NodeJS</span> and a little <span
                                className={"text-[#14bfb5] font-bold"}>Angular</span>. I have skill with <span
                                className={"text-[#14bfb5] font-bold"}>Material UI</span>, <span
                                className={"text-[#14bfb5] font-bold"}>TailwindCSS</span>, <span
                                className={"text-[#14bfb5] font-bold"}>Bootstrap</span> in Front-end.
                            </p>
                            <p className="mb-3">
                                With Java, I have learned about <span
                                className={"text-[#14bfb5] font-bold"}>Spring Boot</span> for Web Development. I have a
                                project
                                e-commerce built by Spring Boot
                            </p>
                        </div>

                        <div className="group relative w-[max-content] float-left mr-[8px] ">
                            <button type="submit" tabIndex={-1}
                                    className="flex items-center gap-4 group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-transform ease duration-[300ms] z-[2] opacity-100 relative tracking-[2px] font-bold text-[14px] text-black px-4 py-2 bg-[#fff]">
                                <FiDownload className="text-[1.2rem] text-[#14bfb5]"/> Download CV
                            </button>
                            <div
                                className="group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] transition-transform ease duration-[300ms] z-[1] top-[8px] left-[8px] opacity-50 border-[1px] w-full h-full absolute"></div>
                        </div>
                    </div>
                    <div className="basis-full md:basis-1/2 md:pl-10">
                        <h5 className="font-bold text-[0.9rem] tracking-[.5px] mb-3">Java</h5>
                        <div className="relative h-[4px] w-full flex items-center mb-7">
                            <p className="w-full h-[2px] rounded-full bg-[rgba(255,255,255,.2)]"></p>
                            <p className="absolute left-0 top-0 bottom-0 rounded-full bg-white w-[70%]"></p>
                            <p className="absolute left-[70%] bottom-[100%] translate-x-[-100%] mb-2 font-bold text-[.8rem]">70%</p>
                        </div>
                        <h5 className="font-bold text-[0.9rem] tracking-[.5px] mb-3">Spring Boot</h5>
                        <div className="relative h-[4px] w-full flex items-center mb-7">
                            <p className="w-full h-[2px] rounded-full bg-[rgba(255,255,255,.2)]"></p>
                            <p className="absolute left-0 top-0 bottom-0 rounded-full bg-white w-[60%]"></p>
                            <p className="absolute left-[60%] bottom-[100%] translate-x-[-100%] mb-2 font-bold text-[.8rem]">60%</p>
                        </div>
                        <h5 className="font-bold text-[0.9rem] tracking-[.5px] mb-3">HTML/CSS</h5>
                        <div className="relative h-[4px] w-full flex items-center mb-7">
                            <p className="w-full h-[2px] rounded-full bg-[rgba(255,255,255,.2)]"></p>
                            <p className="absolute left-0 top-0 bottom-0 rounded-full bg-white w-[70%]"></p>
                            <p className="absolute left-[70%] bottom-[100%] translate-x-[-100%] mb-2 font-bold text-[.8rem]">70%</p>
                        </div>
                        <h5 className="font-bold text-[0.9rem] tracking-[.5px] mb-3">Java Script</h5>
                        <div className="relative h-[4px] w-full flex items-center mb-7">
                            <p className="w-full h-[2px] rounded-full bg-[rgba(255,255,255,.2)]"></p>
                            <p className="absolute left-0 top-0 bottom-0 rounded-full bg-white w-[80%]"></p>
                            <p className="absolute left-[80%] bottom-[100%] translate-x-[-100%] mb-2 font-bold text-[.8rem]">80%</p>
                        </div>
                        <h5 className="font-bold text-[0.9rem] tracking-[.5px] mb-3">React JS</h5>
                        <div className="relative h-[4px] w-full flex items-center mb-7">
                            <p className="w-full h-[2px] rounded-full bg-[rgba(255,255,255,.2)]"></p>
                            <p className="absolute left-0 top-0 bottom-0 rounded-full bg-white w-[60%]"></p>
                            <p className="absolute left-[60%] bottom-[100%] translate-x-[-100%] mb-2 font-bold text-[.8rem]">60%</p>
                        </div>
                        <h5 className="font-bold text-[0.9rem] tracking-[.5px] mb-3">Angular</h5>
                        <div className="relative h-[4px] w-full flex items-center mb-7">
                            <p className="w-full h-[2px] rounded-full bg-[rgba(255,255,255,.2)]"></p>
                            <p className="absolute left-0 top-0 bottom-0 rounded-full bg-white w-[25%]"></p>
                            <p className="absolute left-[25%] bottom-[100%] translate-x-[-100%] mb-2 font-bold text-[.8rem]">25%</p>
                        </div>
                        <h5 className="font-bold text-[0.9rem] tracking-[.5px] mb-3">Node JS</h5>
                        <div className="relative h-[4px] w-full flex items-center mb-7">
                            <p className="w-full h-[2px] rounded-full bg-[rgba(255,255,255,.2)]"></p>
                            <p className="absolute left-0 top-0 bottom-0 rounded-full bg-white w-[55%]"></p>
                            <p className="absolute left-[55%] bottom-[100%] translate-x-[-100%] mb-2 font-bold text-[.8rem]">55%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;