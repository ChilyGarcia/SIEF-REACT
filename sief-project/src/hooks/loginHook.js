import { useState } from "react";

export const loginHook = (dataLogIn) => {
  const [form, setForm] = useState(dataLogIn);

  const onInputChange = (event) => {
    const { name, value } = event.target;

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
