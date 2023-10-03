import { useState } from "react";

export const signInHook = (dataSignIn) => {
  const [form, setForm] = useState(dataSignIn);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    onInputChange,
  };
};
