import { useState } from "react";

export const newInformation = (dataNewInfo) => {
  const [form, setForm] = useState(dataNewInfo);

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
