const classe = require("../models/Classe");
const ObjectID = require("mongoose").Types.ObjectId;



//ajouter un class
exports.PostClasse = async (req, res) => {   
   
            try {
              const newClasse = new classe({ ...req.body });   
            const response = await newClasse.save();
            res.status(200).send({ response: response, message: "classe enregistrer" });
      } catch (error) {
            res.status(400).send({ message: "ne peut pas le sauvegarder" },console.log(error) );
      }
};

    
//GET all classes
exports.GetAllClasse = async (req, res) => {
      try {
            const result = await classe.find().populate("formation").populate("etudiant").populate("proffeseur").populate({
              path: "cours",
              populate: {
                path: "user",
              },
            });
            res.send({ response: result, message: "avoir classe avec succès" });
      } catch (error) {
            res.status(400).send({ message: "ne peut pas obtenir classe" });
            console.log(error)
      }
};

//GET one classe
exports.GetOneClasse = async (req, res) => {
      try {
            const result = await classe.findOne({ _id: req.params.id }).populate("etudiant").populate("proffeseur").populate("formation").populate({
              path: "cours",
              populate: {
                path: "user",
              },
            });
            res.send({ response: result, message: "avoir classe avec succès" });
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de classe avec cet identifiant" });
      }
};

//delete one classe by id
exports.DeleteOneClasse = async (req, res) => {
      try {
            const result = await classe.deleteOne({ _id: req.params.id })
            result
                  ? res.send({ message: "classe supprimé" })
                  : res.send({ message: "il n'y a pas de classe avec cet identifiant" });
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de classe avec cet identifiant" });
      }
};

//update a classe by id
exports.UpdateClasse = async (req, res) => {
      try {
            const result = await classe.updateOne(
                  { _id: req.params.id },
                  { $set: { ...req.body } })
            result.nModified ? 
                  res.send({ message: "classe mis à jour", user: req.body }) :
                  res.send({ message: "classe déjà mis à jour", user: req.body })
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de classe avec cet identifiant" });
            console.log(error)
      }
};

//post etudiant
exports.PostEtudiant = async (req, res) => {
      if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    
      await classe
        .findByIdAndUpdate(
          { _id: req.params.id },
          {
            $addToSet: { etudiant: req.body.id },
          },
          { new: true }
        )
        .then(function (err) {
          if (!err) {
            res.status(200).send("etudiant ajouter avec suucces");
          } else {
            throw err;
          }
        })
        .catch(function (err) {
          console.log(err);
          res.status(400).send(err);
        });
    };
    
    //post remove Etudiant
    exports.RemouveEtudiant = async (req, res) => {
      if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    
      await classe
        .findByIdAndUpdate(
          req.params.id,
          {
            $pull: { etudiant: req.body.id },
          },
          { new: true }
        )
        .then(function (err) {
          if (!err) {
            res.status(200).send("etudiant remouve  avec suucces");
          } else {
            throw err;
          }
        })
        .catch(function (err) {
          console.log(err);
          res.status(400).send(err);
        });
    };


    //post proffeseur
exports.PostProffeseur = async (req, res) => {
      if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    
      await classe
        .findByIdAndUpdate(
          { _id: req.params.id },
          {
            $addToSet: { proffeseur: req.body.id },
          },
          { new: true }
        )
        .then(function (err) {
          if (!err) {
            res.status(200).send("proffeseur ajouter avec suucces");
          } else {
            throw err;
          }
        })
        .catch(function (err) {
          console.log(err);
          res.status(400).send(err);
        });
    };
    
    //post remove Proffeseur
    exports.RemouveProffeseur = async (req, res) => {
      if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    
      await classe
        .findByIdAndUpdate(
          req.params.id,
          {
            $pull: { proffeseur: req.body.id },
          },
          { new: true }
        )
        .then(function (err) {
          if (!err) {
            res.status(200).send("proffeseur remouve  avec suucces");
          } else {
            throw err;
          }
        })
        .catch(function (err) {
          console.log(err);
          res.status(400).send(err);
        });
    };
    
    