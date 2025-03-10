import Region_div from "../region_div/Region_div";
import { Region_divStates } from "../../../interfaces/Interfaces";
interface RegionMainStetes extends Region_divStates {
  arrow: string;
  RegionClick: () => void;
}
function Region_main({
  region,
  AfricaClick,
  darkmode,
  AmericaClick,
  AsiaClick,
  EuropeClick,
  OceaniaClick,
  RegionClick,
  arrow,
}: RegionMainStetes) {
  return (
    <div
      onClick={RegionClick}
      className={`${
        darkmode ? "bg-[#2B3844]" : ""
      } cursor-pointer relative flex max-w-[200px] w-[100%] h-[56px]  items-center justify-between  shadow-[0px_2px_9px_0px_#0000000E] rounded-[5px] px-[23px]`}
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
      <Region_div
        region={region}
        AfricaClick={AfricaClick}
        darkmode={darkmode}
        AmericaClick={AmericaClick}
        AsiaClick={AsiaClick}
        EuropeClick={EuropeClick}
        OceaniaClick={OceaniaClick}
      />
    </div>
  );
}

export default Region_main;
