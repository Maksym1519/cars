import { useState } from "react";
import { authApi } from "../../api/auth-api";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { textValidation } from "../../js/text-validation";
import { emailValidation } from "../../js/email-validation";
import { passwordValidation } from "../../js/password-validation";


const Form = () => {
 
  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    passwordError: null
  });

  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameError = textValidation(formData.name);
    const emailError = emailValidation(formData.email)
    const passwordError = passwordValidation(formData.password)

    setErrors({
      nameError,
      emailError,
      passwordError
    })
   
    if (!emailError && !nameError && !passwordError) {
      authApi(formData);
      setFormdata({
        name: "",
        email: "",
        password: "",
      });
     } else {
      console.log('error:',{nameError,emailError,passwordError});
      return;
    }
  };

  return (
    <form className="form" name="authorized" onSubmit={handleSubmit}>
      <h1 className="form__title">List</h1>
      <Input
        label="Введите текст"
        value={formData.name}
        name="name"
        type="text"
        handleChange={handleChange}
        placeholder="name"
        error={errors.nameError}
      />
      <Input
        label="Ввеите email"
        value={formData.email}
        name="email"
        type="email"
        handleChange={handleChange}
        placeholder="email"
        error={errors.emailError}
      />
      <Input
        label="Ввеите пароль"
        value={formData.password}
        name="password"
        type="password"
        handleChange={handleChange}
        placeholder="пароль"
        error={errors.passwordError}
      />

      <Button handleSubmit={handleSubmit}>{"send"}</Button>
    </form>
  );
};
export default Form;
