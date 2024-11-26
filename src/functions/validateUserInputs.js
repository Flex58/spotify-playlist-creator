import userInputs from "../variables/userInputs";

const validateUserInputs = () => {
  if (userInputs.artists.length > 5 || userInputs.artists.length < 0)
    return false;

  if (userInputs.tracks.length > 5 || userInputs.tracks.length < 0)
    return false;

  if (
    userInputs.tracks.length + userInputs.artists.length > 5 ||
    userInputs.tracks.length + userInputs.artists.length < 0
  )
    return false;

  while (userInputs.artists.length < 5) {
    userInputs.artists.push("");
  }

  while (userInputs.tracks.length < 5) {
    userInputs.tracks.push("");
  }
  return true;
};

export default validateUserInputs;
