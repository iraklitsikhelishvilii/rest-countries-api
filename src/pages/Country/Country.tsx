import { Link, useLocation } from "react-router";
import arrow_icon from "../../assets/images/Shape.svg";
function Country() {
  const location = useLocation();
  const country = location.state;

  return (
    <>
      <div className="w-[100%] flex items-center justify-center">
        <div className="max-w-[1280px] w-[100%] flex flex-col mt-[80px] gap-[80px]">
          <Link
            className=" w-[136px] h-[40px] flex items-center justify-between px-[32px] rounded-[6px]"
            to={"/"}
          >
            <img src={arrow_icon} alt="" />
            Back
          </Link>
          <div className="w-[100%] flex justify-between items-center">
            <img
              className="w-[560px] h-[460px]"
              src={country.flags.svg}
              alt=""
            />
            <div className=" max-w-[574px] w-[100%] ">
              <div className="flex items-center max-w-[574px] w-[100%] justify-between">
                <div>
                  <h1 className="text-[32px] font-[800] text-[#111517]">
                    {country.name.common}
                  </h1>
                  <div className="flex flex-col mt-[24px]">
                    <p className=" text-[16px] leading-[32px] font-[600] text-[#111517]">
                      Native Name:
                      <span className="font-[300]">
                        {country.altSpellings[1]}
                      </span>
                    </p>
                    <p className=" text-[16px] leading-[32px] font-[600] text-[#111517]">
                      Population:
                      <span className="font-[300]">{country.population}</span>
                    </p>
                    <p className=" text-[16px] leading-[32px] font-[600] text-[#111517]">
                      Region:
                      <span className="font-[300]">{country.region}</span>
                    </p>
                    <p className=" text-[16px] leading-[32px] font-[600] text-[#111517]">
                      Sub Region:
                      <span className="font-[300]">{country.subregion}</span>
                    </p>
                    <p className=" text-[16px] leading-[32px] font-[600] text-[#111517]">
                      Capital:
                      <span className="font-[300]">{country.capital}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[16px] leading-[32px] font-[600] text-[#111517]">
                    Top Level Domain:
                    <span className="font-[300]">{country.tld}</span>
                  </p>
                  <p className=" text-[16px] leading-[32px] font-[600] text-[#111517]">
                    Currencies:
                  </p>
                  <p className=" text-[16px] leading-[32px] font-[600] text-[#111517]">
                    Languages:
                  </p>
                </div>
              </div>
              <div className="w-[100%] flex mt-[70px]">
                <p>Border Countries:</p>
                <span className="font-[300]">{country.borders}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
