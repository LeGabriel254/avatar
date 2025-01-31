import { ReactComponents } from "@/interfaces"
import Header from "./Header"



const Layout:React.FC<ReactComponents> = ({children}) => {
  return(
<>
<Header />
<main className="min-h-screen">{children}</main>
</>
  )
}

export default Layout;