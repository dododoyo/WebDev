import { Outlet } from "react-router-dom"
import StyledNavbar from "./StyledNavbar"


const SharedLayout = () => {
  return (
    <>
    <StyledNavbar></StyledNavbar>
    <section className="section">
      <Outlet></Outlet>
    </section>
    </>
  )
}

export default SharedLayout