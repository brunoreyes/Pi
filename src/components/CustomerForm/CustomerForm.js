import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './CustomerForm.css'
import Checkout from '../Checkout/Checkout';


class CustomerForm extends Component {
    state = {
        customerToAdd: {
            customer_name: '',
            street_address: '',
            city: '',
            zip: '',
        }
    }




    handleChange = (event, type) =>{
        console.log( event.target.value)
        this.setState({
            customerToAdd:{
                ...this.state.customerToAdd,
                [type]: event.target.value
            }
            
        })
    }

    addCustomer = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: "ADD_NEW_CUSTOMER",
            payload: this.state.customerToAdd
        })
        this.setState({
            customerToAdd: {
                customer_name: '',
                street_address: '',
                city: '',
                zip: '',
                type:''
            }
        })
        //this.radioBtnHandle();
        this.props.history.push('/checkout');
    }

    // radioBtnHandle = (event) => {
    //     console.log("radio button clicked", event.target.value)
    //     this.setState({
    //         customerToAdd:{
    //             ...this.state.customerToAdd,
    //             deliveryOption: event.target.value
    //         }
    //     })
    // }


    render() {
        return (
            <>
            <h2>Step two customer Info!!</h2>
            <div className="form-container">
                
                {/*  */}
                <form onSubmit={this.addCustomer}> 
                    <input onChange={(event)=>this.handleChange(event,'customer_name')}placeholder="name" type="text"/>
                    
                    <input onChange={(event)=>this.handleChange(event,"street_address")}placeholder="street address"/>
                    
                    <input onChange={(event)=>this.handleChange(event, "city")}placeholder="city"/>
                    
                    <input onChange={(event)=>this.handleChange(event,"zip")}placeholder="zip"/>
                    {/* <div onChange={this.radioBtnHandle}>
                        <input type="radio" value="Pickup" name="option" />
                        <label for="male">PickUp</label><br/>
                        <input type="radio" value="Delivery" name="option" />
                        <label for="male">Delivery</label><br />
                    </div>  */}
                    <input onChange={(event)=>this.handleChange(event,"type")}placeholder="Pickup or Delivery?"/>
{/* <select>
                        <option onChange={(event)=>this.handleChange(event,"type")}
                        value="pick-up">Pick-up</option>
                        <option onChange={(event)=>this.handleChange(event,"type")} 
                        value="delivery">Delivery</option>
                    </select> */}
                    <input type="submit" value="next" placeholder="next"/>
                </form>  
                Bill Total: ${this.props.reduxState.addToCartReducer.reduce(function(acc,item){
                    return acc + parseFloat(item.price);
                },0)}  
            </div>
            </>
        )
    }
}
const putStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putStateOnProps)(CustomerForm);