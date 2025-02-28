import { ReactComponent } from "@/interfaces"
import Header from "./Header"
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout: React.FC<ReactComponent> = ({ children }) => {
  const router = useRouter();
  const hideLayout = router.pathname === "/";

  return (
    <>
      {!hideLayout && <Header />}
      <main className="min-h-screen">{children}</main>
      {!hideLayout && <Footer />}
    </>
  )
}

export default Layout;