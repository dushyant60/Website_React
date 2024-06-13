import React from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
 
function MyForm() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const phoneNumber = watch("mobileNumber");
 
  const onSubmit = data => {
    // Perform validation checks before submitting the form
    if (!phoneNumber) {
      alert("Please enter a phone number");
      return;
    }
 
    // Extract the number part from the phoneNumber value and remove spaces
    const number = phoneNumber.replace(/\s/g, '');
 
    // Check if the phone number length is within the desired range
    if (number.length < 12 || number.length > 16) {
      alert("Please enter a valid mobile number");
      return;
    }
 
    // If all validation checks pass, submit the form
    console.log(data);
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
 
      <div>
        <label>Mobile Number:</label>
        <PhoneInput
        countryCodeEditable={false}
          value={phoneNumber}
          country={"in"}
          onChange={(value) => setValue('mobileNumber', value)}
          inputProps={{
            name: 'mobileNumber',
            required: true,
            autoFocus: true
          }}
        />
        {/* Display error only if phone number is touched and not valid */}
        {errors.mobileNumber && (
          <span>Please enter a valid mobile number</span>
        )}
      </div>
 
      <button type="submit">Submit</button>
    </form>
  );
}
 
export default MyForm;