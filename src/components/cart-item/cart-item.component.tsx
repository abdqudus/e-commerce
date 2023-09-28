import { CartItem as TCartItem } from "../../store/cart/cart.types";
import "./cart-item.styes";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  NameSpan,
} from "./cart-item.styes";
export type CartItemProps = {
  cartItem: TCartItem;
};
const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <NameSpan>{name}</NameSpan>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
