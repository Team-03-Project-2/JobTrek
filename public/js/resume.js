$(document).ready(function () {

    $(".createResumeSubmit").on("click", function (event) {
       event.preventDefault();

        console.log("on create")

        let fileName = $("#resumetitle").val();
        let version = $("#resumeversion").val();
        let role = $("#roletitle").val();
        let notes = $("#notesresume").val();
        let date = $("dateresume").val();
        let fileLocation = $("#resumeLink").val();
        
        $.ajax("/api/resume/create",{
            type: "POST",
            data:{
                fileName:fileName,
                version: version,
                role:role,
                note: notes,
                fileLocation: fileLocation,
                date: date
            }
        }).then(function(){
            location.reload();
        })
    })


    
    $(".starBtn").on("click", function(event){
      
        let starId = $(this).data("id");

        console.log(starId)

    })


})