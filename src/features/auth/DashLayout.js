import { Outlet } from "react-router-dom"
import DashHeader from "./DashHeader"
const DashLayout = () =>{
    return(
    <>
    <DashHeader/>
    <br/>
    <Outlet/>
    </>
    )
}
export default DashLayout