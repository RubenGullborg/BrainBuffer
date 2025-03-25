import { Image } from "astro:assets";
import Avatar from "../Assets/Avatar.jpg"
import { motion } from "framer-motion";
import { useState } from "react";
import Styles from "../styles/global.css";


export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="relative mx-8 mb-24">
      <svg width="250" height={4} viewBox="0 0 250 4" fill="none">
        <path d="M2 2L428 2" strokeWidth={2} stroke="#282828" strokeLinecap="round" />
      </svg>
	  <div>
		<img src={Avatar.src} alt="Profile picture of me" className="rounded-4xl max-h-14" />
	  </div>

	  <h1 className="text-lg font-bold">
		<a href="/">Cached thoughts and ideas.</a>
	  </h1>
    </nav>
  );
}
