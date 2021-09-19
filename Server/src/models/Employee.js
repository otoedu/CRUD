
const { Schema , model } = require("mongoose");

const employeeSchema = new Schema (
  {
    name: { type: String, required: true },
    user: { type: String, required: true },
    mail: { type: String, required: true },
    cell: { type: Number, required: true },
  },
  {
    //fecha de modificacion y quitar el subguion
    versionKey: false,
    timestamps: true,
  }
);

// exportar el modelo o tabla en otra base de datos
module.exports = model("Employee", employeeSchema);