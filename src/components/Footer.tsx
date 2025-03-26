import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-black">
      <div className="mx-8 py-12 md:mx-16 lg:mx-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Memory Address */}
          <div>
            <h3 className="text-sm font-mono mb-4">MEMORY_ADDR_0x01</h3>
            <p className="text-sm opacity-60">
              BrainBuffer: Neural L1 Cache<br />
              Stack Frame 2024
            </p>
          </div>

          {/* System Links */}
          <div>
            <h3 className="text-sm font-mono mb-4">SYS_LINKS</h3>
            <div className="flex flex-col gap-2">
              {[
                { name: "Core Dump", href: "/about" },
                { name: "Neural Index", href: "/blog" },
                { name: "Ping Author", href: "/contact" },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Status Register */}
          <div>
            <h3 className="text-sm font-mono mb-4">STATUS_REG</h3>
            <p className="text-sm opacity-60 font-mono">
              CACHE_STATUS: ACTIVE<br />
              BUFFER: ACCEPTING_INPUT<br />
              MEMORY_LEAK: INTENTIONAL
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-xs opacity-40 font-mono">
            /* EOF: End of Footer */
          </p>
        </div>
      </div>
    </footer>
  );
}
