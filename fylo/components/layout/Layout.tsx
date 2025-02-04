import { ReactComponents } from "@/interfaces"
import Header from "./Header"
import Footer from "./Footer";



const Layout:React.FC<ReactComponents> = ({children}) => {
  return(
<>
<Header />
<main className="min-h-screen">{children}</main>
<Footer />
</>
  )
}

export default Layout;