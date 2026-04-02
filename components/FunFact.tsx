'use client' 

import {jost} from '@/app/ui/fonts';
import SpotlightCard from './SpotlightCard';

interface FunFactProps{
    funfact?: string;
}

export default function FunFact({
    funfact = "This is a fun fact about the album"
}: FunFactProps ){
    return(
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 255, 255, 0.3)">
            <div className='flex-col px-2 xl:p-2'>
                <h1 className={`${jost.className} text-5xl xl:text-7xl font-bold text-gray-200 p-2 text-center`}>FUN FACT</h1>
                <p className={`${jost.className} text-md xl:text-xl text-gray-400 xl:p-2`}>{funfact}</p>
            </div>
        </SpotlightCard>
    )
}