import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex jistify-between items-center bg-[#e9ff7a]">
        <img className="h-[350px] w-[600px] m-[70px]" src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     
      <span className="text-[20px] px-[20px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab fuga autem delectus quas voluptatum, quae voluptatibus neque possimus cum. Aliquid amet dicta maxime reiciendis minus officia perspiciatis voluptatibus ducimus repellat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi nemo ipsum soluta repellat vitae aut, quis tempora distinctio excepturi neque sequi repellendus corrupti rem aperiam totam est, fugit officiis?.</span>
</div>
      <Footer/>
    </div>
  );
}
