import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import Button from "@/components/buttons/Button";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navItems = ["HOME", "ITEMS1", "ITEMS2", "ITEMS3", "ITEMS4"]

  const mobileMenuVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div className="bg-gray-900">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between p-4 md:px-8 bg-mainbg backdrop-blur-sm"
      >
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <HiMenuAlt2 size={24} />
        </button>

        <div className="flex items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 mr-8">
            <Link href={'/'}>
              <img src="/images/white-logo.svg" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2, color: "#fbbf24" }}
                className={`hover:text-hover transition-colors font-medium px-4 py-2 ${index == 0 && 'bg-[#383A42] rounded-full text-primary'}`}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-2">
          <Button className="bg-primary hover:bg-hover text-black font-semibold italic">SIGN UP</Button>
          <Button className="bg-transparent border border-primary hover:border-[#ffe8ab] font-semibold italic">
            LOG IN
          </Button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-basegb backdrop-blur-sm z-50 md:hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8 p-4 bg-mainbg">
                <div className="flex items-center">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors mr-2"
                  >
                    <MdOutlineClose size={24} />
                  </button>
                  <div className="flex items-center">
                    <img src="/images/white-logo.svg" />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button className="bg-primary hover:bg-hover text-black font-semibold rounded-full p-4 italic">
                    SIGN UP
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border border-primary hover:border-[#ffe8ab] text-white bg-transparent italic"
                  >
                    LOG IN
                  </Button>
                </div>
              </div>

              <nav className="space-y-6 p-4 pt-2 -mt-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block text-xl font-medium text-gray-300 hover:text-yellow-400 transition-colors py-2 w-full text-center ${index == 0 && 'bg-[#383A42] rounded-full text-primary'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}