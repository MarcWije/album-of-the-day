import {baskervville} from '@/app/ui/fonts';

interface ReviewProps{
    text?: string;
    authorNote?: string;
}

export default function Review({
    text = "Album review text goes here",
    authorNote = "This was written by gremlins"
}:ReviewProps ){
    return(
        <div className='flex'>
          <p className={`${baskervville.className} prose  text-lg lg:text-xl text-left text-gray-300 lg:max-w-2/6 leading-7 space-y-8`}>
              <div dangerouslySetInnerHTML={{ __html:text }} className='space-y-4'/>
              <br></br>
            <i>{authorNote}</i>
          </p>
        </div>
    )
}