import AppWrapper from './app.styls'
import {
  Switch,
  Route,
} from "react-router-dom"
import Dashbord from '../dashbord'
import AboutAs from '../aboutAs/'
import Header from '../../components/heder'
import OurWorks from '../../container/ourWorks'
import Contacts from '../../container/contacts'
import Footer from '../../components/footer'

const routes = [
  { 
    component: <AboutAs />,
    href: '/about',
    exect: true
  },
  { 
    component: <OurWorks />,
    href: '/our-work/',
    exect: true
  },
  { 
    component: <Contacts />,
    href: '/contact/',
    exect: true
  },
  { 
    component: <Dashbord />,
    href: '/'
  },
]

function App(props) {
  return (
    <AppWrapper>
      <div className="appContent">
        <Header />
        <main>
          <Switch>
            {
              routes.map(({href,  component, exect}) => <Route key={href} exect={exect} path={href}>{ () => component }</Route>)
            }
          </Switch>
        </main>
        <Footer />
      </div>
    </AppWrapper>
  );
}

export default App;
