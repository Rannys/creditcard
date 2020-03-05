import React, { Component } from "react"

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companyName: '',
            cardNumber: '',
            date: '',
            personName: ''

        }
    }
    handleName = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        let cardHolder = /^[a-zA-Z]{1,20}$/gi
        let numberHolder = /^[0-9]+$/g
        return (
            <div className=''>
                <div className='credit-card'>
                    <h5 className='company-name'>{cardHolder.test(this.state.companyName)&& this.state.companyName}</h5>
                    <img className='puce' src='https://cdn.xl.thumbs.canstockphoto.fr/cr%C3%A9dit-puce-utilis%C3%A9-carte-micro-photos-sous-licence_csp19978831.jpg' alt='puce'></img>
                    <p className='card-number'>{numberHolder.test(this.state.cardNumber)&&this.state.cardNumber.toString().padEnd(16,'*').replace(/(.{4})/g , "$1 ")}</p>
                 {/* <p className='date'>{numberHolder.test(this.state.date.slice(0,2)+'/'+this.state.date.slice(2,4))&&this.state.date.slice(0,2)+'/'+this.state.date.slice(2,4)  }</p> */}
                    <p className='date'>{numberHolder.test(this.state.date)&&this.state.date.padEnd(4,'*').replace(/(.{2})/ , "$1 / ")  }</p>
                    <h5 className='person-name'>{cardHolder.test(this.state.personName) ? this.state.personName : this.state.personName.slice(0,17)}</h5>
                    <img className='mastercard' src='https://www.mastercard.fr/content/dam/mccom/global/logos/logo-mastercard-mobile.svg' alt='creditcard'></img>
                </div>
                <div className='inputs'>
                    <h5>Persone Name :</h5>
                    <input onChange={this.handleName} name="personName" />
                    <h5>Date :</h5>
                    <input onChange={this.handleName} maxlength='4' name="date" />
                    <h5>Company Name  :</h5>
                    <input onChange={this.handleName} name="companyName" />
                    <h5>Card Number:</h5>
                    <input className="numb"    onChange={this.handleName}  maxlength="16" name="cardNumber" />
                </div>
            </div>



        )
    }
}




export default Card