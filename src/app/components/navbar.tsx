import Link from "next/link";

export default function Navbar() {
  return (
    <>
    <nav>
        <div className="bg-[black] h-[80px] font-bold">
            <div className="flex items-center justify-between  text-[white]">
        <img className="h-[80px] w-[130px]" src="https://i.ytimg.com/vi/uYRkI5nKMNo/sddefault.jpg"/>
      
     
     <Link href="/">Home</Link>
     
     <Link href="/about">About</Link>
    
     <Link href="/service">Service</Link>
 
   
     <Link href="/portfolio">Portfolio</Link>
    
     <Link href="/blog">Blog</Link>
     </div>
     </div>
     </nav>

    

    
    
</>
     
   
  );
}
