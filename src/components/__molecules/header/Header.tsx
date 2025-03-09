function Header() {
  return (
    <div className=" bg-[#FFFFFF] shadow-[0px_2px_4px_0px_#0000000E] w-[100%] h-[80px] flex items-center justify-center">
      <div className=" max-w-[1280px] w-[100%] flex justify-between items-center">
        <h1 className=" text-[24px] text-[#111517] font-[800]">
          Where in the world?
        </h1>
        <div>
          <p className="text-[16px] text-[#111517] font-[600]">Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
