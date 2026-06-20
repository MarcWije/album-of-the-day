"use client"

import { belanosima, bellota } from '@/app/ui/fonts';
import BlurText from "@/components/BlurText";
import Dock from './Dock';
import SearchModal from './SearchModal';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { AlbumData } from '@/lib/getAlbums';

interface HeaderProps{
    heading?: string;
    subheading?: string;
    allAlbums?: AlbumData[];
}    

export default function Header({
    heading = "Album of the Day",
    subheading = "Don't know what to listen to today? We're here to help",
    allAlbums = [],
}: HeaderProps) {

    const [searchOpen, setSearchOpen] = useState(false);
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    const router = useRouter();

    const items = [
    { icon: <AiFillHome size={18} />, label: 'Home', onClick: () => router.push("/")},
    { icon: <IoSearchOutline size={18} />, label: 'Search', onClick: () => setSearchOpen(true) },
    { icon: <IoCalendarOutline size={18} />, label: 'Calendar', onClick: () => router.push("/calendar") },
    ];

    return(
        <>
        <SearchModal
        albums={allAlbums}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
            />
            <div className="flex flex-col items-center gap-3 text-center">
                <Dock 
                    items={items}
                    panelHeight={30}
                    baseItemSize={50}
                    magnification={60}
                    labelFont={belanosima.className}
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
        </>
    );
}