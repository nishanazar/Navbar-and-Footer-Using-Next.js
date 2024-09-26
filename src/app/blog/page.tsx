
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function Blog (){
    return(
      <div>
        <Navbar/>
        <h1 className="text-[30px] text-center pt-[150px] pb-[250px] text-[#2f11f0] bg-[#FDFFAB] font-bold">Welcome to My Blog ✍️ <br/>
        Sharing my journey through web development, technology, and coding tips! 🚀</h1>
        <Footer/>
        </div>
    )
  }