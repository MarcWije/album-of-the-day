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
        <div className={`${baskervville.className} prose text-lg lg:text-xl text-left text-gray-300 xl:max-w-5/12 leading-7 space-y-8`}>
            <div dangerouslySetInnerHTML={{ __html:text }} className='space-y-4'/>
            <br></br>
        <i>{authorNote}</i>
        </div>
    )
}