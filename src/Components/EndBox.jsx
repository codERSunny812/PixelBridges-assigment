

const EndBox = () => {
  return (
      <div className="border-2 border-gray-400 end-box w-full md:w-[1420px] h-auto md:h-[179px] bg-[rgba(217,222,222,.05)] rounded-lg flex flex-col justify-center items-center m-auto">

          <div className="w-full md:w-[1400px] h-[38px] flex justify-center items-center mx-4 md:mx-[2rem] mt-4 md:mt-[1.5rem] mb-[1.05rem] rounded-full bg-[rgba(217,217,217,.3)] capitalize text-[12px] ">
              <h1 className=" border w-[33%] md:w-[540px] h-[34px] flex justify-center items-center py-[8px] px-[10px] bg-blue-500 rounded-full mb-2 md:mb-0">position</h1>
              <h1 className=" w-[33%] md:w-[540px] h-[34px] flex justify-center items-center py-[8px] px-[10px] hover:bg-blue-500 hover:rounded-full hover:bg-opacity-60 mb-2 md:mb-0">order</h1>
              <h1 className="w-[33%] md:w-[540px] h-[34px] flex justify-center items-center py-[8px] px-[10px] hover:bg-blue-500 hover:rounded-full hover:bg-opacity-60 ">trades</h1>
          </div>

          <div className="end-text capitalize ">

              <div className="md:flex hidden flex-col md:flex-row justify-around text-[16px] capitalize">
                <div className=""></div>
                  <h1 className="w-full md:w-[190px] h-[47.5px] py-[14px] pl-[15px] pr-[15px] mb-2 md:mb-0">position</h1>
                  <h1 className="w-full md:w-[190px] h-[47.5px] py-[14px] pl-[15px] pr-[15px] mb-2 md:mb-0"  >net value</h1>
                  <h1 className="w-full md:w-[190px] h-[47.5px] py-[14px] pl-[15px] pr-[15px] mb-2 md:mb-0"  >size</h1>
                  <h1 className="w-full md:w-[190px] h-[47.5px] py-[14px] pl-[15px] pr-[15px] mb-2 md:mb-0"  >collateral</h1>
                  <h1 className="w-full md:w-[190px] h-[47.5px] py-[14px] pl-[15px] pr-[15px] mb-2 md:mb-0"  >entery price</h1>
                  <h1 className="w-full md:w-[190px] h-[47.5px] py-[14px] pl-[15px] pr-[15px] mb-2 md:mb-0" >mark price</h1>
                  <h1 className="w-full md:w-[190px] h-[47.5px] py-[14px] pl-[15px] pr-[15px] mb-2 md:mb-0" >liq price</h1>

              </div>

              <hr className="w-full h-8" />
              <h1>no open postion</h1>


          </div>




      </div>
  )
}

export default EndBox