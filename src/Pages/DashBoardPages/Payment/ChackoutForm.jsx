import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Axios from "../../../hooks/Axios";
import Usecart from "../../../hooks/Usecart";
import UseAuthContext from "../../../hooks/AuthLoad";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";

const ChackoutForm = () => {
    const navigate = useNavigate()
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('')
    const [error, setError] = useState('')
    const stripe = useStripe()
    const {user} = UseAuthContext()
    const elements = useElements()
    const axios = Axios()
    const [cart,refetch] = Usecart()
    // console.log(cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    // console.log(totalPrice);

    useEffect(() => {
      if(totalPrice> 0){
        axios.post('/create-payment-intent', {price:totalPrice})
        .then(res => {
            setClientSecret(res.data.clientSecret)
            // console.log('checkOut',res.data)
        })
      }
    }, [axios, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: card
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // confirm payment 
        const {paymentIntent, error : paymentIntentError} = await stripe.confirmCardPayment(
            clientSecret,{
                payment_method:{
                    card: card,
                    billing_details: {
                        email: user.email || 'annonymous',
                        name: user.displayName || 'annonymous'
                    
                      },
                }
            }
        )
        if(paymentIntentError){
            console.log("paymentIntentError",paymentIntentError);
        }else{
            console.log("paymentIntent", paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('payment success', paymentIntent.id);
                setTransactionId(paymentIntent.id)
                
                // now save the payment to database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId:paymentIntent.id,
                    date: new Date (),
                    cartIds : cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }
                const res = await axios.post('payments', payment)
                console.log('payment',res.data);
                refetch()
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        title: "Good job!",
                        text: "Your payment done",
                        icon: "success"
                      });
                     navigate('/dashbord/paymentHistory')
                }
                
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p>{error}</p>
            {
            transactionId && <p className="text-green-600"> Your transactionId is {transactionId}</p>}
        </form>
    );
};

export default ChackoutForm;