"use client"

import { belanosima, bellota } from '@/app/ui/fonts';
import BlurText from "@/components/BlurText";
import Dock from './Dock';
import { AiFillHome } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";

interface HeaderProps{
    heading?: string;
    subheading?: string;
    
}

const items = [
    { icon: <AiFillHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <IoSearchOutline size={18} />, label: 'Search', onClick: () => alert('Search') },
    { icon: <IoCalendarOutline size={18} />, label: 'Calendar', onClick: () => alert('Calendar') },
];

export default function Header({
    heading = "Album of the Day",
    subheading = "Don't know what to listen to today? We're here to help",
}: HeaderProps) {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return(
        <div className="flex flex-col items-center gap-3 text-center">
            <Dock 
                items={items}
                panelHeight={30}
                baseItemSize={50}
                magnification={60}
            />

            <BlurText
            text={heading}
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className={`${belanosima.className} text-5xl lg:text-8xl font-semibold leading-10 justify-center text-center text-white space-y-3`}
            />
            <p className={`${bellota.className} max-w-md text-lg leading-8 text-yellow-200 dark:text-zinc-400`}>
            {subheading}
            </p>
        </div>
    );
}