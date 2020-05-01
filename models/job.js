// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
module.exports = function (sequelize, DataTypes) {
  var Job_Application = sequelize.define("Job_Application", {
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
    company_id: {
      type: DataTypes.INTEGER
    },
    contact_id: {
      type: DataTypes.INTEGER
    },
    resume_id: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.TEXT
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
    }
  });
  // note: There are only 8 possible values for status:
  // WISHLIST, APPLIED, REJECTED, RESPONDED,
  // INTERVIEW1, INTERVIEW2, OFFER MADE, ACCEPTED
  // ACCEPTED will not be shown. REJECTED is left at the bottom. 
  return Job_Application;
};
