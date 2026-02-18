import React, { useState } from 'react'
import useLoginStore from '../../store/useLoginStore.js'
import countries from '../../utils/countries.js'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers'


// vailidation schema
const loginValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .nullable()
    .notRequired()
    .transform((value, originalValue) => {
      return originalValue.trim() === "" ? null : value;
    })
    .matches(/^\d+$/, "Phone Number must contain only digits"),
  email: yup
    .string()
    .nullable()
    .notRequired()
    .transform((value, originalValue) => {
      return originalValue.trim() === "" ? null : value;
    })
    .email("please enter vailid email")

});




const Login = () => {

const {step,setStep,setUserPhoneData,userPhoneData,resetLoginState} = useLoginStore()
const [phoneNumber,setPhoneNumber] = useState("");
const [selectCountry,setSelectCountry] = useState(countries[0]);
const [otp,setOtp] = useState("", "", "", "", "", "");
const [email,setEmail] = useState("");

  return (
    <div>Login</div>
  )
}

export default Login

