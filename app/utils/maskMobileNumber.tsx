export function formatPhoneNumber(mobileNumber) {
  // Remove leading zeros if any
  const phoneNumber = mobileNumber.replace(/^0+/, "");

  // Get the last two digits
  const lastTwoDigits = phoneNumber.slice(-2);

  // Format the number with masked middle digits
  const formattedNumber = `+63 *** *** **${lastTwoDigits}`;

  return formattedNumber;
}
