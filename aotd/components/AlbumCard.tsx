import TiltedCard from '@/components/TiltedCard';
import Image from 'next/image';
import Stack from "@/components/Stack";
import { jost, rajdhani } from '@/app/ui/fonts';
import { useState } from "react";

interface AlbumCardProps{
    imagesrc?:string;
    altText?:string;
    albumImages?:string[];
    albumNames?:string[];
}

export default function AlbumCard({
    imagesrc ="/octavarium.jpg",
    altText ="Default",
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
    <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-10/12 mx-auto">
        <div className="p-6 items-center hidden lg:block lg:w-5/12">
            <TiltedCard
                imageSrc={imagesrc}
                altText={`${altText} Album Art`}
                containerHeight="500px"
                containerWidth="500px"
                imageHeight="500px"
                imageWidth="500px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
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
                alt = {`${altText} Album Art`}
                />
        </div>
                <div className="flex flex-col lg:items-start space-y-3 lg:justify-center">
                    <h2 className={`${jost.className} text-5xl lg:text-6xl font-bold text-gray-200 text-center lg:text-right`}>Octavarium</h2>
                    <h3 className={`${jost.className} text-4xl lg:text-5xl font-normal text-gray-500 text-center lg:text-right`}>Dream Theater</h3>
                    <h3 className={`${rajdhani.className} text-4xl lg:text-5xl font-extralight text-gray-500 text-center lg:text-right`}>2005</h3>
        </div>
                  <div className="flex flex-col justify-center items-center lg:ml-auto py-5">
            <h3 className={`${jost.className} text-2xl font-light text-gray-400 text-center`}>SIMILAR ALBUMS:</h3> 
            <div className="flex relative w-62.5 h-62.5 lg:w-90 lg:h-90">
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