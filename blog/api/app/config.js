const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://<dbuser>:<dbpassword>@ds155663.mlab.com:55663/baza-tai',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
