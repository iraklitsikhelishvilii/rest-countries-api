import moon_icon from "../../../assets/images/Path.svg";
import moon2_icon from "../../../assets/images/Path (1).svg";
import { useMainStates } from "../../../store";

interface Header {
  darkmode: boolean;
  DarkModeClick: () => void;
}

function Header() {
  let darkmode = useMainStates((state) => state.darkmode);
  let DarkModeClick = useMainStates((state) => state.lightmode);
  let moon;
  darkmode ? (moon = moon2_icon) : (moon = moon_icon);
  return (
    <div
      className={`${
        darkmode ? "bg-[#2B3844]" : "bg-[#FFFFFF]"
      } cursor-pointer shadow-[0px_2px_4px_0px_#0000000E] w-[100%] h-[80px] flex items-center justify-center`}
    >
      <div className=" max-w-[1280px] w-[100%] flex justify-between items-center">
        <h1
          className={`${
            darkmode ? "text-[#FFFFFF]" : "text-[#111517]"
          } text-[24px]  font-[800]`}
        >
          Where in the world?
        </h1>
        <div
          onClick={DarkModeClick}
          className="flex items-center justify-center gap-[8px]"
        >
          <p
            className={`${
              darkmode ? "text-[#fff]" : "text-[#111517] "
            } text-[16px] font-[600]`}
          >
            Dark Mode
          </p>
          <img src={moon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
