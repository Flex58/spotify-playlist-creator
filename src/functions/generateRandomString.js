const generateRandomString = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz1234567890";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

export default generateRandomString;
