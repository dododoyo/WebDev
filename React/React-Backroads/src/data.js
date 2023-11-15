import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

// datas like image are imported by default method

export const navbarPageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", iconClass: "fab fa-twitter" },
  { id: 2, href: "https://www.github.com", iconClass: "fab fa-github" },
  { id: 3, href: "https://www.linkedin.com", iconClass: "fab fa-linkedin" },
  { id: 4, href: "https://www.telegram.com", iconClass: "fab fa-telegram" },
];
export const servicesData = [
  {
    id: 1,
    service: "endless hiking",
    text: "Experience the thrill of hiking through some of the world's most stunning landscapes. Our guided hikes are designed for all skill levels, ensuring everyone can enjoy the beauty of nature.",
    iconClass: "fas fa-tree fa-fw",
  },
  {
    id: 2,
    service: "amazing comfort",
    text: "Travel in style and comfort with our top-notch accommodations and transportation. We ensure that every aspect of your journey is comfortable, allowing you to fully enjoy your adventure.",
    iconClass: "fas fa-socks fa-fw",
  },
  {
    id: 3,
    service: "saving money",
    text: "Enjoy unforgettable travel experiences without breaking the bank. Our affordable tour packages are designed to give you the best value for your money.",
    iconClass: "fas fa-wallet fa-fw",
  },
];

export const cardsData = [
  {
    id: 1,
    img: img1,
    date: "september 26th, 2020",
    title: "Tibet Adventure",
    text: "Embark on an adventure to the spiritual heart of Tibet. Explore ancient monasteries, hike through breathtaking mountain passes, and experience the unique culture of this sacred place.",
    destination: "china",
    daysLeft: "24",
    price: "2100",
  },
  {
    id: 2,
    img: img2,
    date: "september 9th, 2023",
    title: "Best of Java",
    text: "Discover the best of Java, from its vibrant cities to its stunning natural beauty. Visit ancient temples, explore lush rainforests, and immerse yourself in the local culture.",
    destination: "indonesia",
    daysLeft: "7",
    price: "1400",
  },
  {
    id: 3,
    img: img3,
    date: "september 15th, 2023",
    title: "explore hong kong",
    text: "Experience the bustling city life of Hong Kong. Explore its rich history, vibrant nightlife, and delicious cuisine. Don't miss out on the stunning skyline views from Victoria Peak.",
    destination: "hong kong",
    daysLeft: "13",
    price: "5000",
  },
  {
    id: 4,
    img: img4,
    date: "september 30th, 2020",
    title: "kenya highlights",
    text: "Experience the wild beauty of Kenya. Go on a safari in the Maasai Mara, visit the stunning Lake Nakuru, and meet the local Maasai people. This is a trip you won't forget.",
    destination: "kenya",
    daysLeft: "28",
    price: "3300",
  },
];