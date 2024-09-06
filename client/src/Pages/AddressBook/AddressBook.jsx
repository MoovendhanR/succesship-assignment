import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AddressBook.css"
import AddressList from '../../Components/AddressList';
import AddressForm from '../../Components/AddressForm';

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
          addresses.map((addr) => (addr.id === editingId ? response.data : addr))
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
    <div>
    <h1 className="address-book-title">Address Book</h1>
    <AddressForm
      form={form}
      setForm={setForm}
      handleSubmit={handleSubmit}
      editingId={editingId}
    />
    <center>
    <AddressList
      addresses={addresses}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
    </center>
  </div>
  );
};

export default AddressBook;
