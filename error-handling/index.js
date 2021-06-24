module.exports = (app) => {
  app.use(
    (req, res, next) => res.status(404).json({ error: "This route does not exist" })
  );

  app.use(
    (err, req, res, next) => {
      console.error("ERROR", req.method, req.path, err);
      // Only render if the error ocurred before sending response
      if (!res.headersSent) {
        res.status(500).json({ error: "Internal server error. Check the server console" });
      }
    }
  );
}