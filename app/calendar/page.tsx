import ClickSpark from "@/components/ClickSpark";
import Background from "@/components/Background";
import Calendar from "@/components/Calendar";
import Header from "@/components/Header";

export default async function Home() {

  return (
    <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={12}
        sparkCount={7}
        duration={300}
      > 
    <Background
        color1 = "#29211a"
        color2 = "#503232"
        color3 = "#504132"
      />
    <main style={{ position: "relative", zIndex: 1 }} className="flex min-h-screen w-full flex-col py-16 lg:py-28 px-16">
        <Header
            heading= "Calendar"
            subheading= "Find the Album for each day of the year here"
        />
        <Calendar/>
    </main>
    </ClickSpark>
  );
}