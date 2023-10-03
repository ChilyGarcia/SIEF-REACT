import { useState } from "react";

export const formHooks = (dataLogIn) => {

    const [form, setForm] = useState(dataLogIn);
    
      const onInputChange = (event) => {
        const {name, value} = event.target;

        console.log(name, value);

        setForm({
            ...form, 
            [name]: value
        })
      }
    
  return {
    form,
    onInputChange
  }
}
