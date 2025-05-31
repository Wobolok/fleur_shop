import { Outlet } from "react-router"
import Menu from "../Menu/Menu"
import Page from "../Page/Page"

const Layout = () => {
  return (
    <>
        <Menu />
        <Page>
            <Outlet />
        </Page>
    </>
  )
}

export default Layout