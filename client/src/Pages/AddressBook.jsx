import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddressBook = () => {
  const [addresses, setAddresses] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });
  const [editingId, setEditingId] = useState(null);

  // Fetch addresses
  useEffect(() => {
    axios.get('http://localhost:8080/addresses').then((response) => {
      setAddresses(response.data);
    });
  }, []);

  // Create or Update Address
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      axios.put(`http://localhost:8080/addresses/${editingId}`, form).then((response) => {
        setAddresses(
          addresses.map((addr) => (addr._id === editingId ? response.data : addr))
        );
        setEditingId(null);
        setForm({ name: '', email: '', phone: '', address: '' });
      });
    } else {
      axios.post('http://localhost:8080/addresses', form).then((response) => {
        setAddresses([...addresses, response.data]);
        setForm({ name: '', email: '', phone: '', address: '' });
      });
    }
  };

  // Delete Address
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/addresses/${id}`).then(() => {
      setAddresses(addresses.filter((addr) => addr.id !== id));
    });
  };

  // Edit Address
  const handleEdit = (address) => {
    setForm(address);
    setEditingId(address.id);

    console.log("addressid",address.id)
  };

  return (
    <div className="App">
      <h1>Address Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {addresses?.map((address) => (
          <li key={address._id}>
            <p>{address.name}</p>
            <p>{address.email}</p>
            <p>{address.phone}</p>
            <p>{address.address}</p>
            <button onClick={() => handleEdit(address)}>Edit</button>
            <button onClick={() => handleDelete(address.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressBook;
