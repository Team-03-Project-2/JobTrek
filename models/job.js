// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
module.exports = function (sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    user_id: {
      type: DataTypes.INTEGER
    },
    job_title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    requirement: {
      type: DataTypes.TEXT
    },
    location: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.TEXT
    },
    url: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    },
    applied_date: {
      type: DataTypes.DATE
    },
    rejected_date: {
      type: DataTypes.DATE
    },
    responded_date: {
      type: DataTypes.DATE
    },
    interview1_date: {
      type: DataTypes.DATE
    },
    interview2_date: {
      type: DataTypes.DATE
    },
    offerMade_date: {
      type: DataTypes.DATE
    },
    statusChange_date: {
      type: DataTypes.DATE
    },
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  return Job;
}  