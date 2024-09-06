import React from 'react';

const AddressItem = ({ address, handleEdit, handleDelete }) => {
  return (
    <li className="address-item">
      <p className="address-name">{address.name}</p>
      <p className="address-email">{address.email}</p>
      <p className="address-phone">{address.phone}</p>
      <p className="address-info">{address.address}</p>
      <button className="edit-btn" onClick={() => handleEdit(address)}>Edit</button>
      <button className="delete-btn" onClick={() => handleDelete(address.id)}>Delete</button>
    </li>
  );
};

export default AddressItem;
