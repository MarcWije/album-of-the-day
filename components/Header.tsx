"use client"

import { belanosima, bellota, baskervville, jost, rajdhani } from '@/app/ui/fonts';
import BlurText from "@/components/BlurText";


interface HeaderProps{
    heading?: string;
    subheading?: string;
}

export default function Header({
    heading = "Album of the Day",
    subheading = "Don't know what to listen to today? We're here to help",
}: HeaderProps) {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return(
        <div className="flex flex-col items-center gap-3 text-center">
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