'use strict'
import postEndpoint from './post.endpoint'
import userEndpoint from "./user.endpoint";
const routes = (router, config) => {
  postEndpoint(router);
  userEndpoint(router);
};
export default routes;
