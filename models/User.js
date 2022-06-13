const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    nom: {
      required: true,
      type: String,
    },
    prenom: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    role: {
      required: true,
      type: String,
      enum: [
        "modirateur",
        "etudiant",
        "proffeseur",
        "admin superieur",
        "editeur",
      ],
    },
    receipt: {
      type: String,
      default: "http://127.0.0.1:6500/public//default.png",
    },
    adresse: {
      type: String,
    },
    num_tel: {
      type: String,
    },
    niveau_scolaire: {
      type: String,
    },
    salaire: {
      type: String,
    },
    classes:[ {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classe",
    }],
    publication: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "publication",
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
