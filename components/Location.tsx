import {jost} from '@/app/ui/fonts';

interface LocationProps{
    location?: string;
}

export default function Location({
   location = "This is where the album was recorded"
}: LocationProps ){
    return(
        <div className='flex'>
        </div>
    )
}