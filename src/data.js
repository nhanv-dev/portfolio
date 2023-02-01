import Shopio from "./pages/blogs/Shopio";
import Spotify from "./pages/blogs/Spotify";
import NoonPost from "./pages/blogs/NoonPost";
import TodoList from "./pages/blogs/TodoList";
import ChitChat from "./pages/blogs/ChitChat";
import SnakeGame from "./pages/blogs/SnakeGame";
import ElectronicStore from "./pages/blogs/ElectronicStore";
import Commodities from "./pages/blogs/Commodities";

export const projects = [
    {
        slug: '/project/spotify', component: Spotify, website: "https://spotify-client-react.web.app/",
        slide_number: '02',
        slide_image: "https://wallpaperbat.com/img/140150-spotify-hd.png",
        slide_thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFRDPgKfWF49p4jowo_snC_9L5H6Jr3VP7Q&usqp=CAU",
        card_title: "Spotify <br/> Music Webapp",
        card_desc: "Brand - Product - Webapp",
        card_image: "https://variety.com/wp-content/uploads/2022/07/Spotify-Earnings.jpg",

    },
    {
        slug: '/project/noon-post', component: NoonPost, website: "https://personal-blog-node.vercel.app/",
        slide_number: '03',
        slide_image: "https://cdn.dribbble.com/users/1131645/screenshots/14682117/dribble-mockup_4x.jpg",
        slide_thumbnail: "https://cdn.dribbble.com/users/4045272/screenshots/15700570/media/81e5b711c7f4f3b6970cde5a92cdac55.png?compress=1&resize=1200x900&vertical=top",
        card_title: "Noonpost. <br/> Personal Blog",
        card_desc: "Brand - Blog - Webapp",
        card_image: "https://i.pinimg.com/736x/7b/b0/e2/7bb0e2d57bfe2ab5a319ff23d4ec4665.jpg",

    },
    {
        slug: '/project/todo-list', component: TodoList, website: "https://todos-list-f2750.web.app/",
        slide_number: '04',
        slide_image: 'https://i.pinimg.com/originals/59/a9/f0/59a9f0f47f3689cdbcbd7ecb503c92d7.jpg',
        slide_thumbnail: 'https://cdn.dribbble.com/users/844046/screenshots/10846460/media/0c03a1f658a597c533186af673b929d8.png?compress=1&resize=400x300',
        card_title: "Todo List <br/>React Webapp",
        card_desc: "Blog - Webapp",
        card_image: "https://cdn.dribbble.com/users/1131645/screenshots/14682117/dribble-mockup_4x.jpg",

    },
    {
        slug: '/project/electric-store', component: ElectronicStore, website: "",
        slide_number: '05',
        slide_image: 'https://cdn.dribbble.com/users/1387336/screenshots/8217071/black-friday-product-1600x1200px-dribbble_2x_4x.png',
        slide_thumbnail: 'https://cdn.dribbble.com/users/1615584/screenshots/16818067/media/6558716480c2b89a679bc6dcea0b52b1.jpg?compress=1&resize=1200x900&vertical=top',
        card_title: "Electronic Store. <br/> eCommerce",
        card_desc: "eCommerce - SSR - JavaWeb",
        card_image: "https://cdn.dribbble.com/users/3713179/screenshots/9536384/media/ed9f05d7ed5b92878712ced805e97a54.png?compress=1&resize=400x300",

    },
    {
        slug: '/project/chitchat', component: ChitChat, website: "https://chitchat-e6ec4.web.app/",
        slide_number: '06',
        slide_image: 'https://c0.wallpaperflare.com/preview/578/536/60/internet-whatsapp-smartphone-communication.jpg',
        slide_thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWi_0kI2xuAqTeLncqrej9EnCy141vX8flBg&usqp=CAU',
        card_title: "Chitchat - App Chat <br/> Angular Webapp",
        card_desc: "Websocket - CSR - Angular",
        card_image: "https://c0.wallpaperflare.com/preview/578/536/60/internet-whatsapp-smartphone-communication.jpg",

    },
    {
        slug: '/project/snake-game', component: SnakeGame, website: "https://snake-game-5bff8.web.app/",
        slide_number: '07',
        slide_image: 'https://store-images.s-microsoft.com/image/apps.18353.14473180969187901.3a3be6c8-a839-4def-98cb-b97410c676ab.81b5224b-6b06-476c-9103-3f3c2eecb29a',
        slide_thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyZlkkJfmt8Y0KpEuRHuSZqx1AhwL-Z6XInNcceB0X6jLJuSkBRE9-w5MoIQ3qi7TBTw&usqp=CAU',
        card_title: "Snake Game. <br/> Entertainment",
        card_desc: "Entertainment - Jquery - Javascript",
        card_image: "https://store-images.s-microsoft.com/image/apps.18353.14473180969187901.3a3be6c8-a839-4def-98cb-b97410c676ab.81b5224b-6b06-476c-9103-3f3c2eecb29a",

    },
    {
        slug: '/project/shopio', component: Shopio, website: "https://ecommerce-d49f8.web.app/",
        slide_number: '08',
        slide_image: 'https://www.tigren.com/blog/wp-content/uploads/2021/11/ecommerce-design-strategies.png',
        slide_thumbnail: 'https://mona.media/wp-content/uploads/2021/07/ecommerce.png',
        card_title: "Shopio. - React App <br/> eCommerce",
        card_desc: "eCommerce - ReactJS - NodeJS",
        card_image: "https://mona.media/wp-content/uploads/2021/07/ecommerce.png",

    },
    {
        slug: '/project/data-warehouse', component: Commodities, website: "https://ecommerce-d49f8.web.app/",
        slide_number: '09',
        slide_image: 'https://www.tigren.com/blog/wp-content/uploads/2021/11/ecommerce-design-strategies.png',
        slide_thumbnail: 'https://mona.media/wp-content/uploads/2021/07/ecommerce.png',
        card_title: "Commodities Mart.<br/> Data Warehouse",
        card_desc: "ETL - Java - Jsoup - JSP - Servlet",
        card_image: "https://mona.media/wp-content/uploads/2021/07/ecommerce.png",

    },
]