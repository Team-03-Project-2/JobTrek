// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
module.exports = function (sequelize, DataTypes) {
  var Resume = sequelize.define("Resume", {
    user_id: {
      type: DataTypes.INTEGER
    },
    star:{
      type: DataTypes.BOOLEAN
    },
    fileName: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    },
    role:{
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.BLOB
    }, 
    fileLocation:{
      type: DataTypes.STRING
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  return Resume;
};
