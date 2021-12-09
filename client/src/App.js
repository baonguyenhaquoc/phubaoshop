import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Productdesscreen from './screens/Productdesscreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <><div className="App">
      <Navbar />

      <BrowserRouter>

        <Route path='/' component={Homescreen} exact />
        <Route path='/product/:id' component={Productdesscreen} />
        <Route path='/cart' component={Cartscreen} />
        <Route path='/register' component={Registerscreen} />
        <Route path='/login' component={Loginscreen} />
      </BrowserRouter>

    </div><MessengerCustomerChat
        pageId="<106573108361036>"
        appId="<2581293385348533>"
         /></>
  );
  
}

export default App;
