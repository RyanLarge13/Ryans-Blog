"use client";
import React from "react";
import { useFormState } from "react-dom";

const initialState = {
 message: ""
};

const FormMessage = ({ serverFunc }) => {
 const [state, formAction] = useFormState(serverFunc, initialState);

 return <p>{state?.message}</p>;
};

export default FormMessage;
