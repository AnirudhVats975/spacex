import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import SideToggle from './components/sideToggle/SideToggle';
import Home from './pages/Home';
import Falcon9 from './pages/Falcon9';
import Shop from './pages/Shop';
import MenProducts from './pages/manproduct/MenProducts';
import { Provider } from 'react-redux';
import store from './store/index';
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import HumanSpaceFlight from './pages/HumanSpaceFlight';
import Updates  from './pages/updates/Updates';



function App() {
  return (
  <>
 <Router>
   <Switch>
     <Provider store={store}>
     <Route exact path="/"  component={Home}/>
     <Route exact path="/falcon9"  component={Falcon9}/>
     <Route exact path="/humanSpaceFlight"  component={HumanSpaceFlight}/>
     <Route exact path="/updates"  component={Updates}/>


     <Route exact path="/shop"  component={Shop}/>
     <Route exact path="/collections/mens"  component={MenProducts}/>
     <Route exact path="/collections/mens/product/:id"  component={ProductDetails}/>
     <Route exact path="/cart"  component={Cart}/>
     <Route exact path="/account/login"  component={Login}/>
     <Route exact path="/account/register"  component={Register}/>




     </Provider>
   </Switch>
 </Router>
  </>
  );
}

export default App;
