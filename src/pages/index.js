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
    { id: 1, image: "/images/collections/c1.png" },
    { id: 2, image: "/images/collections/c2.png" },
    { id: 3, image: "/images/collections/c3.png" },
    { id: 4, image: "/images/collections/c4.png" },
    { id: 5, image: "/images/collections/c5.png" },
    { id: 6, image: "/images/collections/c1.png" },
    { id: 7, image: "/images/collections/c2.png" },
    { id: 8, image: "/images/collections/c3.png" },
    { id: 9, image: "/images/collections/c4.png" },
    { id: 10, image: "/images/collections/c5.png" },
    { id: 11, image: "/images/collections/c6.png" },
    { id: 12, image: "/images/collections/c1.png" },
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 overflow-hidden"
      >
        <img src="/images/banner.png" />
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 px-4 bg-basebg"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center cursor-pointer relative"
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
        className="pt-16 px-4 md:px-32 bg-mainbg"
      >
        <div className="w-full">
          <div className="flex items-center justify-between mb-8">
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-bold text-primary">
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

          <div className="overflow-hidden">
            <div className="flex w-max gap-4">
              {nftCollections.map((nft, index) => (
                <motion.div
                  key={nft.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="rounded-lg cursor-pointer"
                >
                  <img
                    key={nft.id}
                    src={nft.image || "/placeholder.svg"}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    alt={`NFT ${nft.id}`}
                    className="w-[102px] md:w-[180px] rounded-lg cursor-pointer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* NFT Drops Calendar */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 md:px-32 bg-mainbg"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-10 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-primary py-2">NFT DROPS CALENDAR</h2>
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
                className="rounded-lg cursor-pointer"
              >
                <img
                  src="/images/drop.png"
                  alt="NFT Drops Calendar"
                  className="w-full md:h-[240px] rounded-lg"
                />
              </motion.div>
            </motion.div>

            <div className="flex md:col-span-4">
              <div className="w-full grid grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 py-2">HOT NFT</h2>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg cursor-pointer"
                  >
                    <img src="/images/hot.png" alt="Hot NFT" className="w-full md:h-[240px]" />
                  </motion.div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 py-2">PROMOTION</h2>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg cursor-pointer"
                  >
                    <img
                      src="/images/promotion.png"
                      alt="Promotion"
                      className="w-full md:h-[240px]"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
