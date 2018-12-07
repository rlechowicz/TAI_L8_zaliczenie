'use strict'
import postEndpoint from './post.endpoint'
const routes = (router, config) => {
  postEndpoint(router);
};
export default routes;
