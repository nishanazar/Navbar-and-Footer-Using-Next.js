import Navbar from "../components/navbar"
import link from "next/link";
import Footer from "../components/footer"

export default function About (){
    return(
      <div>
      <Navbar/>
    <p className="text-[30px] text-center pt-[150px] pb-[250px] text-[#FADFA1] bg-[#C96868] font-bold">About Us 😊<br/>My name is Nisha Nazar. Nice to meet you 🙂</p>
    <Footer/>
      </div>
    )
  }