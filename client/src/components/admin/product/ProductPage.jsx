import React from 'react';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <button >
           Add New
        </button>
      </div>
      <ProductTable />
      </div>
    </div>
  );
};

export default ProductsPage;
