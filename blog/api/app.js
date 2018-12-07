import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import mongoose from 'mongoose'
import routes from './REST/routes';
import config from './config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}, (error) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log('Connect with database established');
  }
});

process.on('SIGINT', () => {
  mongoose.connection.close(function () {
    console.error('Mongoose default connection disconnected through app termination');
    process.exit(0);
  })
});

routes(app);

app.listen(config.port, () => {
  console.log(`Server is running at ${config.port}`);
});
