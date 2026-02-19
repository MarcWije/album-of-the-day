import { Belanosima } from "next/font/google";
import { Bellota } from "next/font/google";
import { Baskervville } from "next/font/google";

export const belanosima = Belanosima({ 
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const bellota = Bellota({ 
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const baskervville = Baskervville({ 
    weight: ['400', '700'],
    subsets: ['latin'],
    style: ['normal', 'italic'],
});