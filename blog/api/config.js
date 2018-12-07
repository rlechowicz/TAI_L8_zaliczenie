const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tai:Test2test@ds119734.mlab.com:19734/tai_database',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
