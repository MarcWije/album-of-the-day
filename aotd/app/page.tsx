import Image from "next/image";
import { belanosima, bellota, baskervville } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-950 dark:bg-red-950">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className={` ${belanosima.className} text-7xl font-semibold leading-10 text-center tracking-tight text-white dark:text-zinc-50`}>
            Album of the Day
          </h1>
          <p className={`${bellota.className} max-w-md text-lg leading-8 text-yellow-200 dark:text-zinc-400`}>
            Don't know what to listen to today? We're here to help
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image className= "rounded-xl shadow-xl/30 transition duration-500 hover:scale-105"
            src="/octavarium.jpg"
            width={500}
            height={500}
            alt="Dream Theater's Octavarium"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className={`${bellota.className} text-4xl font-bold text-center text-gray-500 p-5`}>
            Octavarium
          </p>
          <p className={`${baskervville.className} text-xl text-left text-gray-300 max-w-3/6 leading-7`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque urna, ut lacinia urna. In tristique arcu in eros maximus, rhoncus convallis velit ultricies. Fusce laoreet libero et urna maximus tincidunt. Suspendisse potenti. Nullam in massa sit amet augue auctor volutpat. Duis venenatis tincidunt massa, eget malesuada leo tempor nec. Cras ac ligula elementum, rhoncus turpis eu, tempus ex. Quisque scelerisque dolor orci, id faucibus risus venenatis eget. Sed eget ullamcorper nisi, vitae luctus velit. Etiam mi magna, porta sit amet auctor id, interdum sit amet massa. Aliquam aliquet congue nisl nec ornare. Etiam feugiat nunc quis ex gravida, molestie egestas leo consectetur. Aliquam et dapibus libero. Fusce imperdiet sollicitudin mauris, quis faucibus neque sodales non. Ut maximus lobortis nisl a vestibulum.
            <br></br>
            <br></br>
            Curabitur a quam nibh. Nunc porta congue tortor in maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel risus dignissim, aliquam sapien quis, pulvinar justo. Mauris efficitur justo non risus ullamcorper, in ultricies enim sollicitudin. Donec sit amet eros id magna lobortis ultrices. Nulla sed nisi tellus. Vivamus finibus neque at rhoncus gravida. Maecenas eros metus, ultrices sed elit in, interdum ultricies ante. Nunc nisl arcu, rutrum vel nisl et, rutrum gravida orci. Proin sit amet sapien sed felis finibus dignissim. Sed viverra posuere hendrerit. Sed sit amet ligula pretium, efficitur tellus in, laoreet ante. Quisque a molestie lectus. Nulla porta, mauris convallis varius hendrerit, diam arcu fermentum massa, tempor ornare lorem mi quis risus.
            <br></br>
            <br></br>
            Etiam molestie leo a libero venenatis lacinia. In velit augue, sodales nec neque quis, aliquet fermentum augue. Praesent dolor lectus, sagittis id tortor eget, vulputate sagittis turpis. Pellentesque maximus, dolor id tincidunt viverra, est ipsum imperdiet lacus, et sodales urna neque a tortor. Morbi leo massa, pharetra at mauris in, consequat bibendum mi. Donec molestie, ligula ac bibendum tincidunt, velit eros rhoncus lectus, non aliquam mi augue ac ante. Etiam vitae tempus velit, eget interdum dui. Duis nec metus sed libero pharetra varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec urna turpis. Praesent tincidunt tempor porta. Fusce ex nibh, eleifend sit amet tincidunt vel, pharetra et mauris. Phasellus interdum malesuada aliquet. Ut laoreet dolor eros. Integer nec nunc vestibulum nunc congue hendrerit. 
          </p>
        </div>
      </main>
    </div>
  );
}
