import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Admin.css';

class Admin extends Component {
  state = { orders: [] };

  componentDidMount() {
    this.getOrders();
  } //end componentDidMount

  getOrders = () => {
    console.log('in getPizza');
    axios
      .get('/api/order')
      .then((response) => {
        console.log(response.data);
        this.setState({ orders: response.data });
      })
      .catch((err) => {
        console.log('Problem getting Orders!', err);
        alert('Try again later!');
      }); //end axios GET
  }; //end getOrders

  render() {
    return (
      <div className="admin">
        <h2>Admin Portal</h2>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Zip</th>
              <th>Type</th>
              <th>Total</th>
              <th>Time Ordered</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order, i) => (
              <tr key={i}>
                <td>{order.customer_name}</td>
                <td>{order.street_address},</td>
                <td>{order.city}</td>
                <td>{order.zip}</td>
                <td>{order.type}</td>
                <td>${order.total}</td>
                <td>{order.time.slice(0, 19)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ); //end return
  } //end render
} //end class

export default connect()(Admin);
