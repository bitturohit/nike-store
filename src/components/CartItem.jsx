import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';

import {
  removeItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} from '../store';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseCartQuantity(item));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseCartQuantity(item));
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${item.color} ${item.shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={item.img}
              alt={`img/cart-item/${item.id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
            <div className="absolute right-1 top-1 blur-effect-theme bg-white/80 text-black text-xs px-1 rounded">
              ${item.price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {item.title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">
                {item.text}
              </p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                onClick={handleDecreaseQuantity}
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:w-6 lg:h-5 flex items-center justify-center">
                {item.quantity}
              </div>
              <button
                type="button"
                onClick={handleIncreaseQuantity}
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1>{item.price * item.quantity}</h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              onClick={handleRemoveItem}
              className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center"
            >
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
