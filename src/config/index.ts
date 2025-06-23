export default {
  secret: process.env.APP_SECRET,
  env: process.env.NODE_ENV,
  token: process.env.JWT_SECRET,
  local: process.env.HOST_LOCAL,
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
  }  
};