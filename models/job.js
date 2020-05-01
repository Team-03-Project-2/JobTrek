// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
module.exports = function (sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    // JobTitle
    // rating
    // description
    // requirements 
    // City/ State / Country ? /Location? (verify with mapbox API?)
    // Company_id
    //       (salary ? Benefits ? Perks ? Other ?)
    // recruiterID(peopleID)
    // resumeID(ref ResumeTable)
    // status(ref StatusTable)
    // comments  
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
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  return Job;
};
// add association

// module.exports = function (sequelize, DataTypes) {
//   var Job = sequelize.define("Job", {
//     // JobTitle
//     // rating
//     // description
//     // requirements 
//     // City/ State / Country ? /Location? (verify with mapbox API?)
//     // Company_id
//     //       (salary ? Benefits ? Perks ? Other ?)
//     // recruiterID(peopleID)
//     // resumeID(ref ResumeTable)
//     // status(ref StatusTable)
//     // comments  
//     user_id: {
//       type: DataTypes.INTEGER
//     },
//     job_title: {
//       type: DataTypes.STRING
//     },
//     description: {
//       type: DataTypes.TEXT
//     },
//     requirement: {
//       type: DataTypes.TEXT
//     },
//     location: {
//       type: DataTypes.STRING
//     },
//     company_id: {
//       type: DataTypes.INTEGER
//     },
//     contact_id: {
//       type: DataTypes.INTEGER
//     },
//     resume_id: {
//       type: DataTypes.INTEGER
//     },
//     status: {
//       type: DataTypes.STRING
//     },
//     notes: {
//       type: DataTypes.TEXT
//     },
//     url: {
//       type: DataTypes.STRING
//     }
//   });
//   // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
//   return Job;
// };
// // add association
