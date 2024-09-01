function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      boom.badRequest(error);
    }
    next();
  };
}

module.exports = validatorHandler;
