"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";

type PropTypes = {
  serverFunc: () => void;
};

const FormMessage = ({ serverFunc }: PropTypes) => {
  const [state, setState] = useState<{ message: string }>({ message: "" });
  const [formAction] = useFormState(serverFunc, void 0);

  return <p>{state?.message}</p>;
};

export default FormMessage;
