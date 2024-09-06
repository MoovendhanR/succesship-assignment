import React from 'react';
import AddressItem from './AddressItem';

const AddressList = ({ addresses, handleEdit, handleDelete }) => {
  return (
    <ul className="address-list">
      {addresses?.map((address) => (
        <AddressItem
          key={address.id}
          address={address}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default AddressList;
