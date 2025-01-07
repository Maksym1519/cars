export const passwordValidation = (value) => {
    let error = null;
    if (value === "") {
      error = "Поле обязательно для заполнения";
    }
    return error;
  };
  