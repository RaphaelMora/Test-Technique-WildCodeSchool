const Argos = require("../models/argo");

module.exports.addArgo = (req, res, next) => {
  const newArgo = new Argos({
    name: req.body.name,
  });
  newArgo
    .save()
    .then(() => {
      res.status(201).json({ message: "Argonaute enregistrée !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

module.exports.getAllArgo = (req, res) => {
  Argos.find()
    .then((argo) => res.status(200).json(argo))
    .catch((error) => res.status(400).json({ error }));
};
