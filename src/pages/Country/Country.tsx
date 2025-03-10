import { Link, useLocation } from "react-router";
import arrow_icon from "../../assets/images/Shape.svg";
import { useMainStates } from "../../store";
import Header from "../../components/__molecules/header/Header";
import arrowwhite_icon from "../../assets/images/call-made.svg";
import { CountryType } from "../../interfaces/Interfaces";

function Country() {
  const location = useLocation();
  const country = location.state as CountryType;
  let darkmode = useMainStates((state) => state.darkmode);
  let arrow = darkmode ? arrowwhite_icon : arrow_icon;

  return (
    <>
      <div
        className={`${
          darkmode ? "bg-[#202C36]" : "bg-[#fff]"
        } w-[100%] h-[100vh] max-[700px]:h-auto`}
      >
        <Header />
        <div className={` w-[100%] flex items-center justify-center px-[20px]`}>
          <div className="max-w-[1280px] w-[100%] flex flex-col mt-[80px] gap-[80px]">
            <Link
              className={`shadow-[0px_2px_9px_0px_#0000000E] w-[136px] h-[40px] flex items-center justify-between px-[32px] rounded-[6px] ${
                darkmode ? "bg-[#2B3844]" : "bg-[#fff]"
              }`}
              to={"/"}
            >
              <img src={arrow} alt="" />
              <p
                className={`text-[16px] leading-[20px] font-[300]   ${
                  darkmode ? "text-[#fff]" : "text-[#111517]"
                }`}
              >
                Back
              </p>
            </Link>
            <div className="w-[100%] flex justify-between items-center max-[1190px]:gap-[20px] max-[700px]:flex-col max-[700px]:items-start">
              <img
                className="w-[560px] h-[460px] max-[1190px]:w-[400px] max-[1190px]:h-[300px] max-[700px]:w-[320px] max-[700px]:h-[230px] "
                src={country.flags.svg}
                alt=""
              />
              <div className=" max-w-[574px] w-[100%] ">
                <div className="flex items-center max-w-[574px] w-[100%] justify-between max-[1190px]:flex-col max-[1190px]:items-start max-[1190px]:gap-[32px]">
                  <div>
                    <h1
                      className={`text-[32px] font-[800] max-[700px]:text-[22px] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]"
                      }`}
                    >
                      {country.name.common}
                    </h1>
                    <div className="flex flex-col mt-[24px]">
                      <p
                        className={`text-[16px] leading-[32px] font-[600] max-[700px]:text-[14px] ${
                          darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                        }`}
                      >
                        Native Name:
                        <span className="font-[300]">
                          {country.altSpellings[1]}
                        </span>
                      </p>
                      <p
                        className={`text-[16px] leading-[32px] font-[600] max-[700px]:text-[14px] ${
                          darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                        }`}
                      >
                        Population:
                        <span className="font-[300]">{country.population}</span>
                      </p>
                      <p
                        className={`text-[16px] leading-[32px] font-[600] max-[700px]:text-[14px] ${
                          darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                        }`}
                      >
                        Region:
                        <span className="font-[300]">{country.region}</span>
                      </p>
                      <p
                        className={`text-[16px] leading-[32px] font-[600] max-[700px]:text-[14px] ${
                          darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                        }`}
                      >
                        Sub Region:
                        <span className="font-[300]">{country.subregion}</span>
                      </p>
                      <p
                        className={`text-[16px] leading-[32px] font-[600] max-[700px]:text-[14px] ${
                          darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                        }`}
                      >
                        Capital:
                        <span className="font-[300]">{country.capital}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p
                      className={`text-[16px] leading-[32px] font-[600] max-[700px]:text-[14px] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                      }`}
                    >
                      Top Level Domain:
                      <span className="font-[300]">{country.tld}</span>
                    </p>
                    <p
                      className={`text-[16px] leading-[32px] font-[600] max-[700px]:text-[14px] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                      }`}
                    >
                      Currencies:
                      <span className="font-[300]">
                        {Object.values(country.currencies)
                          .map((currency) => currency.name)
                          .join(", ")}
                      </span>
                    </p>
                    <div className="flex">
                      <p
                        className={`text-[16px] leading-[32px] font-[600] max-[700px]:text-[14px] ${
                          darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                        }`}
                      >
                        Languages:
                      </p>
                      <div className=" flex gap-[5px]">
                        {Object.values(country.languages).map((lang, key) => (
                          <div key={key}>
                            <p
                              className={`text-[16px] leading-[32px] font-[300] max-[700px]:text-[14px]  ${
                                darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                              }`}
                            >
                              {lang}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] flex mt-[70px]">
                  {country.borders && country.borders.length > 0 && (
                    <p
                      className={`text-[16px] leading-[32px] font-[600] max-[700px]:text-[14px] ${
                        darkmode ? "text-[#fff]" : "text-[#111517]`}>"
                      }`}
                    >
                      Border Countries:
                    </p>
                  )}
                  <div className="flex gap-[5px] flex-wrap">
                    {country.borders &&
                      country.borders.length > 0 &&
                      country.borders.map((border, key) => (
                        <div
                          className={`w-[96px] h-[28px] flex items-center justify-center border-[0px_0px_4px_1px_#0000001B] ${
                            darkmode ? "bg-[#2B3844]" : "bg-[#fff]"
                          }`}
                          key={key}
                        >
                          <p
                            className={`text-[14px] leading-[32px] font-[300]  ${
                              darkmode ? "text-[#fff]" : "text-[#111517]"
                            }`}
                          >
                            {border}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
