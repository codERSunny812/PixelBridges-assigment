
import { Outlet, createBrowserRouter } from "react-router-dom"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import './style.css'
import DashBoard from "./pages/DashBoard"
import Liquidity from "./pages/Liquidity"
import Leaderboard from "./pages/Leaderboard"
import LexStake from "./pages/LexStake"



function App() {
 

  return (
   <>
    <div className="app trade-page">
   <Header/>
   <Outlet/>
   <Footer/>
   </div>
       
   </>
  )
}


const AppRouter = createBrowserRouter([
  {
   path:'/',
   element:<App/>,
   children:[
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/dashboard',
      element:<DashBoard/>
    },
    {
      path:'/liquidity',
      element:<Liquidity/>
    },
    {
      path:'/leadership',
      element:<Leaderboard/>
    },
    {
      path:'/lexstake',
      element:<LexStake/>
    },

   ]
  },

]);



export default AppRouter;
