export const handleInputErrors = (
  response: any,
  setError: (
    key: string,
    { type, message }: { type: string; message: string }
  ) => void
) => {
  if (response.error) {
    Object.keys(response.error).forEach((key: string) => {
      if (response.error[key]?.message) {
        setError(key, {
          type: "custom",
          message: response.error[key]?.message,
        });
      } else {
        setError(key, { type: "custom", message: response.error[key] });
      }
    });
  }
};
