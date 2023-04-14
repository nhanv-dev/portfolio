import spotify1 from "./assets/images/spotify-1.png";
import spotify2 from "./assets/images/spotify-2.png";
import spotify3 from "./assets/images/spotify-3.png";
import spotify4 from "./assets/images/spotify-4.png";
import spotify5 from "./assets/images/spotify-5.png";
import spotify6 from "./assets/images/spotify-6.png";
import spotify7 from "./assets/images/spotify-7.png";
import spotify8 from "./assets/images/spotify-8.png";
import chitChat1 from "./assets/images/chitchat-1.png";
import chitChat2 from "./assets/images/chitchat-2.png";
import chitChat3 from "./assets/images/chitchat-3.png";
import todo1 from "./assets/images/todo-1.png";
import todo2 from "./assets/images/todo-2.png";
import snake1 from "./assets/images/snake-1.png";
import snake2 from "./assets/images/snake-2.png";
import snake3 from "./assets/images/snake-3.png";
import snake4 from "./assets/images/snake-4.png";
import snake5 from "./assets/images/snake-5.png";
import snake6 from "./assets/images/snake-6.png";
import noonpost1 from "./assets/images/noonpost-1.png";
import noonpost2 from "./assets/images/noonpost-2.png";
import noonpost3 from "./assets/images/noonpost-3.png";
import noonpost4 from "./assets/images/noonpost-4.png";
import noonpost5 from "./assets/images/noonpost-5.png";
import {
    ChitchatSlide,
    CommoditiesSlide,
    ElectronicSlide,
    NoonpostSlide,
    ShopioSlide,
    SnakeSlide,
    SpotifySlide,
    TodoSlide
} from "./components/Slider/Slides";

