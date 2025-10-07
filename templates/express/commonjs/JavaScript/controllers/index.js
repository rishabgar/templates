const appSuccess = require("../utils/appSuccess.js");
const asyncHandler = require("../utils/asyncHandler.js");

const indexController = asyncHandler(async (req, res) => {
  return res.status(200).json(new appSuccess(200, "Success"));
});

module.exports = { indexController };
