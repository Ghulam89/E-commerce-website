
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cancellation from './screens/cancellation/Cancellation';
import DiscountProduct from './screens/DiscountedProduct/DiscountProduct';
import Home from './screens/Home/Home';
import ProfileInfo from './screens/WistList/ProfileInfo';
import Refund from './screens/Refund/Refund';
import ForgetPassword from './screens/Registration/ForgetPassword';
import Login from './screens/Registration/Login';
import Signup from './screens/Registration/Signup';
import Return from './screens/return/Return';
import ShoppingCart from './screens/Shopping/ShoppingCart';
import Track from './screens/Track/Track';
import WishList from './screens/WistList/WishList';
import ProductDetails from './screens/ProductDetails/ProductDetails';
import LoginSeller from './screens/sellerAdmin/LoginSeller';
import ShopApplication from './screens/sellerAdmin/ShopApplication';
import AllSeller from './screens/sellerAdmin/AllSeller';
import ShopView from './screens/Shopping/ShopView';
import WistList2 from './screens/WistList/WistList2';
import Address from './screens/WistList/Address';
import ChatWithDeliveryMan from './screens/WistList/ChatWithDeliveryMan';
import ChatWithSeller from './screens/WistList/ChatWithSeller';
import MyLoyaltyPoint from './screens/WistList/MyLoyaltyPoint';
import MyOrder from './screens/WistList/MyOrder';
import MyWallet from './screens/WistList/MyWallet';
import SupportTicket from './screens/WistList/SupportTicket';
import TrackYourOrder from './screens/WistList/TrackYourOrder';
function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/signup' element={<Signup/>}  />
          <Route path='/login' element={<Login/>}  />

          <Route path='/track' element={<Track/>}  />
          <Route path='/forget_password' element={<ForgetPassword/>}  />
          <Route path='/shopping_cart' element={<ShoppingCart/>}  />
          <Route path='/wishlist' element={<WishList/>}  />
          <Route path='/discount_product' element={<DiscountProduct/>}  />
          <Route path='/cancellation' element={<Cancellation/>}  />
          <Route path='/refund' element={<Refund/>}  />
          <Route path='/return' element={<Return/>}  />
          <Route path='/product_details' element={<ProductDetails/>} />

          {/* seller side  */}
          <Route path='/login_seller' element={<LoginSeller/>} />
          <Route path='/shop_application' element={<ShopApplication/>} />
          <Route path='/all_seller' element={<AllSeller/>} />
          <Route path='/shop_view' element={<ShopView/>} />


          {/* outledt */}

          <Route  element={<WishList/>} >
           <Route path='/wish_list' element={<WistList2/>}/>
           <Route path='/Address' element={<Address/>}  /> 
           <Route path='/ChatWithDeliveryMan' element={<ChatWithDeliveryMan/>}  /> 
           <Route path='/profile_info' element={<ProfileInfo/>}  />
           <Route path='/ChatWithSeller' element={<ChatWithSeller/>}  /> 
           <Route path='/My_Loyalty_Point' element={<MyLoyaltyPoint/>}  /> 
           <Route path='/my_order' element={<MyOrder/>}  /> 
           <Route path='/my_wallet' element={<MyWallet/>}  /> 
           <Route path='/Support_Ticket' element={<SupportTicket/>}  /> 
           <Route path='/tracker_your_order' element={<TrackYourOrder/>}  /> 
          </Route>
       </Routes>
    </div>
  );
}

export default App;