export const projects = [
    {
        id: 2,
        slug: '/project/spotify',
        website: "https://spotify-client-react.web.app/",
        project_number: '01',
        slide_number: '02',
        slide_component: SpotifySlide,
        slide_image: "https://wallpaperbat.com/img/140150-spotify-hd.png",
        slide_thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFRDPgKfWF49p4jowo_snC_9L5H6Jr3VP7Q&usqp=CAU",
        card_title: "spotify <br/> Music Webapp",
        card_desc: "Brand - Product - Webapp",
        card_image: "https://variety.com/wp-content/uploads/2022/07/spotify-Earnings.jpg",
        images: [spotify1, spotify2, spotify3, spotify4, spotify5, spotify6, spotify7, spotify8],
    },
    {
        id: 3,
        slug: '/project/depot',
        website: "https://ecommerce-d49f8.web.app/",
        project_number: '02',
        slide_number: '03',
        slide_component: SpotifySlide,
        slide_image: 'https://www.tigren.com/blog/wp-content/uploads/2021/11/ecommerce-design-strategies.png',
        slide_thumbnail: 'https://mona.media/wp-content/uploads/2021/07/ecommerce.png',
        card_title: "Depot. - React App - Spring boot <br/> eCommerce",
        card_desc: "eCommerce - ReactJS - Spring Boot",
        card_image: "https://mona.media/wp-content/uploads/2021/07/ecommerce.png",
        images: [spotify1, spotify2, spotify3],
    },
    {
        id: 4,
        slug: '/project/noon-post',
        website: "https://personal-blog-node.vercel.app/",
        project_number: '03',
        slide_number: '04',
        slide_component: NoonpostSlide,
        slide_image: "https://cdn.dribbble.com/users/1131645/screenshots/14682117/dribble-mockup_4x.jpg",
        slide_thumbnail: "https://cdn.dribbble.com/users/4045272/screenshots/15700570/media/81e5b711c7f4f3b6970cde5a92cdac55.png?compress=1&resize=1200x900&vertical=top",
        card_title: "Noonpost. <br/> Personal Blog",
        card_desc: "Brand - Blog - Webapp",
        card_image: "https://i.pinimg.com/736x/7b/b0/e2/7bb0e2d57bfe2ab5a319ff23d4ec4665.jpg",
        images: [noonpost1, noonpost2, noonpost3, noonpost4, noonpost5],
    },
    {
        id: 5,
        slug: '/project/chitchat',
        website: "https://chitchat-e6ec4.web.app/",
        project_number: '04',
        slide_number: '05',
        slide_component: ChitchatSlide,
        slide_image: 'https://c0.wallpaperflare.com/preview/578/536/60/internet-whatsapp-smartphone-communication.jpg',
        slide_thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWi_0kI2xuAqTeLncqrej9EnCy141vX8flBg&usqp=CAU',
        card_title: "Chitchat - App Chat <br/> Angular Webapp",
        card_desc: "Websocket - CSR - Angular",
        card_image: "https://c0.wallpaperflare.com/preview/578/536/60/internet-whatsapp-smartphone-communication.jpg",
        images: [chitChat1, chitChat2, chitChat3],
    },
    {
        id: 6,
        slug: '/project/todo-list',
        website: "https://todos-list-f2750.web.app/",
        project_number: '05',
        slide_number: '06',
        slide_component: TodoSlide,
        slide_image: 'https://i.pinimg.com/originals/59/a9/f0/59a9f0f47f3689cdbcbd7ecb503c92d7.jpg',
        slide_thumbnail: 'https://cdn.dribbble.com/users/844046/screenshots/10846460/media/0c03a1f658a597c533186af673b929d8.png?compress=1&resize=400x300',
        card_title: "Todo List <br/>React Webapp",
        card_desc: "Blog - Webapp",
        card_image: "https://cdn.dribbble.com/users/1131645/screenshots/14682117/dribble-mockup_4x.jpg",
        images: [todo1, todo2],
    },
    {
        id: 7,
        slug: '/project/electric-store',
        website: "",
        project_number: '06',
        slide_number: '07',
        slide_component: ElectronicSlide,
        slide_image: 'https://cdn.dribbble.com/users/1387336/screenshots/8217071/black-friday-product-1600x1200px-dribbble_2x_4x.png',
        slide_thumbnail: 'https://cdn.dribbble.com/users/1615584/screenshots/16818067/media/6558716480c2b89a679bc6dcea0b52b1.jpg?compress=1&resize=1200x900&vertical=top',
        card_title: "Electronic Store. <br/> eCommerce",
        card_desc: "eCommerce - SSR - JavaWeb",
        card_image: "https://cdn.dribbble.com/users/3713179/screenshots/9536384/media/ed9f05d7ed5b92878712ced805e97a54.png?compress=1&resize=400x300",
        images: [spotify1, spotify2, spotify3],
    },
    {
        id: 8,
        slug: '/project/snake-game',
        website: "https://snake-game-5bff8.web.app/",
        project_number: '07',
        slide_number: '08',
        slide_component: SnakeSlide,
        slide_image: 'https://store-images.s-microsoft.com/image/apps.18353.14473180969187901.3a3be6c8-a839-4def-98cb-b97410c676ab.81b5224b-6b06-476c-9103-3f3c2eecb29a',
        slide_thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyZlkkJfmt8Y0KpEuRHuSZqx1AhwL-Z6XInNcceB0X6jLJuSkBRE9-w5MoIQ3qi7TBTw&usqp=CAU',
        card_title: "Snake Game. <br/> Entertainment",
        card_desc: "Entertainment - Jquery - Javascript",
        card_image: "https://store-images.s-microsoft.com/image/apps.18353.14473180969187901.3a3be6c8-a839-4def-98cb-b97410c676ab.81b5224b-6b06-476c-9103-3f3c2eecb29a",
        images: [snake1, snake2, snake3, snake4, snake5, snake6],
    },
    {
        id: 9,
        slug: '/project/shopio',
        website: "https://ecommerce-d49f8.web.app/",
        project_number: '08',
        slide_number: '09',
        slide_component: ShopioSlide,
        slide_image: 'https://www.tigren.com/blog/wp-content/uploads/2021/11/ecommerce-design-strategies.png',
        slide_thumbnail: 'https://mona.media/wp-content/uploads/2021/07/ecommerce.png',
        card_title: "Shopio. - React App <br/> eCommerce",
        card_desc: "eCommerce - ReactJS - NodeJS",
        card_image: "https://mona.media/wp-content/uploads/2021/07/ecommerce.png",
        images: [spotify1, spotify2, spotify3],
    },
    {
        id: 10,
        slug: '/project/data-warehouse',
        website: "https://ecommerce-d49f8.web.app/",
        project_number: '09',
        slide_number: '10',
        slide_component: CommoditiesSlide,
        slide_image: 'https://www.tigren.com/blog/wp-content/uploads/2021/11/ecommerce-design-strategies.png',
        slide_thumbnail: 'https://mona.media/wp-content/uploads/2021/07/ecommerce.png',
        card_title: "Commodities Mart.<br/> Data Warehouse",
        card_desc: "ETL - Java - Jsoup - JSP - Servlet",
        card_image: "https://mona.media/wp-content/uploads/2021/07/ecommerce.png",
        images: [spotify1, spotify2, spotify3],
    },
]