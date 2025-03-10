import search_icon from "../../assets/images/search.svg";
import arrow_img from "../../assets/images/expand-more.svg";
import { useEffect, useState } from "react";
import { FetchData } from "../../services/api";
import searchwhite_icon from "../../assets/images/Shape (1).svg";
import arrow2_icon from "../../assets/images/Group 2.svg";
import { useMainStates } from "../../store";
import Header from "../../components/__molecules/header/Header";
import { CountryType } from "../../interfaces/Interfaces";
import Input_div from "../../components/__molecules/input_div/Input_div";
import Region_main from "../../components/__molecules/region_main/Region_main";
import Countries_div from "../../components/__molecules/countries_div/Countries_div";

function Main() {
  const [data, setdata] = useState<CountryType[]>([]);
  const [value, setvalue] = useState("");
  const [region, setregion] = useState(false);

  const [information, setinformation] = useState(data);
  useEffect(() => {
    FetchData(setdata);
  }, []);

  const TakeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value);
  };
  let SearchArray = data.filter((item) =>
    item.name.common.toLowerCase().includes(value.toLocaleLowerCase())
  );

  const RegionClick = () => {
    setregion(!region);
  };
  let africa = useMainStates((state) => state.africa);
  let AfricaClick = useMainStates((state) => state.AfricaClick);
  const AfricaRegion = data.filter((item) => item.region === "Africa");

  let america = useMainStates((state) => state.america);
  let AmericaClick = useMainStates((state) => state.AmericaClick);
  const AmericaRegion = data.filter((item) => item.region === "Americas");

  let asia = useMainStates((state) => state.asia);
  let AsiaClick = useMainStates((state) => state.AsiaClick);
  const AsiaRegion = data.filter((item) => item.region === "Asia");

  let europe = useMainStates((state) => state.europe);
  let EuropeClick = useMainStates((state) => state.EuropeClick);
  const EuropeRegion = data.filter((item) => item.region === "Europe");

  let oceania = useMainStates((state) => state.oceania);
  let OceaniaClick = useMainStates((state) => state.OceaniaClick);
  const OceaniaRegion = data.filter((item) => item.region === "Oceania");
  useEffect(() => {
    if (value) {
      setinformation(SearchArray);
    } else if (africa) {
      setinformation(AfricaRegion);
    } else if (america) {
      setinformation(AmericaRegion);
    } else if (asia) {
      setinformation(AsiaRegion);
    } else if (europe) {
      setinformation(EuropeRegion);
    } else if (oceania) {
      setinformation(OceaniaRegion);
    } else {
      setinformation(data);
    }
  }, [value, data, africa, america, asia, europe, oceania]);
  let darkmode = useMainStates((state) => state.darkmode);

  let search = darkmode ? searchwhite_icon : search_icon;
  let arrow = darkmode ? arrow2_icon : arrow_img;
  console.log(data);

  return (
    <>
      <Header />
      <div
        className={`${
          darkmode ? "bg-[#202C36]" : ""
        } flex  justify-center w-[100%] min-h-[100vh] px-[20px]`}
      >
        <div className="max-w-[1280px] w-[100%] flex flex-col   mt-[50px]  ">
          <div className=" w-[100%] flex justify-between gap-[30px] max-[600px]:flex-col">
            <Input_div search={search} TakeValue={TakeValue} />
            <Region_main
              region={region}
              AfricaClick={AfricaClick}
              darkmode={darkmode}
              AmericaClick={AmericaClick}
              AsiaClick={AsiaClick}
              EuropeClick={EuropeClick}
              OceaniaClick={OceaniaClick}
              RegionClick={RegionClick}
              arrow={arrow}
            />
          </div>
          <div
            className={`max-w-[1280px] w-[100%] gap-[70px]   mt-[50px] flex flex-wrap  ${
              SearchArray.length < 4 ? "justify-start" : "justify-center"
            }`}
          >
            {information.map((country, key) => (
              <Countries_div country={country} key={key} darkmode={darkmode} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
