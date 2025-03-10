import { useMainStates } from "../../../store";
import { InputStates } from "../../../interfaces/Interfaces";
function Input_div({ search, TakeValue }: InputStates) {
  const darkmode = useMainStates((state) => state.darkmode);
  return (
    <div
      className={`${
        darkmode ? "bg-[#2B3844] " : ""
      } cursor-pointer max-w-[480px] w-[100%] h-[56px] shadow-[0px_2px_9px_0px_#0000000E] flex items-center justify-center pl-[32px] rounded-[5px]  max-[600px]:max-w-[100%]`}
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
  );
}

export default Input_div;
