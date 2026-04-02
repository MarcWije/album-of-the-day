import Background from '@/components/Background';
import CurvedLoop from "@/components/CurvedLoop";
import ClickSpark from "@/components/ClickSpark";
import Header from '@/components/Header';
import SpotifyPopup from '@/components/SpotifyPopUp';
import AlbumCard from '@/components/AlbumCard';
import Review from '@/components/Review';
import { AlbumData } from '@/lib/getAlbums';
import FunFact from '@/components/FunFact'; 
import Location from '@/components/Location';

interface AlbumPageProps{
    album?: AlbumData;
}

export default function AlbumPage({ album
}: AlbumPageProps){
  if (!album) {
    return <p>No album found.</p>;
  }

    const {
    albumId,
    heading,
    subheading,
    albumTitle,
    albumArtist,
    albumYear,
    genre,
    imagesrc,
    color1,
    color2,
    color3,
    albumImages,
    albumNames,
    marqueeText,
    authorNote,
    text,
    funfact,
    location,
  } = album;
    
    return (
    <div className="flex ">
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={12}
        sparkCount={7}
        duration={300}
      > 
      <Background
        color1 = {color1}
        color2 = {color2}
        color3 = {color3}
      />
      <main style={{ position: "relative", zIndex: 1 }} className="flex min-h-screen w-full flex-col justify-center py-16 lg:py-28 px-16">
        <Header
          heading= {heading}
          subheading= {subheading}
        />
        <AlbumCard
          albumTitle= {albumTitle}
          albumArtist= {albumArtist}
          albumYear= {albumYear}
          genre = {genre}
          imagesrc= {imagesrc}
          albumImages={albumImages}
          albumNames={albumNames}
        />
        <div className="flex p-3 justify-center">
          <SpotifyPopup albumId={albumId}/>
        </div>
        <div className="flex flex-col xl:flex-row w-24/24 xl:w-39/48 mx-auto gap-6 xl:gap-94 justify-center items-start ">
          <Review
            authorNote=  {authorNote}
            text = {text}
          />
          <div className='flex flex-col xl:max-w-9/24'>
            <FunFact
              funfact= {funfact}
            />
            <Location
              location = {location}
            />  
          </div>
        </div>
        <CurvedLoop 
          marqueeText={marqueeText}
          speed={2}
          curveAmount={200}
          direction="left"
          interactive
          className="custom-text-style"
        />
      </main>
      </ClickSpark>
    </div>
  );
}