import jwt from 'jsonwebtoken';

const ping = (req, res) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    const decoded = jwt.verify(token, 'shhhhh');

    res.json({
      error: false,
      message: `Hello ${decoded.name}, now your in server 2`
    })
  } catch (error) {
    
  }
}

export default {
  ping
}