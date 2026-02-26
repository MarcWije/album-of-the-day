"use client"

import TiltedCard from '@/components/TiltedCard';
import Image from 'next/image';
import Stack from "@/components/Stack";
import { jost, rajdhani } from '@/app/ui/fonts';
import { useState } from "react";

interface AlbumCardProps{
    imagesrc?:string;
    albumTitle?:string;
    albumArtist?:string;
    albumYear?:string;
    albumImages?:string[];
    albumNames?:string[];
}

export default function AlbumCard({
    imagesrc ="/octavarium.jpg",
    albumTitle = "Octavarium",
    albumArtist = "Dream Theater",
    albumYear = "2005",
    albumImages = [
        "/fear-inoculum.jpg",
        "/metropolis-pt-2.jpg",
        "/ghost-reveries.jpg",
        "/magma.jpg"
    ],
    albumNames = [
        "Fear Inoculum - Tool",
        "Metropolis Part II - Dream Theater",
        "Ghost Reveries - Opeth",
        "Magma - Gojira"
    ]

}:AlbumCardProps){

    const [topIndex, setTopIndex] = useState(0);


    return(
    <div className="flex flex-col xl:flex-row gap-4 w-full xl:w-10/12 mx-auto">
        <div className="p-6 items-center hidden 2xl:flex w-5/12">
            <TiltedCard
                imageSrc={imagesrc}
                altText={`${albumTitle} Album Art`}
                containerHeight="500px"
                containerWidth="500px"
                imageHeight="500px"
                imageWidth="500px"
                rotateAmplitude={18}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip
            />
        </div>
        <div className="p-6 items-center hidden xl:flex 2xl:hidden w-5/12">
            <TiltedCard
                imageSrc={imagesrc}
                altText={`${albumTitle} Album Art`}
                containerHeight="400px"
                containerWidth="400px"
                imageHeight="400px"
                imageWidth="400px"
                rotateAmplitude={18}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip
            />
        </div>
        <div className="flex-col p-6 justify-center items-center ml-auto hidden lg:flex xl:hidden w-full">
            <TiltedCard
                imageSrc={imagesrc}
                altText={`${albumTitle} Album Art`}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={18}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip
            />
        </div>
        <div className='flex flex-col items-center lg:hidden w-full p-4'>
            <Image
                src = {imagesrc}
                width =  {500}
                height = {500}
                className='rounded-xl'
                alt = {`${albumTitle} Album Art`}
                />
        </div>
                <div className="flex flex-col xl:items-start space-y-3 xl:justify-center">
                    <h2 className={`${jost.className} text-5xl xl:text-6xl font-bold text-gray-200 text-center xl:text-right`}>{albumTitle}</h2>
                    <h3 className={`${jost.className} text-4xl xl:text-5xl font-normal text-gray-500 text-center xl:text-right`}>{albumArtist}</h3>
                    <h3 className={`${rajdhani.className} text-4xl xl:text-5xl font-extralight text-gray-500 text-center xl:text-right`}>{albumYear}</h3>
        </div>
                  <div className="flex flex-col justify-center items-center xl:ml-auto py-5">
            <h3 className={`${jost.className} text-2xl font-light text-gray-400 text-center`}>SIMILAR ALBUMS:</h3> 
            <div className="flex relative w-62.5 h-62.5 xl:w-90 xl:h-90">
              <Stack
                randomRotation={false}
                sensitivity={200}
                sendToBackOnClick={true}
                cards={albumImages.map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt={`card-${i + 1}`} 
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                ))}
                autoplay={false}
                onTopCardChange={(index) => setTopIndex(index)}
                autoplayDelay={3000}
                pauseOnHover={false}
              
              />
            </div>
          <p className={`${rajdhani.className} text-xl font-normal text-gray-300 mt-2 text-center`}>
            {albumNames[topIndex]}
          </p>
          </div>
    </div>
    )
}