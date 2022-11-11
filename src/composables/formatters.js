function formatTelephone(inString) {
  // remove all white space and any non-numeric characters
  let newString = inString.replace(/\s+|\D+/g, "");
  // check if phone number includes a leading 1
  if ((newString.length === 11) & /^1/.test(newString)) {
    newString = newString.substring(1);
  }
  return (
    "(" +
    newString.slice(0, 3) +
    ") " +
    newString.slice(3, 6) +
    "-" +
    newString.slice(6, 10)
  );
}

export { formatTelephone };
