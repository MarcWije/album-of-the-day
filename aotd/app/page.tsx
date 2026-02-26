import Background from '@/components/Background';
import CurvedLoop from "@/components/CurvedLoop";
import ClickSpark from "@/components/ClickSpark";
import Header from '@/components/Header';
import SpotifyPopup from '@/components/SpotifyPopUp';
import AlbumCard from '@/components/AlbumCard';
import Review from '@/components/Review';
import { getAlbum } from '@/lib/getAlbums';

export default async function Home() {
    const album = await getAlbum("octavarium.md");

  const {
    albumId,
    heading,
    subheading,
    albumTitle,
    albumArtist,
    albumYear,
    imagesrc,
    color1,
    color2,
    color3,
    albumImages,
    albumNames,
    marqueeText,
    authorNote,
    text,
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
          imagesrc= {imagesrc}
          albumImages={albumImages}
          albumNames={albumNames}
        />
        <div className="flex p-3 justify-center">
          <SpotifyPopup albumId={albumId}/>
        </div>
        <Review
          authorNote=  {authorNote}
          text = {text}
          />
        <CurvedLoop 
          marqueeText={marqueeText}
          speed={2}
          curveAmount={200}
          direction="right"
          interactive
          className="custom-text-style"
        />
      </main>
      </ClickSpark>
    </div>
  );
}
