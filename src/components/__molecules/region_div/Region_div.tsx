import { Region_divStates } from "../../../interfaces/Interfaces";
function Region_div({
  region,
  AfricaClick,
  darkmode,
  AmericaClick,
  AsiaClick,
  EuropeClick,
  OceaniaClick,
}: Region_divStates) {
  return (
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
  );
}

export default Region_div;
