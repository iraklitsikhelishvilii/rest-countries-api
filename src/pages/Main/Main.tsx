import { useNavigate } from "react-router";
import search_icon from "../../assets/images/search.svg";
import arrow_img from "../../assets/images/expand-more.svg";
import { useEffect, useState } from "react";
import { FetchData } from "../../services/api";

import searchwhite_icon from "../../assets/images/Shape (1).svg";
import arrow2_icon from "../../assets/images/Group 2.svg";
import { useMainStates } from "../../store";
import Header from "../../components/__molecules/header/Header";
interface MainStates {
  name: { common: string };
  region: string;
  population: number;
  capital?: string;
  flags: { svg: string };
  languages: { [key: string]: string };
  lang: string;
}
function Main() {
  const navigation = useNavigate();
  const [data, setdata] = useState<MainStates[]>([]);
  const [value, setvalue] = useState("");
  const [region, setregion] = useState(false);

  const [information, setinformation] = useState(data);
  useEffect(() => {
    FetchData(setdata);
  }, []);

  const TakeValue = (e: any) => {
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
            <div
              className={`${
                darkmode ? "bg-[#2B3844] " : ""
              } max-w-[480px] w-[100%] h-[56px] shadow-[0px_2px_9px_0px_#0000000E] flex items-center justify-center pl-[32px] rounded-[5px]  max-[600px]:max-w-[100%]`}
            >
              <div className="flex w-[100%]  gap-[24px] ">
                <img src={search} alt="" />
                <input
                  onChange={TakeValue}
                  className={` outline-none text-[14px] font-[600]  max-[600px]:text-[12px] ${
                    darkmode ? "text-[#fff]" : "text-[#848484]"
                  }`}
                  type="text"
                  placeholder="Search for a country…"
                />
              </div>
            </div>
            <div
              onClick={RegionClick}
              className={`${
                darkmode ? "bg-[#2B3844]" : ""
              } relative flex max-w-[200px] w-[100%] h-[56px]  items-center justify-between  shadow-[0px_2px_9px_0px_#0000000E] rounded-[5px] px-[23px]`}
            >
              <p
                className={`text-[14px] leading-[20px] font-[600]  max-[600px]:text-[12px] ${
                  darkmode ? "text-[#fff]" : " text-[#111517]"
                }`}
              >
                Filter by Region
              </p>
              <img
                className={`transition-transform duration-400 ${
                  region ? "rotate-180" : "rotate-0"
                }`}
                src={arrow}
                alt=""
              />
              <div
                className={`gap-[8px] flex flex-col max-w-[200px] w-[100%] absolute 
                  shadow-[0px_2px_9px_0px_#0000000E] rounded-[5px] pl-[24px] top-[60px] left-0 
                  ${darkmode ? "bg-[#2B3844]" : "bg-[#fff]"}  
                  ${region ? "h-auto py-[16px] " : "h-[0px] py-[0px]"} `}
              >
                {region && (
                  <>
                    <p
                      onClick={AfricaClick}
                      className={`cursor-pointer text-[14px] leading-[20px] font-[600]  max-[600px]:text-[12px] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]"
                      }`}
                    >
                      Africa
                    </p>
                    <p
                      onClick={AmericaClick}
                      className={`cursor-pointer text-[14px] leading-[20px] font-[600]  max-[600px]:text-[12px] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]"
                      }`}
                    >
                      America
                    </p>
                    <p
                      onClick={AsiaClick}
                      className={`cursor-pointer text-[14px] leading-[20px] font-[600]  max-[600px]:text-[12px] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]"
                      }`}
                    >
                      Asia
                    </p>
                    <p
                      onClick={EuropeClick}
                      className={`cursor-pointer text-[14px] leading-[20px] font-[600]  max-[600px]:text-[12px] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]"
                      }`}
                    >
                      Europe
                    </p>
                    <p
                      onClick={OceaniaClick}
                      className={`cursor-pointer text-[14px] leading-[20px] font-[600]  max-[600px]:text-[12px] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]"
                      }`}
                    >
                      Oceania
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] w-[100%] gap-[70px]   mt-[50px] flex flex-wrap justify-center">
            {information.map((country, key) => (
              <div
                onClick={() =>
                  navigation(`/country/${country.name.common}`, {
                    state: country,
                  })
                }
                key={key}
                className={`flex flex-col  shadow-[0px_2px_9px_0px_#0000000E] rounded-[5px] ${
                  darkmode ? "bg-[#2B3844]" : "bg-[#fff]"
                }`}
              >
                <div className="w-[267px] h-[160px]">
                  <img
                    src={country.flags.svg}
                    className="w-[100%] h-[100%] bg-cover "
                    alt=""
                  />
                </div>
                <div className="pt-[24px] pl-[24px]">
                  <p
                    className={`text-[18px] leading-[25px] font-[800] max-w-[235px] ${
                      darkmode ? "text-[#fff]" : "text-[#111517]"
                    }`}
                  >
                    {country.name.common}
                  </p>
                  <div className="flex flex-col mt-[16px] gap-[8px] mb-[46px] max-w-[235px]">
                    <p
                      className={`text-[14px] leading-[16px] font-[600] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]"
                      }`}
                    >
                      Population:
                      <span className="font-[300]">{country.population}</span>
                    </p>
                    <p
                      className={`text-[14px] leading-[16px] font-[600] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]"
                      }`}
                    >
                      Region:
                      <span className="font-[300]">{country.region}</span>
                    </p>
                    <p
                      className={`text-[14px] leading-[16px] font-[600] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]"
                      }`}
                    >
                      Capital:
                      <span className="font-[300]">{country.capital}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
