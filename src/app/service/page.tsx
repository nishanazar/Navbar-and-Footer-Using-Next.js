import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link"



export default function Services (){
    return(
      <div>
        <Navbar/>
        <div className="text-[25px] text-center py-[115px] bg-[#b9f5ab] ">
       <h1 className="text-[green] text-[40px] font-bold">Our Services 💼</h1>
      <p>We offer a variety of services to cater to your needs:</p>
      <ul>
        <li>Web Development 🌐</li>
        <li>Mobile App Development 📱</li>
        <li>SEO Optimization 📈</li>
        <li>UI/UX Design 🎨</li>
      </ul>
      </div>
      <Footer/>
     
       </div>
    )
  }

