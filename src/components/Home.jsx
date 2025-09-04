import Slider from "./Slider";
import AppFiltro from "./FiltrosApp";
import Hero from "./Hero";
import Chatbot from "./Chatbot";

function Home() {
  return (
    <div className="bg-pink-100 w-full m-0">
      <Hero/>
      <Slider/>
      <AppFiltro/>
        <Chatbot />

    </div>
  )
}

export default Home
