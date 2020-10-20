import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

class Checkout extends Component {

    // customerToAdd = (customerPost) => {
    //     console.log('Adding customer', customerPost);
    //     //Send it to the server
        

    handleCheckout = (event) => {
        console.log('in handleCheckout', this.props.reduxState.addToCartReducer.price);

        const customerPost = {
            customer_name:  this.props.reduxState.customerReducer[0].customer_name,
            street_address:  this.props.reduxState.customerReducer[0].street_address,
            city:  this.props.reduxState.customerReducer[0].city,
            zip: this.props.reduxState.customerReducer[0].zip,
            type: this.props.reduxState.customerReducer[0].type,
            total: this.props.reduxState.addToCartReducer.reduce(function(acc,item){
                    return acc + parseFloat(item.price);
                },0) ,
            pizzas: [],
            // pizzas: this.props.reduxState.addToCartReducer
        }//end customerr
        console.log('LOOK HERE, CUSTOMER POST:', customerPost)
        axios({
            method: 'POST',
            url: '/api/order',
            data: customerPost
            })
            .then((response) => {
                //Send user info to server
                //Send order total to server
                //Send array of pizzas to server
                console.log('THIS IS FROM OUR POST:', response);
            })
            .catch((error) => {
                console.log('Error adding customer', error);
            })//end axios
    }//end handleCheckout


    render() {
        return (
            <div>
                <h2>Step 3: Checkout</h2>
                {/* display customer info .map */}
                <ul>
                    {this.props.reduxState.customerReducer.map((customerToAdd, index) =>
                        <li key={index}>{customerToAdd.customer_name}
                            <br />{customerToAdd.street_address}
                            <br />{customerToAdd.city}
                            <br />{customerToAdd.zip}
                        </li>)}
                </ul>
                {/* pizza in cart info display */}
                <table>
                    <thead>
                        <tr>
                            <th>
                                -Your Food-

                               
                             </th>
                            <th>
                                -Your Cost-
                               
                            </th>

                            <th>
                                -Your Bill: 
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.addToCartReducer.map((product, index) => <tr key={index}>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {product.price}
                            </td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>

                {/* Bill total */}
               {/* Bill Total: ${this.props.reduxState.pizzaBillTotalReducer.count} */}


                
                Bill Total: ${this.props.reduxState.addToCartReducer.reduce(function(acc,item){
                    return acc + parseFloat(item.price);
                },0)}


                <Router>
                    <button onClick={this.handleCheckout}><Link to="/">Checkout</Link></button>
                </Router>
                {/* Silly comment here */}
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Checkout);