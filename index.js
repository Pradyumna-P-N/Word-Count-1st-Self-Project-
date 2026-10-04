var char = 0;
var digit = 0;
var space = 0;
var word = 0;

function findNumber(){
    char = 0;
    digit = 0;
    space = 0;
    word = 0;
    var content = $("#words").val();
    console.log(content);
    for(var characters = 0 ; characters < content.length ; characters++){
        if(content[characters] === " "){
            space++
        } else if(!isNaN(content[characters])){
            digit++
        } else{
            char++
        }
        if(content[characters] !== " " && (characters === 0 || content[characters - 1] === " ")){
            word++
        }
    }
    var result = [char , digit , space , word]
    return result
}

$("#Enter").click(function(){
    $("textarea").hide();
    $("label").hide();
    $("#Enter").hide();
    findNumber();
    $("#display1").show();
    $("#display2").show();
    $("#display3").show();
    $("#display4").show();
    $("#display1").text("Number of characters = " + char);
    $("#display2").text("Number of digits = " + digit);
    $("#display3").text("Number of spaces = " + space);
    $("#display4").text("Number of words = " + word);
})

$("#Back").click(function(){
    $("textarea").show();
    $("label").show();
    $("#Enter").show();
    $("textarea").val("");
    $("#display1").hide();
    $("#display2").hide();
    $("#display3").hide();
    $("#display4").hide();
})

