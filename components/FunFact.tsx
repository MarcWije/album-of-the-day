import {jost} from '@/app/ui/fonts';

interface FunFactProps{
    funfact?: string;
}

export default function FunFact({
    funfact = "This is a fun fact about the album"
}: FunFactProps ){
    return(
        <div className='flex p-6'>
            <h1 className={`${jost.className} text-5xl xl:text-6xl font-bold text-gray-200 p-6 `}>Fun Fact:</h1>
            <p className={`${jost.className} text-3xl xl:texl-4xl text-gray-400 p-6`}>{funfact}</p>
        </div>
    )
}