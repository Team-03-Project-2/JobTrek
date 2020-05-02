$(document).ready(function () {

    $(".createResumeSubmit").on("click", function (event) {
    //    event.preventDefault();

        console.log("on create")

        let fileName = $("#resumetitle").val();
        let version = $("#resumeversion").val();
        let role = $("#roletitle").val();
        let notes = $("#notesresume").val();
        let date = $("dateresume").val();
        let fileLocation = $("#resumeLink").val();
        
        $.ajax("/api/resume/create",
        {
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
        });
    });


    
    $(".starBtn").on("click", function(event){
      
        let starId = $(this).data("id");
        let starValue = $(this).data("star");
        console.log(starId)
        console.log(starValue)

        $.ajax("/api/resume/update/star", 
        {
            type:"PUT",
            data:{
                starId: starId,
                starValue : starValue
            }
        }).then(function(dbResume){
            location.reload();
        });
    });

    $(".deleteResume").on("click", function(event){
        let delid = $(this).data("delete")
        console.log("del", delid)
       
        $.ajax("/api/resume/delete", {
            type: "DELETE",
            data:{id:delid}
        }).then(function(dbResume){
            location.reload();
        })
    })

    $(".viewResume").on("click", function(e){
        // e.preventDefault();

        let view = $(this).data("view");


        console.log("view", view)
        $.ajax("/api/resume/find/" + view, {
            type: "GET",
        }).then(function(view){
            $("#viewPleaseshow").text(view.id);
            console.log(view)
            
            // location.reload();
        })


    })
});