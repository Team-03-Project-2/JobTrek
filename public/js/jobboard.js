$(document).ready(function () {
  // $(".addnewjob").on("click", function(event){
  //    // console.log("works")
  //     $.ajax("/api/jobboard/company",{
  //         type:"GET"

  //     }).then(function(data){
  //         $.ajax("/api/jobboard/resume",{
  //             type:"GET"

  //         }).then(function(data){
  //     //console.log(resume)
  //         })


  //     })
  // })
  // })

  $(".createJobSubmit").on("click", function (event) {
    //    event.preventDefault();
    console.log("add button listens")
    var jobData = {
      job_title: $("#title").val(),
      describe: $("#jobdescription").val(),
      require: $("#jobrequirement").val(),
      locate: $("#location").val(),
      status: $("#newjobstatus").val(),
      //status:$("").val()
      note: $("#jobNotes").val(),
      jobUrl: $("#jobUrl").val()
    }
    console.log(jobData)
    $.ajax("/api/jobboard",
      {
        type: "POST",
        data: jobData
      }).then(function () {
        //location.reload();
      });
  });

})



$(".updatejobbtn").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  // event.preventDefault();
  
  var recordId = $(this).data("update");
  console.log("update button working", recordId)

  var updatedData = {
    job_title: $("#title").val(),
    describe: $("#jobdescription").val(),
    require: $("#jobrequirement").val(),
    locate: $("#location").val(),
    //status:$("").val()
    note: $("#jobNotes").val(),
    jobUrl: $("#jobUrl").val()
  };



  // Send the POST request.
  // $.ajax("/api/jobboard/" +recordId, {
  //   type: "PUT",
  //   data: updatedData
  // }).then(function () {
  //     console.log("updated job");
  //     // Reload the page to get the updated list
  //     // location.assign("/members/jobboard");
  //   }
  // );
});

//delete button is working but nothing seems to be getting deleted.

$(".deleteJob").on('click', function (event) {


  var id = $(this).data("delete");
  // var userid = $(this).data("userid")

  console.log(id)
  // This is the client's way of sending the DELETE request to the server.
  $.ajax("/api/jobboard", {
    type: "DELETE",
    data: {
      jobId: id
    }
  }).then(
    function () {
      console.log("deleted id");
      // Reload the page to get the updated column
      location.reload();
    }
  );
});


$(".updateonejob").on("click", function(event){

  var jobId = $(this).data("id")
// TODO
  $.ajax().then(function(){})


})




