import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const element = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isRole, isLoading] = useRole();
  const { memberPackage, name, _id } = isRole;
  const navigate = useNavigate();
console.log(isLoading);

  useEffect(() => {
    // if(isLoading){
    //     return
    // }

    if (!isLoading) {
      axiosSecure
        .post("/create-payment-intent", { memberPackage })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          console.log(res.data);
          console.log(memberPackage);
        });
    }
  }, []);

  console.log(clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setErrorMessage(error?.message);
    } else {
      console.log("payment method", paymentMethod);
      setErrorMessage("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymas",
            name: user?.displayName || "anonymas",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Hr ${name || "*****"} your payment successfully pay`,
          showConfirmButton: false,
          timer: 1000,
        });

        const updateHrInfo = {
          paymentStatus: paymentIntent.status,
          transactionId: paymentIntent.id,
          hrId: _id,
        };
        axiosSecure.patch("/register-hr", updateHrInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      }
    }
  };
  return (
    <div className="flex items-center justify-center">
      <form
        className=" w-96 border-2 rounded-lg p-10   m-10"
        onSubmit={handleSubmit}
      >
        <CardElement>
          option=
          {{
            styled: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardElement>
        <button
          className="btn mt-5 btn-sm btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Paly
        </button>
        <p className="text-red-500 text-xs font-bold">{errorMessage}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
