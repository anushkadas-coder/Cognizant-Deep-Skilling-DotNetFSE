$(document).ready(function() {
    // Ex 1: Console Log
    console.log($("#title").text());

    // Ex 2: Selecting & Hiding
    $("#hideBtn").click(function() { $(".box").hide(); });

    // Ex 3: Methods & Chaining
    $(".box").click(function() {
        $(this).fadeOut(500).delay(1000).fadeIn(500);
    });

    // Ex 4: DOM Manipulation
    $("#addBtn").click(function() {
        let val = $("#userInput").val();
        $("#list").append("<li>" + val + "</li>");
    });

    // Ex 5: Event Handlers
    $("#colorBtn").click(function() { $("#colorBox").css("background", "red"); });
    $("#colorBox").dblclick(function() { $(this).css("background", "white"); });

    // Ex 6: Mouse/Keyboard Events
    $(document).keypress(function(e) {
        console.log("Key pressed: " + e.key);
    });
});