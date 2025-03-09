import { useNavigate } from "react-router";
import search_icon from "../../assets/images/search.svg";
import arrow_img from "../../assets/images/expand-more.svg";
import { useEffect, useState } from "react";
import { FetchData } from "../../services/api";

function Main() {
  const navigation = useNavigate();
  const [data, setdata] = useState([]);
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
  const [africa, setafrica] = useState(false);
  const AfricaClick = () => {
    setafrica(true);
    setamerica(false);
    setasia(false);
    seteurope(false);
    setoceania(false);
  };
  const AfricaRegion = data.filter((item) => item.region === "Africa");

  const [america, setamerica] = useState(false);
  const AmericaClick = () => {
    setamerica(true);
    setafrica(false);
    setasia(false);
    seteurope(false);
    setoceania(false);
    [];
  };
  const AmericaRegion = data.filter((item) => item.region === "Americas");

  const [asia, setasia] = useState(false);
  const AsiaClick = () => {
    setasia(true);
    setamerica(false);
    setafrica(false);
    seteurope(false);
    setoceania(false);
    [];
  };
  const AsiaRegion = data.filter((item) => item.region === "Asia");

  const [europe, seteurope] = useState(false);
  const EuropeClick = () => {
    seteurope(true);
    setasia(false);
    setamerica(false);
    setafrica(false);
    setoceania(false);
    [];
  };
  const EuropeRegion = data.filter((item) => item.region === "Europe");

  const [oceania, setoceania] = useState(false);
  const OceaniaClick = () => {
    setoceania(true);
    seteurope(false);
    setasia(false);
    setamerica(false);
    setafrica(false);
    [];
  };
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

  return (
    <>
      <div className="flex items-center justify-center w-[100%] ">
        <div className="max-w-[1280px] w-[100%] flex flex-col justify-center items-center mt-[50px]  ">
          <div className=" w-[100%] flex justify-between">
            <div className="max-w-[480px] w-[100%] h-[56px] shadow-[0px_2px_9px_0px_#0000000E] flex items-center justify-center pl-[32px] rounded-[5px]">
              <div className="flex w-[100%]  gap-[24px] ">
                <img src={search_icon} alt="" />
                <input
                  onChange={TakeValue}
                  className=" outline-none text-[14px] font-[600] text-[#848484]"
                  type="text"
                  placeholder="Search for a country…"
                />
              </div>
            </div>
            <div
              onClick={RegionClick}
              className=" relative flex max-w-[200px] w-[100%] h-[56px]  items-center justify-between  shadow-[0px_2px_9px_0px_#0000000E] rounded-[5px] px-[23px]"
            >
              <p className="text-[14px] leading-[20px] font-[600] text-[#111517]">
                Filter by Region
              </p>
              <img src={arrow_img} alt="" />
              <div
                className={` gap-[8px] bg-[#fff] flex flex-col max-w-[200px] w-[100%] absolute   shadow-[0px_2px_9px_0px_#0000000E] rounded-[5px] pl-[24px]  top-[60px] left-0 ${
                  region ? "h-auto py-[16px]" : "h-[0px] py-[0px]"
                } `}
              >
                {region && (
                  <>
                    <p
                      onClick={AfricaClick}
                      className=" cursor-pointer text-[14px] leading-[20px] font-[600] text-[#111517]"
                    >
                      Africa
                    </p>
                    <p
                      onClick={AmericaClick}
                      className=" cursor-pointer text-[14px] leading-[20px] font-[600] text-[#111517]"
                    >
                      America
                    </p>
                    <p
                      onClick={AsiaClick}
                      className=" cursor-pointer text-[14px] leading-[20px] font-[600] text-[#111517]"
                    >
                      Asia
                    </p>
                    <p
                      onClick={EuropeClick}
                      className=" cursor-pointer text-[14px] leading-[20px] font-[600] text-[#111517]"
                    >
                      Europe
                    </p>
                    <p
                      onClick={OceaniaClick}
                      className=" cursor-pointer text-[14px] leading-[20px] font-[600] text-[#111517]"
                    >
                      Oceania
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] w-[100%] flex flex-wrap mt-[50px] gap-[74px]">
            {information.map((country, key) => (
              <div
                onClick={() =>
                  navigation(`/country/${country.name.common}`, {
                    state: country,
                  })
                }
                key={key}
                className="flex flex-col  shadow-[0px_2px_9px_0px_#0000000E] rounded-[5px]"
              >
                <div className="w-[267px] h-[160px]">
                  <img
                    src={country.flags.svg}
                    className="w-[100%] h-[100%] bg-cover "
                    alt=""
                  />
                </div>
                <div className="pt-[24px] pl-[24px]">
                  <p className="text-[18px] font-[800] leading-[25px]">
                    {country.name.common}
                  </p>
                  <div className="flex flex-col mt-[16px] gap-[8px] mb-[46px]">
                    <p className=" text-[14px] leading-[16px] font-[600] text-[#111517]">
                      Population:
                      <span className="font-[300]">{country.population}</span>
                    </p>
                    <p className=" text-[14px] leading-[16px] font-[600] text-[#111517]">
                      Region:
                      <span className="font-[300]">{country.region}</span>
                    </p>
                    <p className=" text-[14px] leading-[16px] font-[600] text-[#111517]">
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
