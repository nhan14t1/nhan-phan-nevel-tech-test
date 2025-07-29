import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-[74px]">
        {children}
      </div>
      <Footer />
    </>
  )
}