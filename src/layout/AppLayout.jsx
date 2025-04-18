import { Outlet } from "react-router-dom"
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const AppLayout = () => {
    return (
        <>
        <HeaderLayout/>
        <Outlet />
        <FooterLayout />
        </>
    )
}

export default AppLayout;