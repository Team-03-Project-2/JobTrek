$(document).ready(function () {
  $("#addnewjob").on("click", function(event){
     console.log("works")

      $.ajax("/api/jobboard/resumeselect",{
          type:"GET"

      }).then(function(data){

       data.forEach(element => {
        console.log("element:    ", element)
        let myOption = $("<option>");
        myOption.text(element.fileName)

        $("#modalSelectResume").append(myOption);

       });
    

      })
  })
 

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



$("#updatejobposting").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
   
  // event.preventDefault();
  var recordId = $(this).data("update");

  console.log("update button working", recordId)

  var updatedData = {
    job_title: $("#title_edit").val(),
    describe: $("#jobdescription_edit").val(),
    require: $("#jobrequirement_edit").val(),
    locate: $("#location_edit").val(),
    //status:$("").val()
    note: $("#jobNotes_edit").val(),
    jobUrl: $("#jobUrlEdit").val()
  };


  console.log("is it sending???", updatedData)
  // Send the POST request.
  $.ajax("/api/jobboard/change/" +recordId, {
    type: "PUT",
    data: updatedData
  }).then(function () {
      console.log("updated job");
      // location.reload();
    }
  );
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

  console.log("jobId", jobId)
// TODO
  $.ajax("/api/jobboard/" + jobId,{
    type:"GET",
  }).then(function(dataResponse){
    console.log(dataResponse)

     $("#updatejobposting").attr("data-update",dataResponse.id);


  })
})




