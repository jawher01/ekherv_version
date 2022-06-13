const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CoursSchema = new schema({
  
    content: {
        type: String,
        default: "../cour/default.pdf",
      },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    classe:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"classe"
    }
},
{
    timestamps:true,
}
);

module.exports = mongoose.model("cours", CoursSchema);