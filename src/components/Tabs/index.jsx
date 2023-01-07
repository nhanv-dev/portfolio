import React from 'react';

export default function Tabs() {
    const cards = [
        {
            title: "Spotify <br/> Music Webapp",
            desc: "Brand - Product - Webapp",
            image: "https://www.orissapost.com/wp-content/uploads/2020/02/spotify.jpg",
            slug: "https://spotify-client-react.web.app/",
        },
        {
            title: "Noonpost. <br/> Personal Blog",
            desc: "Brand - Blog - Webapp",
            image: "https://i.pinimg.com/736x/7b/b0/e2/7bb0e2d57bfe2ab5a319ff23d4ec4665.jpg",
            slug: "https://personal-blog-node.herokuapp.com/",
        },
        {
            title: "Todo List <br/>React Webapp",
            desc: "Blog - Webapp",
            image: "https://cdn.dribbble.com/users/1131645/screenshots/14682117/dribble-mockup_4x.jpg",
            slug: "https://todos-list-f2750.web.app/",
        },
        {
            title: "Electronic Store. <br/> eCommerce",
            desc: "eCommerce - SSR - JavaWeb",
            image: "https://cdn.dribbble.com/users/3713179/screenshots/9536384/media/ed9f05d7ed5b92878712ced805e97a54.png?compress=1&resize=400x300",
            slug: "",
        },
        {
            title: "Chitchat - App Chat <br/> Angular Webapp",
            desc: "Websocket - CSR - Angular",
            image: "https://c0.wallpaperflare.com/preview/578/536/60/internet-whatsapp-smartphone-communication.jpg",
            slug: "https://chitchat-e6ec4.web.app/",
        },
        {
            title: "Snake Game. <br/> Entertainment",
            desc: "Entertainment - Jquery - Javascript",
            image: "https://store-images.s-microsoft.com/image/apps.18353.14473180969187901.3a3be6c8-a839-4def-98cb-b97410c676ab.81b5224b-6b06-476c-9103-3f3c2eecb29a",
            slug: "https://snake-game-5bff8.web.app/",
        },
    ]
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cards.map((item, index) => (
                    <Card key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}

const Card = ({ item, index }) => {
    const { title, desc, image, slug } = item
    let className = "group mt-[0px] "
    if (index % 3 === 2) className += "lg:mt-[60px] "
    if (index % 3 === 1) className += "lg:mt-[30px] "
    if (index % 3 === 0) className += "lg:mt-[0px] "
    if (index % 2 === 1) className += "md:mt-[30px] "
    if (index % 2 === 0) className += "md:mt-[0px] "

    return (
        <div className={className}>
            <div className="group relative block mb-5 w-full h-[300px] cursor-pointer">
                <div className="absolute top-0 left-0 right-0 bottom-0 after:absolute after:top-[-1px] after:left-[-1px] after:right-[-1px] after:bottom-[-1px] after:bg-black after:opacity-[.3]">
                    <div style={{ backgroundImage: `url(${image})` }} alt={desc} className="w-full h-full bg-cover bg-no-repeat bg-center" />
                </div>
                <div className="absolute top-[-1px] left-[-1px] bottom-[-1px] w-0 group-hover:w-[10px] bg-black transition-all duration-500" />
                <div className="absolute top-[-1px] right-[-1px] bottom-[-1px] w-0 group-hover:w-[10px] bg-black transition-all duration-500" />
                <div className="absolute left-[-1px] right-[-1px] top-[-1px] h-0 group-hover:h-[10px] bg-black transition-all duration-500" />
                <div className="absolute left-[-1px] right-[-1px] bottom-[-1px] h-0 group-hover:h-[10px] bg-black transition-all duration-500" />
            </div>
            <div className="pl-4 border-l-2">
                <a className="text-[1.25rem] font-bold mb-1 cursor-pointer" dangerouslySetInnerHTML={{ __html: title }}></a>
                <div className="relative overflow-hidden font-semibold text-[14px] leading-6">
                    <p className="translate-y-[0] group-hover:translate-y-[-100%] transition-all duration-300 ease-in-out" dangerouslySetInnerHTML={{ __html: desc }}></p>
                    <a href={slug} target="_blank" className="absolute top-[100%] left-0 group-hover:translate-y-[-100%] transition-all duration-300 ease-in-out">
                        Read More
                    </a>
                </div>
            </div>
        </div >
    )
} 