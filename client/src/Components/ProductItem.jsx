import React from 'react';

const ProductItem = ({ product, handleEdit, handleDelete }) => {
  return (
    <li className="product-item">
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-title">{product.title}</p>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-rating">Rating: {product.rating.rate} (Count: {product.rating.count})</p>
      <button className="edit-btn" onClick={() => handleEdit(product)}>Edit</button>
      <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
    </li>
  );
};

export default ProductItem;
