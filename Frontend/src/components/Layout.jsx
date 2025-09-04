import ResponsiveAppBar from "./BarraNav"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


function Layout() {
  return (
    <div>
      <ResponsiveAppBar/>

      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  )
}

export default Layout
