"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { remove, increaseQuantity, decreaseQuantity, clearCart } from "../redux/cartslice";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface CartItem {
  _id: string;
  title: string;
  imageUrl: string | null;
  price: number;
  description: string;
  tags: string[];
  dicountPercentage?: number;
  availableSizes?: string[];
  quantity: number;
}

const fallbackImage = "/fallback-image.png";

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  const handleRemove = (_id: string) => {
    dispatch(remove(_id));
  };

  const handleCheckout = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Are you sure you want to complete your purchase?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Checkout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been placed.", "success");
        dispatch(clearCart());
        router.push("/checkout");
      }
    });
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>
      <div className="space-y-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item: CartItem) => (
            <div
              key={item._id}
              className="flex items-center bg-white shadow-md rounded-lg p-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src={item.imageUrl || fallbackImage}
                  alt={item.title}
                  height={150}
                  width={150}
                  className="rounded-md"
                />
              </div>

              <div className="ml-4 flex-grow">
                <h5 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h5>
                <h5 className="text-lg font-medium text-gray-600 mt-2">
                  ${item.price.toFixed(2)} x {item.quantity} = ${(
                    item.price * item.quantity
                  ).toFixed(2)}
                </h5>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    className="bg-gray-300 px-2 py-1 rounded"
                    onClick={() => dispatch(decreaseQuantity(item._id))}
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    className="bg-gray-300 px-2 py-1 rounded"
                    onClick={() => dispatch(increaseQuantity(item._id))}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
          <h4 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h4>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cartpage;




