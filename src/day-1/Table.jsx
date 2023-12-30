import React, { useState } from 'react';

const ProductList = (props) => {
  const products = [
    { category: 'Fruits', price: '$1', stocked: 'yes', name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: 'yes', name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: 'no', name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: 'yes', name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: 'no', name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: 'yes', name: 'Peas' },
  ];

  const [showData, setShowData] = useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      <button onClick={() => setShowData(!showData)}>click button</button>
      {showData ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stocked</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stocked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default ProductList;


