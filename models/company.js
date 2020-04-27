// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
module.exports = function (sequelize, DataTypes) {
  var Company = sequelize.define("Company", {

    // (CompanyTable
    // id
    // company 
    // Notes
    // rating )

    // The email cannot be null, and must be a proper email before creation
    user_id: {
      type: DataTypes.INTEGER
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // The password cannot be null
    notes: {
      type: DataTypes.TEXT
    },
    rating: {
      type: DataTypes.INTEGER
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  return Company;
};
