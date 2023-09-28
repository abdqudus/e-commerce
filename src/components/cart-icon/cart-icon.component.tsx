import "./cart-icon-styles";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconStyled,
} from "./cart-icon-styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  return (
    <CartIconContainer onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
      <ShoppingIconStyled />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
