import CreditCardInput from 'react';
import React from 'react';
//,CreditCardFullForm,CreditCardFormNPayViaEmail


<CreditCardInput cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
    <input
      {...props}
      onChange={handleCardCVCChange(e => console.log('cvc change', e))}
    />
  )}
  cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
    <input
      {...props}
      onChange={handleCardExpiryChange(e =>
        console.log('expiry change', e)
      )}
    />
  )}
  cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
    <input
      {...props}
      onChange={handleCardNumberChange(e =>
        console.log('number change', e)
      )}
    />
  )}
/>


export default CreditCardInput;


