import {useReducer, useEffect} from 'react';
import Layout from '../../components/Layout'
import QuickLink from '../../components/QuickLink'
import scrollbarReducer, {initialState} from '../../components/scrollbarReducer'
import ContactBanner from '../../components/Contact/ContactBanner'
import Spotify1 from "../../assets/images/spotify-1.png";
import Spotify2 from "../../assets/images/spotify-2.png";
import Spotify3 from "../../assets/images/spotify-3.png";
import Image from "../../components/Image";

export default function Commodities() {
    const links = [
        {id: "#my-project", title: "My Project"},
        {id: "#contact", title: "Contact Me"},
    ]

    const [scrollbar, dispatch] = useReducer(
        scrollbarReducer, initialState
    )
    useEffect(() => {
        dispatch({type: 'INIT', container: document.querySelector('#main-content'), scrollbar: 'scrollbar'})
        dispatch({type: 'INIT', container: document.querySelector('#contact-fixed'), scrollbar: 'contactFixed'})
    }, [])

    return (
        <Layout title="Commodities" scrollbar={scrollbar}>
            <section id="my-project" className="bg-[#121212]">
                <div className="container py-[120px]">
                    <div className="px-4 py-2 bg-[#040404] w-[max-content] font-semibold text-[14px] tracking-[3px] text-[#bbb]">My Project</div>
                    <div className="mb-[60px]">
                        <h3 className="pb-6 font-bold text-[2.5rem] leading-[3.5rem] tracking-[2px] my-3">
                            Commodities Music Webapp</h3>
                        <div
                            className="relative block w-full h-[2px] bg-[#ffffff14] after:w-[200px] after:h-[2px] after:bg-[white] after:left-0 after:top-0 after:absolute "/>
                    </div>
                    <div>
                        <p className="mb-8 font-medium leading-9 text-[1.05rem]">
                            My Spotify Webapp uses NodeJS and ReactJS.
                            My Spotify Webapp uses NodeJS and ReactJS.
                            My Spotify Webapp uses NodeJS and ReactJS.
                            My Spotify Webapp uses NodeJS and ReactJS.
                            My Spotify Webapp uses NodeJS and ReactJS.
                        </p>
                        <div className="border-2 border-white mb-8 w-[900px] max-w-full mx-auto">
                            <Image alt="spotify" src={Spotify1}/>
                        </div>
                        <div className="border-2 border-white mb-8 w-[900px] max-w-full mx-auto">
                            <Image alt="spotify" src={Spotify2}/>
                        </div>

                            <Image alt="spotify" src={Spotify3}/>
                    </div>
                </div>
            </section>
            <section id="contact">
                <ContactBanner scrollbar={scrollbar}/>
            </section>
            <QuickLink links={links} scrollbar={scrollbar}/>
        </Layout>
    )
}