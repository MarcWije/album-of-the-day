import {jost} from '@/app/ui/fonts';

interface FunFactProps{
    funfact?: string;
}

export default function FunFact({
    funfact = "This is a fun fact about the album"
}: FunFactProps ){
    return(
        <div className='flex'>
            <h1 className={`${jost.className} text-5xl xl:text-6xl font-bold text-gray-200 `}>Fun Fact</h1>
        </div>
    )
}