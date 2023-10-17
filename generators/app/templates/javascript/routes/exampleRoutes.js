const router = require('express').Router();

router.get("/", async (req, res, next) => {
  <% if (complete || standard || twolayers) { %>
    let response = await exampleService.exampleProcedure(req.body);
    if(response.error) {
      next(response.error);
    }
  <% } %>
})
