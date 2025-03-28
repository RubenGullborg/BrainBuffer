import { Image } from "astro:assets";
import Avatar from "../../Assets/Avatar.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
        <a href="/">
          <img
            src={Avatar.src}
            alt="Profile picture of me"
            className="rounded-full max-h-14"
          />
        </a>
      </div>

      <h1 className="text-lg font-bold xl:pl-40">
        <a href="/">BrainBuffer.dll</a>
      </h1>

      {/* Desktop menu */}
      <div className="hidden xl:flex gap-12">
        <a href="/L1">L1 </a>
        <a href="/L2">L2</a>
        <a href="/L3">L3</a>
      </div>

      {/* Hamburger icon */}
      <motion.div
        onClick={() => setToggled(!toggled)}
        className="space-y-1.5 cursor-pointer xl:hidden z-50 relative"
        animate={toggled ? "open" : "closed"}
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 6 },
          }}
          className="block h-0.5 w-8 bg-black origin-center transition-all"
        />
        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          className="block h-0.5 w-6 bg-black transition-all"
        />
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -6 },
          }}
          className="block h-0.5 w-4 bg-black origin-center transition-all"
        />
      </motion.div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {toggled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center h-full gap-8 text-2xl"
            >
              {[
                { text: "L1 - Letters", href: "/L1" },
                { text: "L2 - Images", href: "/L2" },
                { text: "L3 - Videos", href: "/L3" },
              ].map((item, i) => (
                <motion.a
                  key={item.text}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3 + i * 0.25 },
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  className="hover:text-gray-600 transition-colors relative group"
                >
                  {item.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
