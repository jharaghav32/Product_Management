import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const history = useNavigate();

  const handleContinueShopping = () => {
    // Redirect to the home page when "Continue Shopping" is clicked
    history('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <svg
        className="w-16 h-16 text-green-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h1 className="text-2xl font-semibold mb-2">Payment Successful!</h1>
      <p className="text-gray-600 text-lg">
        Thank you for your purchase. Your order has been successfully placed.
      </p>
      <button
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleContinueShopping}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Success;
