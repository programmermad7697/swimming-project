import About from "@/components/About";
import History from "@/components/History";
import AdvDisadv from "@/components/advDisadv";

export default function Home() {
  return (
    <div className="bg-gray-700 pb-10 py-7 text-white">
      <div className="py-10 px-10 mt-10 mx-10 rounded-md">
        <h1 className="text-lg text-white md:text-xl">
          <span className="text-3xl md:text-4xl font-light">H</span>ello! Here
          you will learn about swimming, how swimming started and its history
          and its advantages and disadvantages of swimming
        </h1>
      </div>

      <About />
      <History />
      <AdvDisadv />
    </div>
  );
}
