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
        
        var jobData = {
         job_title:$("#title").val(),
         describe:$("#jobdescription").val(),
         require:$("#jobrequirement").val(),
         locate:$("#location").val(),
         //status:$("").val()
        note: $("#jobNotes").val(),
         jobUrl:$("#jobUrl").val()
        }
        console.log(jobData)
        $.ajax("/api/jobboard",
            {
                type: "POST",
                data: jobData
            }).then(function () {
                location.reload();
            });
    });

})

$(".delJob").on("click", function (event) {
    var id = $(this).data("id");

    // This is the client's way of sending the DELETE request to the server.
    $.ajax("/api/jobboard/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });




