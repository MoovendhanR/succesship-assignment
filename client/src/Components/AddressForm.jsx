import React from 'react';

const AddressForm = ({ form, setForm, handleSubmit, editingId }) => {
  return (
    <form className="address-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-field"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        className="input-field"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="text"
        className="input-field"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />
      <input
        type="text"
        className="input-field"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        required
      />
      <button className="submit-button" type="submit">
        {editingId ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default AddressForm;
