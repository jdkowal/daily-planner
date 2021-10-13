$(document).ready(function () {

    
    $(".saveBtn").on("click",function(){
        
        // var text = taskClass.val();
        
        //getting the values nearby
        var value = $(this).siblings('.task').val();
        var time = $(this).parent().attr('id');
        //saving to local storage
        localStorage.setItem(time, value);
    })
    
    function changeBackground() {
        var currentTime = moment().hours();
        
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            
            if (blockTime < currentTime) {
                // $(this).removeClass("future");
                // $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                // $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
                
            }
        });
    }
    changeBackground();
    var interval = setInterval(changeBackground, 15000);
    
    $("#8-hour .task").val(localStorage.getItem("8-hour"));
    $("#9-hour .task").val(localStorage.getItem("9-hour"));
    $("#10-hour .task").val(localStorage.getItem("10-hour"));
    $("#11-hour .task").val(localStorage.getItem("11-hour"));
    $("#12-hour .task").val(localStorage.getItem("12-hour"));
    $("#1-hour .task").val(localStorage.getItem("1-hour"));
    $("#2-hour .task").val(localStorage.getItem("2-hour"));
    $("#3-hour .task").val(localStorage.getItem("3-hour"));
    $("#6-hour .task").val(localStorage.getItem("6-hour"));
    $("#7-hour .task").val(localStorage.getItem("7-hour"));
    
    $("#currentDay").text(moment().format("MMM Do, YYYY h:mm"));
});