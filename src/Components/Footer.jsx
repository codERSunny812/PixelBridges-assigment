import { MdAccountBalance } from "react-icons/md";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className=" flex items-center mt-10 bg-blue-900">
        <div className="icons w-[92px] h-[26px] flex items-center px-[10px]">
                  <FaTwitter className="w-[16px] h-[26px] mx-[2px]" />
                  <FaDiscord className="w-[16px] h-[26px] mx-[2px]"  />
                  <MdAccountBalance className="w-[16px] h-[26px] mx-[2px]" />

        </div>
       
        <marquee className="text-[15px] " >
        Trade-2-Earn up to ~$20k in esLEX rewards now! More volume = more money! Read up onTrade-2-Earn!
        LEX GO!
        </marquee>

         
    </div>
    </>
  )
}

export default Footer