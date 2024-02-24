import { Elements } from "@stripe/react-stripe-js";
import HeaderName from "../../../Component/HeaderName";
import { loadStripe } from "@stripe/stripe-js";
import ChackoutForm from "./ChackoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_payment_key)

const Payment = () => {
    return (
        <div>
            <HeaderName subHeader='pay first' header='payment'></HeaderName>

            <Elements stripe={stripePromise}>

            <ChackoutForm></ChackoutForm>

            </Elements>
        </div>
    );
};

export default Payment;