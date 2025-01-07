export const textValidation = (value) => {
  let error = null;
  if (value === "") {
    error = "Поле не может быть пустым";
  }
  return error;
};
