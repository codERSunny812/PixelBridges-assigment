import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { MdOutlineSwapVert } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

const LeftBox = () => {
  return (
      <div className="App-body-left w-full md:w-[388.5px] h-auto md:h-[680.23px] rounded-3xl bg-[rgba(217,222,222,.05)]">
          {/* left part of the web */}
          <div className="left-data mt-4 p-3 ">
              {/* box -1  */}
              <div className="App-left-part-data  border-2 border-gray-400 w-full h-[38px] md:text-2xl flex justify-center items-center bg-[#D9D9D94D] mt-3 mx-1 rounded-full ">
                  <div className=" part1 flex justify-center items-center w-[118px] h-[34px] text-3xl  bg-blue-600 border-2 border-blue-400 rounded-full">
                      <FiTrendingUp />
                      <h1 className="px-3 capitalize">long</h1>
                  </div>

                  <div className="part2 flex justify-center items-center w-[118px] h-[34px] text-3xl hover:bg-blue-600 hover:bg-opacity-70 hover:rounded-full ">
                      <FiTrendingDown />
                      <h1 className="px-3 capitalize">short</h1>
                  </div>

                  <div className="part3 flex justify-center items-center w-[118px] h-[34px] text-3xl hover:bg-blue-600 hover:bg-opacity-70 hover:rounded-full ">
                      <MdOutlineSwapHoriz />
                      <h1 className="px-3 capitalize">swap</h1>
                  </div>
              </div>

              {/* box -2  */}

              <div className="App-left-part-data  border-2 border-gray-400 w-full h-[38px] flex items-center  bg-[#D9D9D94D] mt-4 mx-1 rounded-full ">
                  <div className="flex justify-center items-center w-[50%] h-[32px] text-3xl  bg-blue-600 border-2 border-blue-400 rounded-full">
                      <h1 className="px-3 capitalize">market</h1>
                  </div>

                  <div className="flex justify-center items-center w-[50%] h-[32px] text-3xl rounded-full hover:bg-blue-600 hover:bg-opacity-70 hover:rounded-full  ">
                      <h1 className="px-3 capitalize">limit</h1>
                  </div>
              </div>

              {/* box -3  */}
              <div className="App-left-part-data mt-4 flex flex-col gap-2 w-full">
                  <h1
                      className=" w-full h-[19px] text-[14px]
                  capitalize "
                  >
                      pay
                  </h1>
                  <div className="pay w-full h-[39.92] flex justify-between items-center capitalize py-[0.5rem] px-[1rem] bg-[rgba(245,245,245,.07)] rounded-[10rem] mb-4">
                      <h1 className="w-[243px] h-[19px]">0.0</h1>
                      <div className="flex items-center justify-center w-[75px] h-[25.92px] text-[18px]">
                          <h1>eth</h1>
                          <FaAngleDown />
                      </div>
                  </div>

                  <div className="flex w-full items-center justify-center">
                      <MdOutlineSwapVert className="h-[3.5rem] w-[3.5rem]" />
                  </div>
                  <div className="pay-box w-full h-[19px]  text-[14px] flex justify-between">
                      <h1 className=" capitalize ">long</h1>
                      <h1 className=" capitalize">leverage : 1.10x</h1>
                  </div>

                  <div className="pay  w-full h-[39.92] flex justify-between items-center capitalize py-[0.5rem] px-[1rem] bg-[rgba(245,245,245,.07)] rounded-[10rem] mb-4">
                      <h1 className="w-[243px] h-[19px] ">0.0</h1>
                      <div className="flex items-center justify-center w-[75px] h-[25.92px] text-[18px]">
                          <h1>eth</h1>
                          <FaAngleDown />
                      </div>
                  </div>
              </div>

              <div className="App-left-part-data flex items-center justify-between px-2 py-3 text-2xl capitalize">
                <div className="key py-2 text-gray-400">
                    <h1 className="py-1">leverage slider</h1>
                      <h1 className="py-2" >Collateral In</h1>
                      <h1 className="py-2" >Leverage</h1>
                      <h1 className="py-2"  >Entry Price</h1>
                      <h1 className="py-2"  >Entry Price</h1>
                      <h1 className="py-2"    >Open Fees</h1>
                      <h1 className="py-2"   >Dynamic Fees</h1>
                      <h1 className="py-2"   >Available Liquidity</h1>
                </div>
                <div className="values py-3">
                      <input type="checkbox" className="py-2 bg-none text-end " />
                      <h1 className="py-2">USDC.e</h1>
                      <h1 className="py-2" >-</h1>
                      <h1 className="py-2" >$1.09955</h1>
                      <h1 className="py-2" >-</h1>
                      <h1 className="py-2" >-</h1>
                      <h1 className="py-2"  >0.0005% / 1h</h1>
                      <h1 className="py-2"  >0.0005% / 1h</h1>

                </div>
              </div>
              
              <div className="App-left-part-data">
                  <div className="button w-full border-4 border-[#d9d9d94d] text-center rounded-full h-20 capitalize flex items-center justify-center bg-[rgba(217,217,217,.3)] my-4 text-[12px]">
                    smart router
                </div>
                  <div className="button w-full  text-center rounded-full h-20 capitalize flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 my-4 text-[12px]">
                    connect wallet
                </div>
              </div>
          </div>
      </div>
  )
}

export default LeftBox