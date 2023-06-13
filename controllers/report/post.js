const reportSchema = require("../../models/reportSchema");

module.exports = async (req, res) => {
  try {
    await reportSchema
      .create(req.body)
      .then((data) => res.json({ code: 200, status: "success", data }));
  } catch (error) {
    res.status(500).send(error);
  }
};
