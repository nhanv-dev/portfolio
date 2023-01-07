import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
export default function Footer() {
    return (
        <footer className="pt-[100px] pb-[50px] bg-[#121212] border-t-[1px] border-[#ffffff14]">
            <div className="container px-6 mx-auto">
                <div className="flex flex-wrap items-start mx-[-30px]">
                    <div className="lg:w-[20%] md:w-[50%] w-full px-[30px] mb-[30px]">
                        <h2 className="mb-8 leading-[28px] text-[1.4rem] tracking-wider uppercase font-extrabold">
                            Portfolio
                        </h2>
                        <div className="flex gap-3 ">
                            <p className="border-[.5px] p-2 text-[13px] rounded-full border-gray-500">
                                <FaFacebookF />
                            </p>
                            <p className="border-[.5px] p-2 text-[13px] rounded-full border-gray-500">
                                <FaGithub />
                            </p>
                            <p className="border-[.5px] p-2 text-[13px] rounded-full border-gray-500">
                                <FaInstagram />
                            </p>
                            <p className="border-[.5px] p-2 text-[13px] rounded-full border-gray-500">
                                <FaYoutube />
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-[20%] md:w-[50%] w-full px-[30px] mb-[30px]">
                        <h3 className="relative mb-8 leading-5 text-[1rem] tracking-[2px] uppercase font-bold pb-2 after:bottom-0 after:left-0 after:absolute after:h-[2px] after:w-[20px] after:bg-white ">
                            Projects
                        </h3>
                        <ul>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] uppercase tracking-[2px]">
                                <a href="https://chitchat-e6ec4.web.app/" target="_blank">Chitchat</a>
                            </li>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] uppercase tracking-[2px]">
                                <a href="https://personal-blog-node.herokuapp.com/" target="_blank">Noonpost</a>
                            </li>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] uppercase tracking-[2px]">
                                <a href="https://spotify-client-react.web.app/" target="_blank">Spotify</a>
                            </li>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] uppercase tracking-[2px]">
                                <a href="https://todos-list-f2750.web.app/" target="_blank">TodosList</a>
                            </li>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] uppercase tracking-[2px]">
                                <a href="https://snake-game-5bff8.web.app/" target="_blank">Snake Game</a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-[30%] md:w-[50%] w-full px-[30px] mb-[30px]">
                        <h3 className="relative mb-8 leading-5 text-[1rem] tracking-[2px] uppercase font-bold pb-2 after:bottom-0 after:left-0 after:absolute after:h-[2px] after:w-[20px] after:bg-white ">
                            Contact
                        </h3>
                        <ul>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] tracking-[2px]">
                                Phone: (+84) 946286951
                            </li>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] tracking-[2px]">
                                Gmail: 19130159@st.hcmuaf.edu.vn
                            </li>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem]  tracking-[2px]">
                                Gmail: tthanhnhan1512@gmail.com
                            </li>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] tracking-[2px]">
                                <a href="https://www.facebook.com/nhan.kden/" target="_blank">Facebook: nhan.kden</a>
                            </li>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] tracking-[2px]">
                                <a href="https://github.com/nhanv-dev" target="_blank">Github: nhanv-dev</a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-[25%] md:w-[50%] w-full px-[30px] mb-[30px]">
                        <h3 className="relative mb-8 leading-5 text-[1rem] tracking-[2px] uppercase font-bold pb-2 after:bottom-0 after:left-0 after:absolute after:h-[2px] after:w-[20px] after:bg-white ">
                            Address
                        </h3>
                        <ul>
                            <li className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.75rem] uppercase  tracking-[2px]">
                                80/4/3A Tan Hoa Dong Street, Disctrict 6, Ho Chi Minh City.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-10 border-t-[.5px] mt-10 border-[rgba(255,255,255,0.1)]">
                    <p className="mb-3 text-[rgba(255,255,255,0.6)] font-bold text-[.8rem] uppercase tracking-[2px]">@2022 Personal portfolio</p>
                    <p className="mb-3 text-[rgba(255,255,255,0.6)] font-semibold text-[.9rem] tracking-[2px]">
                        Designed by
                        <a  href="https://www.facebook.com/nhan.kden/" target="_blank" className="text-white">Tran Thanh Nhan</a>
                        </p>
                </div>
            </div>
        </footer>
    )
}
