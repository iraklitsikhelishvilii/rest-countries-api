import { useNavigate } from "react-router";
interface CountryStates {
  name: { common: string };
  flags: { svg: string };
  population: number;
  region: string;
  capital: string[];
}
interface CountriesDivStates {
  country: CountryStates;
  key: number;
  darkmode: boolean;
}
function Countries_div({ country, key, darkmode }: CountriesDivStates) {
  const navigation = useNavigate();
  return (
    <div
      onClick={() =>
        navigation(`/country/${country.name.common}`, {
          state: country,
        })
      }
      key={key}
      className={` cursor-pointer flex flex-col  shadow-[0px_2px_9px_0px_#0000000E] rounded-[5px] ${
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
  );
}

export default Countries_div;
