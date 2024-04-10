import { Card } from "./CardInterface";
import Airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import Eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import Faceit from "../assets/app-design/desktop/image-faceit.jpg";
import Todo from "../assets/app-design/desktop/image-todo.jpg";
import Loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";

export const AppDesignData: Card[] = [
  {
    title: "AIRFILTER",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    image: Airfilter,
  },
  {
    title: "EYECAM",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    image: Eyecam,
  },
  {
    title: "FACEIT",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    image: Faceit,
  },
  {
    title: "TODO",
    description: "A todo app that features cloud sync with light and dark mode",
    image: Todo,
  },
  {
    title: "LOOPSTUDIOS",
    description: "A VR experience app made for Loopstudios",
    image: Loopstudios,
  },
];
