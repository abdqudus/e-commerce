import HomeRoute from "./routes/Home/HomeRoute";
import { Route, Routes } from "react-router-dom";
import Nav from "./routes/Navigation/Nav-component";
import Auth from "./routes/Auth/Auth";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout-component";
import { useEffect } from "react";

import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomeRoute />} />
        <Route path="auth" element={<Auth />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
export default App;
