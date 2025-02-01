import dbPool from "../config/db.js";
import bcryptjs from "bcrypt";
import ResponseError from '../utils/response-error.js';

const create = async (request) => {
  try {
    const { name, email, password } = request;

    if (!name || !email || !password) {
      throw new ResponseError(400, "All fields are required.");
    }

    const passwordHash = await bcryptjs.hash(password, 10);
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const [result] = await dbPool.execute(query, [name, email, passwordHash]);

    return { id: result.insertId, name, email };
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") throw new ResponseError(409, "Email already in use");
    throw(error);
  }
}

const login = async (request) => {
  try {
    const {email, password} = request;

    const query = 'SELECT user_id, name, password FROM users WHERE email = ? LIMIT 1';
    const [result] = await dbPool.execute(query, [email]);
  
    if (!result.length) throw new ResponseError(401, "Invalid email or password");
  
    const user = result[0];
    const passwordMatch = await bcryptjs.compare(password, user.password);
  
    if (!passwordMatch) throw new ResponseError(401, "Invalid email or password");
  
    return user;
  } catch (e) {
    throw (e);
  }
}

export default {
  create,
  login
}