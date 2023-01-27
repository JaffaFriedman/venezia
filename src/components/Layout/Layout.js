import { Outlet} from 'react-router-dom'
import Navigation from '../../routes/Navigation/Navigation'
import Footer from '../../pages/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout