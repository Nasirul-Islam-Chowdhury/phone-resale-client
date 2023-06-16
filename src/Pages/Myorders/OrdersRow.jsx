import React from 'react';

const OrdersRow = ({order,i}) => {
    return (
        <tr>
                <th>{i + 1}</th>
                <td>{order.name}</td>
                <td>{order.itemName}</td>
                <td>{order.email}</td>
                <td>{order.location}</td>
                <td>
                    <small className='btn btn-sm'>Pay</small>
                </td>
              </tr>
    );
};

export default OrdersRow;