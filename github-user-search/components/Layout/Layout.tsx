import { ReactComponent } from "@/interfaces"
import Header from "./Header"

const Layout: React.FC<ReactComponent> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
    </>
  )
}

export default Layout;