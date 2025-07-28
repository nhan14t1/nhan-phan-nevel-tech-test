import { motion } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Home() {
  const features = [
    { icon: "🎁", title: "FREE TO EARN", subtitle: "" },
    { icon: "📊", title: "RANKING", subtitle: "" },
    { icon: "🎬", title: "VIDEO NFT", subtitle: "" },
    { icon: "💰", title: "HOW TO BUY", subtitle: "" },
    { icon: "🆕", title: "NEW NFTS", subtitle: "NEW" },
    { icon: "🗺️", title: "ROADMAPS", subtitle: "" },
  ]

  const nftCollections = [
    { id: 1, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, image: "/placeholder.svg?height=200&width=200" },
    { id: 5, image: "/placeholder.svg?height=200&width=200" },
    { id: 6, image: "/placeholder.svg?height=200&width=200" },
  ]

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
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 py-20 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                THINGS TO CHECK
                <br />
                BEFORE BUYING
                <br />
                <span className="text-pink-400">NFTS</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=250"
                  alt="NFT Artwork"
                  className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😎</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 px-4 bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer relative"
              >
                {feature.subtitle && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
                    {feature.subtitle}
                  </span>
                )}
                <div className="text-3xl mb-2">{feature.icon}</div>
                <div className="text-sm font-medium">{feature.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* NFT Collections */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-yellow-400">
              NEW NFT COLLECTIONS
            </motion.h2>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <FaChevronLeft size={20} />
              </button>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {nftCollections.map((nft, index) => (
              <motion.div
                key={nft.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={nft.image || "/placeholder.svg"}
                  alt={`NFT ${nft.id}`}
                  className="w-full h-32 md:h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* NFT Drops Calendar */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">NFT DROPS CALENDAR</h2>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <FaChevronLeft size={20} />
                  </button>
                  <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <FaChevronRight size={20} />
                  </button>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 cursor-pointer"
              >
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="NFT Drops Calendar"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </motion.div>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">HOT NFT</h3>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                >
                  <img src="/placeholder.svg?height=150&width=300" alt="Hot NFT" className="w-full h-32 object-cover" />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">PROMOTION</h3>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src="/placeholder.svg?height=150&width=300"
                    alt="Promotion"
                    className="w-full h-32 object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
