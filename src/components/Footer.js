import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }


  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 py-16 px-4 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-yellow-400 mb-4">ABOUT US</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Company Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Affiliate
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-yellow-400 mb-4">PRODUCTS</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  NFT Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Slingshot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Swaps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  NFT Launchpad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Runes Platform
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Creator Dashboard
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-yellow-400 mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Feature Requests
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-yellow-400 mb-4">CONTACT US</h4>
            <ul className="space-y-2 text-gray-400">
              <li>support@tech.email</li>
              <li>affiliate@tech.com</li>
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-4 bg-gray-800 rounded-lg p-3 cursor-pointer">
              <span className="text-sm">📱 Install App</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}