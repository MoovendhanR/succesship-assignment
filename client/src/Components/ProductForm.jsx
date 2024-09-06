import React from 'react';

const ProductForm = ({ form, setForm, handleSubmit, editingId }) => {
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-field"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        type="number"
        className="input-field"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />
      <textarea
        className="input-field"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
      <input
        type="text"
        className="input-field"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />
      <input
        type="text"
        className="input-field"
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        required
      />
      <input
        type="number"
        className="input-field"
        placeholder="Rating (Rate)"
        value={form.rating.rate}
        onChange={(e) => setForm({ ...form, rating: { ...form.rating, rate: e.target.value } })}
        required
      />
      <input
        type="number"
        className="input-field"
        placeholder="Rating (Count)"
        value={form.rating.count}
        onChange={(e) => setForm({ ...form, rating: { ...form.rating, count: e.target.value } })}
        required
      />
      <button className="submit-button" type="submit">
        {editingId ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default ProductForm;
