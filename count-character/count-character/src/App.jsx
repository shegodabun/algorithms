import { ChevronDown } from "lucide-react";
import CharacterBox from "./components/CharacterBox";
import LetterDensityProgressBar from "./components/LetterDensityProgressBar";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import { lettersDensity } from "./data";

const App = () => {
  return (
    <section className="bg-gray-900">
      {/* Nav bar section*/}
      <Navbar />
      {/* ******** */}

      <h1 className="max-w-[500px] p-4 text-center font-semibold mx-auto text-6xl text-white">
        Analyze Your text in real-time
      </h1>

      {/* Text box section */}
      <TextBox />
      {/* ********** */}

      {/* character count boxes section */}
      <div className="max-w-[700px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10 px-4">
        <CharacterBox
          text_description={"Total Characters"}
          text_number={278}
          bg_color={"bg-purple-300"}
        />
        <CharacterBox
          text_description={"Word Count"}
          text_number={39}
          bg_color={"bg-yellow-400"}
        />
        <CharacterBox
          text_description={"Sentence Count"}
          text_number={"04"}
          bg_color={"bg-orange-300"}
        />
      </div>
      {/* ***************** */}

      {/* Letter density section */}
      <div className="max-w-[700px] mx-auto px-4">
        <h3 className="text-white mb-5 text-xl">Letter Density</h3>
        <div className="my-5 grid gap-2">
          {lettersDensity.map((item) => {
            return (
              <LetterDensityProgressBar
                progress={item.progress}
                letter={item.letter}
                character_num={item.character_num}
              />
            );
          })}
        </div>
      </div>
      {/* ************** */}

      <div className="flex gap-4 max-w-[700px] mx-auto text-white pb-[100px]">
        <p>See more</p>
        <ChevronDown color="white" />
      </div>
    </section>
  );
};

export default App;
