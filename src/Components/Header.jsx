import { LuWallet } from "react-icons/lu";
import "../style.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const Header = () => {
  const [isVisible,setIsVisible] = useState(false);

  const handleSideBar = () =>{
  setIsVisible(true);
  }

  const hideSideBar = () => {
setIsVisible(false);
  }

  return (
    <>
      <header>
        <div className=" App-header  h-[6.2rem] w-full flex items-center md:justify-around justify-between bg-[rgba(14,17,25,.4)]">
          <div className="App-header-container left flex md:justify-evenly items-center w-[1097px] capitalize">
            <GiHamburgerMenu className="md:hidden h-9 w-9 mx-2" onClick={handleSideBar} />
            <h1 className="App-header_heading h-[24.5px] w-fit md:w-[100px] text-[18px]  md:text-[2.4rem] tracking-widest md:p-[15px] flex justify-center items-center hover:text-gray-400 ">
              <Link to='/' >
                lexer
              </Link>
            </h1>

             {/* hamburger menu */}

             {
              isVisible && <div className="hamburger-menu absolute z-10 w-full h-[100vh] bg-[#253c7e] backdrop-blur-sm md:hidden  top-0 transition ease-linear duration-1000 delay-200">

                <div className="title flex justify-between items-center p-10">
                  <h1 className="App-header_heading h-[24.5px] text-[23px] text-center  hover:text-gray-400 ">
                    <Link to='/' >
                      lexer
                    </Link>
                  </h1>
                  <RxCross1 className="h-[24.5px] w-[24.5px] mr-8" onClick={hideSideBar} />

                </div>
                <div className="navbar my-9">
                  <ul className="text-[1.5rem] ">
                    <Link to="/dashboard">
                      <li className="px-[18px] py-[17px] hover:text-blue-400">
                        dashboard
                      </li>
                    </Link>
                    <Link to="/">
                      <li className="px-[18px] py-[17px] hover:text-blue-400">
                        migrate v1 assests{" "}
                      </li>
                    </Link>

                    <Link to="/lexstake">
                      <li className="px-[18px] py-[17px] hover:text-blue-400">
                        lexstake
                      </li>
                    </Link>

                    <Link to="/liquidity">
                      <li className="px-[18px] py-[17px] hover:text-blue-400">
                        liquidity
                      </li>
                    </Link>
                    <Link to="/leadership">
                      <li className="px-[18px] py-[17px] hover:text-blue-400">
                        leadership
                      </li>
                    </Link>
                    <Link to='/'>
                      <li className="px-[18px] py-[17px] hover:text-blue-400">trade</li>
                    </Link>
                    <li className="px-[18px] py-[17px] hover:text-blue-400">
                      v2 launch
                    </li>
                  </ul>


                </div>

              </div>
             }


            {/* actual navbar */}
            <div className="navbar">
              <ul className="  md:w-[980px] hidden md:flex justify-evenly text-[1.5rem] ">
                <Link to="/dashboard">
                  <li className="px-[18px] py-[17px] hover:text-blue-400">
                    dashboard
                  </li>
                </Link>
                <Link to="/">
                  <li className="px-[18px] py-[17px] hover:text-blue-400">
                    migrate v1 assests{" "}
                  </li>
                </Link>

                <Link to="/lexstake">
                  <li className="px-[18px] py-[17px] hover:text-blue-400">
                    lexstake
                  </li>
                </Link>

                <Link to="/liquidity">
                  <li className="px-[18px] py-[17px] hover:text-blue-400">
                    liquidity
                  </li>
                </Link>
                <Link to="/leadership">
                  <li className="px-[18px] py-[17px] hover:text-blue-400">
                    leadership
                  </li>
                </Link>
                <Link to='/'>
                  <li className="px-[18px] py-[17px] hover:text-blue-400">trade</li>
                </Link>
                <li className="px-[18px] py-[17px] hover:text-blue-400">
                  v2 launch
                </li>
              </ul>
            </div>
           
          </div>

          <div className="App-header-container right md:w-[185px] p-2 md:p-3 flex items-center justify-center text-[1.4rem] capitalize border-2 border-gray-400 rounded-full hover:bg-blue-100 hover:bg-opacity-15">
            <LuWallet className="h-[24px] w-[24px]" />
            <h1 className="mx-1 w-full text-center">connect <span className="md:inline hidden">wallet</span> </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
