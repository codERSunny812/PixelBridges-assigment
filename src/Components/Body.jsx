import "../style.css";
import EndBox from "./EndBox";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const Body = () => {
  return (
    <>
      <div className="body pt-11">

        <div className="App-body flex flex-col md:flex-row gap-3 mx-9">
           <LeftBox/>
           <RightBox/>
        </div>

        {/* end box */}
       <EndBox/>
      </div>
    </>
  );
};

export default Body;
