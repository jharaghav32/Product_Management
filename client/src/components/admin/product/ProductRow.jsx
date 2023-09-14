import React from 'react';

const ProductRow = () => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src=""
              alt="{product.name}"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">
             product.name
            </div>
            <div className="text-sm leading-5 text-gray-500">
              product.description
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          product.price
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          product.status
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        product.inventory
      </td>
    </tr>
  );
};

export default ProductRow;
