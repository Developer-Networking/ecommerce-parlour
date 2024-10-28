import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import NewArrival from "./components/NewArrival";
import Category from "./components/Category";
import BlogSection from "./components/BlogSection";
export default function Home(){
  return(
    <main>
      <Hero/>
      <NewArrival/>
      <Category/>
      <Services/>
    </main>
  )
}