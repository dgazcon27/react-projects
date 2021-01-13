import {
  faPenNib,
  faLaptopCode,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

export const posts = () => [
  {
    id: 1,
    title: "Responsive",
    icon: faPenNib,
    content: "Adaptable layout to any screen or mobile device.",
  },
  {
    id: 2,
    title: "Develop",
    icon: faLaptopCode,
    content: "Intuitive and easy to use interface with a clean UI/UX",
  },
  {
    id: 3,
    title: "Focus on",
    icon: faTasks,
    content:
      "Attention to details and requirement make a organic and efficient development.",
  },
];

export const projects = [
  {
    title: "Project 1",
    subtitle: "Title of project of 1",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
    dolore itaque, ipsam reprehenderit officiis ipsa perspiciatis velit
    saepe corporis quis omnis magni incidunt, eius, a vitae consequatur
    sed corrupti beatae.`,
    img: require("../assets/images/pic02.jpg"),
    images: [
      require("../assets/images/pic01.jpg"),
      require("../assets/images/pic02.jpg"),
    ],
    link: "https://www.google.co.ve/",
  },
  {
    title: "Project 2",
    subtitle: "Title of project of 2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
    dolore itaque, ipsam reprehenderit officiis ipsa perspiciatis velit
    saepe corporis quis omnis magni incidunt, eius, a vitae consequatur
    sed corrupti beatae.`,
    img: require("../assets/images/pic01.jpg"),
    images: [
      require("../assets/images/pic01.jpg"),
      require("../assets/images/pic02.jpg"),
    ],
  },
  {
    title: "Project 2",
    subtitle: "Title of project of 2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
    dolore itaque, ipsam reprehenderit officiis ipsa perspiciatis velit
    saepe corporis quis omnis magni incidunt, eius, a vitae consequatur
    sed corrupti beatae.`,
    img: require("../assets/images/pic01.jpg"),
    images: [
      require("../assets/images/pic01.jpg"),
      require("../assets/images/pic02.jpg"),
    ],
  },
];

export const socialNetworks = {
  twitter: "https://twitter.com/dgazcon",
  ig: "https://www.instagram.com/dgazcon/",
  linkedin: "https://www.linkedin.com/in/dgazcon/",
};
