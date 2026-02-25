"use client"

import {baskervville} from '@/app/ui/fonts';
import Background from '@/components/Background';
import CurvedLoop from "@/components/CurvedLoop";
import ClickSpark from "@/components/ClickSpark";
import Header from '@/components/Header';
import SpotifyPopup from '@/components/SpotifyPopUp';
import AlbumCard from '@/components/AlbumCard';

export default function Home() {
  const albumId = "4v6kYkn7mYjlWS9vONmmCP";

  return (
    <div className="flex ">
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      > 
      <Background/>
      <main style={{ position: "relative", zIndex: 1 }} className="flex min-h-screen w-full flex-col justify-center py-16 lg:py-28 px-16">
        <Header/>
        <AlbumCard/>
        <div className="flex p-3 justify-center">
          <SpotifyPopup albumId={`${albumId}`}/>
        </div>
        <div className="flex flex-col items-center w-9/12 mx-auto">
          <div className='flex'>
            <p className={`${baskervville.className} text-xl text-left text-gray-300 lg:max-w-2/6 leading-7 space-y-8`}>
              Dream Theater returns with their eighth studio album and in typical DT fashion, the latest release bears little resemblance to the album that came directly before it. Train of Thought was "too metal" for some fans (but not for me) and chock full of arguably over the top soloing that sometimes worked against the compositions. Those that found some of Train of Thought to be overkill should be delighted by Octavarium. Case in point: John Petrucci plays with far more restraint while Jordan Rudess' keyboards are higher up in the mix.
              <br></br>
              At 75 minutes, Octavarium is a very long CD. Dream Theater always cram a lot of music onto their albums and I long ago accepted the fact that their CDs can be a bit of an endurance test. But the time factor is more noticeable with Octavarium because it gets off to such a painfully sluggish start. Before anyone starts to think I'm being too harsh, bear with me here: Octavarium contains some of the band's best ever material. But the first few songs are just so ordinary by Dream Theater standards in a "been there done that" sort of way that one might be tempted to hit the stop button before hearing the frankly outstanding compositions yet to come.
              <br></br>
              "The Root of All Evil" continues the saga of Mike Portnoy's alleged experience with The Twelve Step Program that began on Six Degrees of Inner Turbulence ("Glass Prison") and continued with Train of Thought ("This Dying Soul"). Those were fantastic pieces of music while "The Root of All Evil" is just anticlimactic somehow. Even more problematic is "The Answer Lies Within", a complete throwaway ballad that is inappropriately sequenced as track two of the CD. Things start looking up with "These Walls" and the curveball that is the U2 pop flavored "I Walk Beside You"; seriously, James LaBrie appears to be emulating Bono on the chorus.
              <br></br>
              By the time of "Panic Attack", I'm getting hooked. The intensity and heaviness reaches that of some of the better moments of Train of Thought. Really, from "Panic Attack" forward, Octavarium is consistently, well awesome. "Never Enough" is another killer heavy track before the band pulls in the reigns for the ten minute "Sacrificed Sons", a haunting epic that conjures up images of 9/11, dogmatic politicians and the futility of religious wars. The lengthy instrumental break is simply ferocious.
              <br></br>
              But the magnum opus here is without question the twenty four minute title track, a wonderful symphonic rock tour de force that gets my vote as Dream Theater's finest epic ever. Compared to most of the rest of the CD, "Octavarium" isn't in the least bit heavy and it isn't until the twelve minute mark that the musical fireworks begin. Jordan Rudess really gets a chance to shine here as he never has before, with a fine Rick Wakeman like synth solo which in turn shifts over to a neat Genesis inspired instrumental arrangement. In case anyone doubts the band's prog rock influences, check out the "Full Circle" section of the title track for some amusing stream of conscious lyrics mentioning some famous epics! "Octavarium" finally concludes with a recapitulation of the main theme featuring an orchestra and simply defines the term symphonic rock.
              <br></br>
              So where does Octavarium sit among Dream Theater's fairly prolific back catalog? I'll leave that one up to the reader to decide. For my taste, it's the band's finest album since Scenes From a Memory; it's certainly their most tuneful album in quite some time. I oftentimes struggle with star ratings but I'm giving Octavarium four strong stars. I would easily give it higher marks if the first few tracks were up to snuff, but they are just so bland that five stars would be an inaccurate representation of the album in balance. But program out at least the first two songs and you have one of the best albums of 2005. 
              <br></br>
              <i>This album review placeholder was taken from https://www.seaoftranquility.org/</i>
            </p>
          </div>
        </div>
        <CurvedLoop 
          marqueeText="Hope you enjoy listening!"
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
