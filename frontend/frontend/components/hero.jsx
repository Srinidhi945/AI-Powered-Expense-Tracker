"use client";
import Link from "next/link";
import {Button} from "./ui/button";
import Image from "next/image";
import { useRef,useEffect } from "react"; 

const HeroSection = () => {
    const imageRef=useRef();
    useEffect(()=>{
        const imageElement=imageRef.current;
        const handleScroll=()=>{
            const scrollPosition=window.scrollY;
            const scrollThreshold=100;

            if(scrollPosition>scrollThreshold){
                imageElement.classList.add("scrolled");
            }else{
                imageElement.classList.remove("scrolled");

            }

        }
        window.addEventListener("scroll",handleScroll)
        return () =>window.removeEventListener("scroll",handleScroll);

    },[])


  return (
    <div className="pb-20  px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5x1 md:text-8xl lg:text-[120px] pd-6 gradient-title">
                Manage Your Finances <br /> with Intelligence
            </h1>
            <p className="text-x1 text-gray-600 mb-8 max-w-2xl mx-auto">An AI-powered financial management platform that helps you track,
                analyze, and optimize yout spending with real-time insights
            </p>
            <div>+
                <Link href="/dashboard">
                <Button size="lg" className="px-8">
                    Get Started
                    </Button>
                    </Link>
            </div>
            <div className="hero-image-wrapper">
                <div ref={imageRef} className="hero-image">
                    <Image src="/banner.jpeg"
                    width={1280}
                    height={720}
                    alt="Dashoard Preview"
                    className="rounded-lg shadow-2xl border mx-auto"/>
                </div>
            </div>
            </div>
        
        </div>
        
  )
}

export default HeroSection