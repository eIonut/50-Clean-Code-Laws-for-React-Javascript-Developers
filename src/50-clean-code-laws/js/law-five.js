/* BEFORE
const handleError = (code) => {
  switch (code) {
    case "NOT_FOUND":
      return () => "Error: NOT_FOUND";
    case "UNAUTHORIZED":
      return () => "Error: UNAUTHORIZED";
    case "TIMEOUT":
      return () => "Error: TIMEOUT";
    default:
      return () => "Error: UNKNOWN";
  }
}

console.log(handleError("NOT_FOUND")());   // Error: NOT_FOUND
console.log(handleError("TIMEOUT")());     // Error: TIMEOUT
*/

const ERROR_CODES = {
  NOT_FOUND: "NOT_FOUND",
  UNAUTHORIZED: "UNAUTHORIZED",
  TIMEOUT: "TIMEOUT",
};

const handleError = (code) => {
  switch (code) {
    case ERROR_CODES.NOT_FOUND:
      return () => `Error: ${ERROR_CODES.NOT_FOUND}`;
    case ERROR_CODES.UNAUTHORIZED:
      return () => `Error: ${ERROR_CODES.UNAUTHORIZED}`;
    case ERROR_CODES.TIMEOUT:
      return () => `Error: ${ERROR_CODES.TIMEOUT}`;
    default:
      return () => "Error: UNKNOWN";
  }
};

console.log(handleError(ERROR_CODES.NOT_FOUND)()); // Error: NOT_FOUND
console.log(handleError(ERROR_CODES.TIMEOUT)()); // Error: TIMEOUT
