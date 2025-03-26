import { Image } from "astro:assets";
import Avatar from "../Assets/Avatar.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import Styles from "../styles/global.css";


export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full"
        height={4}
        viewBox="0 0 1250 4"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M2 2L1248 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img
          src={Avatar.src}
          alt="Profile picture of me"
          className="rounded-4xl max-h-14"
        />
      </div>

      <h1 className="text-lg font-bold">
        <a href="/">L1 Cache</a>
      </h1>

      {/* Desktop menu */}
      <div className="hidden xl:flex gap-12">
        <a href="/">Home </a>
        <a href="/">L1 Letter</a>
        <a href="/">L2 Image</a>
        <a href="/">L3 Video</a>
        <a href="/">Contact </a>
      </div>

      {/* Hamburger icon */}
      <div
        onClick={() => setToggled(!toggled)}
        className="space-y-1 cursor-pointer xl:hidden"
      >
        <span className="block h-0.5 w-8 bg-black"></span>
        <span className="block h-0.5 w-6 bg-black"></span>
        <span className="block h-0.5 w-4 bg-black"></span>
      </div>

      {/* Mobile menu */}
      {toggled && (
        <div className="absolute top-full right-0 w-48 py-4 px-6 bg-white shadow-lg rounded-lg xl:hidden">
          <div className="flex flex-col gap-4">
            <a href="/">Home </a>
            <a href="/">L1 Letter</a>
            <a href="/">L2 Image</a>
            <a href="/">L3 Video</a>
            <a href="/">Contact </a>
          </div>
        </div>
      )}
    </nav>
  );
}
