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
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    iconClass: "fas fa-tree fa-fw",
  },
  {
    id: 2,
    service: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    iconClass: "fas fa-socks fa-fw",
  },
  {
    id: 3,
    service: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    iconClass: "fas fa-wallet fa-fw",
  },
];

export const cardsData = [
  {
    id: 1,
    img: img1,
    date: "september 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    destination:'china',
    daysLeft:'24',
    price:'2100',
  },
  {
    id: 2,
    img: img2,
    date: "september 9th, 2023",
    title: "Best of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    destination:'indonesia',
    daysLeft:'7',
    price:'1400',
  },
  {
    id: 3,
    img:  img3 ,
    date: "september 15th, 2023",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    destination:'hong kong',
    daysLeft:'13',
    price:'5000',
  },
  {
    id: 4,
    img: img4,
    date: "september 30th, 2020",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    destination:'kenya',
    daysLeft:'28',
    price:'3300',
  },
];
