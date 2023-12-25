import TradingView from "./TradingView"
import { FaAngleDown } from "react-icons/fa6";

const RightBox = () => {
  return (
        <div className=" App-body-right w-full  h-auto md:h-[710px]">

            {/* top box */}
            <div className="right-top-box md:w-full w-fit  h-auto md:h-[53px] py-[9px] px-[3.1px] flex flex-row md:flex-row justify-start items-center  bg-[rgba(13,21,48,.8)] rounded-3xl md:my-1 mx-3 my-7">

              <div className="mx-2 md:w-[152.34px] h-[21.3px] md:h-[53px]  md:text-[21.5px] uppercase flex justify-start items-center text-xs">
                    <h1>eth/usd</h1>
                    <FaAngleDown />
                </div>

                <div className="price w-full md:w-fit h-[40px] flex flex-col justify-center items-center mx-[0.2px] md:mx-2 md:px-2 text-xs">
                    <h1 className="md:text-[17px]">$2,295</h1>
                    <h1 className="md:text-[12px] md:py-2">$2,294</h1>
                </div>
                <div className="change w-full md:w-fit h-[40px] flex flex-col justify-center items-center mx-[0.2px] 
                md:mx-2 md:px-2">
                    <h1 className="md:text-[12px] text-xs w-full text-nowrap" >24 h change</h1>
                    <h1 className="md:text-[12px] text-xs md:py-2 " >+0.24%</h1>
                    
                </div>
                <div className="w-full md:w-fit h-[40px] flex flex-col justify-center items-center mx-2 px-2">
                    <h1 className="md:text-[12px] text-xs w-full text-nowrap" >24 h high</h1>
                    <h1 className="md:text-[12px] text-xs md:py-2" >2,320</h1>
                </div>
                <div className="w-full md:w-fit h-[40px] flex flex-col justify-center items-center md:mx-2 md:px-2">
                    <h1 className="md:text-[12px] w-full text-xs text-nowrap" >24 h low</h1>
                    <h1 className="md:text-[12px] text-nowrap text-xs w-full md:py-2"  >2,280</h1>
                </div>
            </div>


            {/* chart component */}
            <div className="chart w-full md:w-full h-[640px] rounded-md">
                <TradingView />
            </div>

        </div>
          
       
  )
}

export default RightBox