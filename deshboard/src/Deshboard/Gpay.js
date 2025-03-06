import React from 'react';
import GooglePayButton from '@google-pay/button-react';

const Gpay = () => {
    return (
        <div className="App">
            <h1>Google Pay</h1>
            <GooglePayButton
                environment="TEST" // Change to "PRODUCTION" when you're ready for live
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example', // Replace with your payment gateway
                                    gatewayMerchantId: 'exampleGatewayMerchantId', // Replace with your merchant ID
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: 'your-merchant-id', // Replace with your merchant ID
                        merchantName: 'Your Merchant Name',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '10', // The price of the item
                        currencyCode: 'INR',
                        countryCode: 'IN',
                    },
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('Success', paymentRequest);
                    // Handle payment success here
                }}
                onError={err => {
                    console.error('Error', err);
                    // Handle payment errors here
                }}
            />
        </div>
    );
};

export default Gpay;
