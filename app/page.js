import Image from "next/image";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <ToastContainer />
        <Header />
        <AboutUs />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
