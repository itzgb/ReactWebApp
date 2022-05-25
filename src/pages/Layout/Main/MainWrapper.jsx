import SideBarWrapper from "../SideBar/SideBarWrapper";

const MainWrapper = ({children}) => {
    return(
        <div className="main-wrapper">
            {/* <SideBarWrapper></SideBarWrapper> */}
            <div className="content-wrapper">
            {children}
            </div>
        </div>
    )
}
export default MainWrapper;