
$("#addnewjob").on("click", function(event){
    
    $.ajax("/api/jobboard/company",{
        type:"GET"

    }).then(function(data){

    })



})