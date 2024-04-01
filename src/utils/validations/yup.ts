import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "This field is required",
  },
  string: {
    email: "Invalid email address",
  },
});

// @ts-ignore
yup.addMethod(yup.string, "isSecurePassword", function (errorMessage : string) {
  return this.test(`isSecurePassword`, errorMessage, function (value) {
    const { path, createError } = this;

    if (value) {
      const regex = new RegExp(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,32}$/
      );
      if (!regex.test(value)) {
        return createError({
          path,
          message:
            errorMessage ??
            "The password should be 8–32 alphanumeric characters with 1 special character.",
        });
      }
      return true;
    }
  });
});

export default yup;
