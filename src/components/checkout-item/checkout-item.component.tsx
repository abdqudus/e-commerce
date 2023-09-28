import React from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  NameSpan,
  QuantitySpan,
  Arrow,
  PriceSpan,
  RemoveBtn,
  ValueSpan,
} from "./checkout-item.styles";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItemProps } from "../cart-item/cart-item.component";

const CheckoutItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useDispatch();
  const { name, imageUrl, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <QuantitySpan>
        <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
        <ValueSpan>{quantity}</ValueSpan>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </QuantitySpan>
      <PriceSpan>{price}</PriceSpan>
      <RemoveBtn onClick={clearItemHandler}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
