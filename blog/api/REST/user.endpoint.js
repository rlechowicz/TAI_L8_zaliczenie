'use strict'
import business from '../business/business.container'
import applicationException from "../service/applicationException";

const userEndpoint = (router) => {
  router.post('/api/user/auth', async (request, response, next) => {
    try {
      //let result = await business(request).getUserManager().;
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.post('/api/user/create', async (request, response, next) => {
    try {
      //let result = await business(request).getUserManager().;
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.delete('/api/user/logout', async (request, response, next) => {
    try {
      //let result = await business(request).getUserManager().;
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });
};

export default userEndpoint;
