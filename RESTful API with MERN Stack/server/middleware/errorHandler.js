const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let errorMessage = "Internal Server Error";

  if (err.name === "ValidationError") {
    // Handle validation errors
    statusCode = 400;
    errorMessage = err.message;
  } else if (err.name === "UnauthorizedError") {
    // Handle authorization errors
    statusCode = 401;
    errorMessage = "Unauthorized";
  } else {
    // Handle other errors
  }

  res.status(statusCode).json({ error: errorMessage });
};
export default errorHandler;
