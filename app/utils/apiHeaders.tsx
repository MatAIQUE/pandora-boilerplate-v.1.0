export const apiHeaders = () => {
  return {
    "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
    "x-api-secret": process.env.NEXT_PUBLIC_X_API_SECRET,
    "Content-Type": "application/json",
  };
};
