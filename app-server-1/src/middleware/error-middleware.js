import ResponseError from '../utils/response-error.js';

const errorMiddleware = (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {

    res.status(err.status).json({
      error: true,
      message: err.message,
    });
  } else {
    console.log(err);
    res.status(500).json({
      error: true,
      message: 'Internal Server Error'
    });
  }
};

export default errorMiddleware;