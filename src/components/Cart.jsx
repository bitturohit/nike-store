import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from './CartItem';
import CartCount from './CartCount';
import CartEmpty from './CartEmpty';
import { toggleCart, clearCart, getCartTotal } from '../store';

const Cart = () => {
  const dispatch = useDispatch();

  const { isCartOpen, cartItems, cartAmount, cartQuantity } =
    useSelector((state) => {
      return state.cart;
    });

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);

  const handleCartToggle = () => {
    dispatch(toggleCart(false));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isCartOpen]);

  const cartItemsList = (
    <div>
      <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
        {cartItems?.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-semibold uppercase">
            Subtotal
          </h1>
          <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
            ${cartAmount}
          </h1>
        </div>
        <div className="grid items-center gap-2">
          <p className="text-sm font-medium text-center">
            Taxes and Shipping will Calculate At Shipping
          </p>
          <button
            type="button"
            className="button-theme bg-theme-cart text-white"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
          isCartOpen
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-8'
        }`}
      >
        <div className="blur-effect-theme h-screen max-w-xl w-full absolute right-0">
          <CartCount
            cartQty={cartQuantity}
            onCartToggle={handleCartToggle}
            onClearCart={handleClearCart}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={handleCartToggle} />
          ) : (
            cartItemsList
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
