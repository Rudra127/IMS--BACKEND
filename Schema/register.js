import mongoose from "mongoose";
// here we have to add the deptartment number as we make them such as our dept number will be 07(computer).
const validDepartments = ['Dept1', 'Dept2', 'Dept3'];
const userSchema =  new mongoose.Schema({
  //dept, designation, number, username, 
  
  empId: {
    type: Number,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  dept: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validDepartments.includes(value);
      },
      message: 'Invalid department',
    },
  },
  designation: {
    type: String,
  },
  mNumber: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPass: {
    type: String,
    required: true,
  },

});
const registerUsers = mongoose.model('RegisterUsers', userSchema);

export default registerUsers;