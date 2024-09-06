import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, handleEdit, handleDelete }) => {
  return (
    <ul className="product-list">
      {products?.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ProductList;
