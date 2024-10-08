import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Products.css';
import ProductList from '../../Components/ProductList';
import ProductForm from '../../Components/ProductForm';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: { rate: '', count: '' },
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch products
  useEffect(() => {
    axios.get('https://profile-fyi-backend-db.onrender.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  // Create or Update Product
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      axios.put(`https://profile-fyi-backend-db.onrender.com/products/${editingId}`, form).then((response) => {
        setProducts(
          products.map((product) => (product.id === editingId ? response.data : product))
        );
        setEditingId(null);
        setForm({
          title: '',
          price: '',
          description: '',
          category: '',
          image: '',
          rating: { rate: '', count: '' },
        });
      });
    } else {
      axios.post('https://profile-fyi-backend-db.onrender.com/products', form).then((response) => {
        setProducts([...products, response.data]);
        setForm({
          title: '',
          price: '',
          description: '',
          category: '',
          image: '',
          rating: { rate: '', count: '' },
        });
      });
    }
  };

  // Delete Product
  const handleDelete = (id) => {
    axios.delete(`https://profile-fyi-backend-db.onrender.com/products/${id}`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  // Edit Product
  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product.id);
  };

  return (
    <div>
      <h1 className="product-book-title">Product Book</h1>
      <ProductForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        editingId={editingId}
      />
      <ProductList
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Products;
