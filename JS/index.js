var secondUnits = 9
var secondTens = 5
var minuteUnits = 9
var minuteTens = 5
var hourUnits = 9
var hourTens = 5

function Countdown(){
    if(secondUnits<=0) {
        secondUnits = 9;
        if(secondTens<=0) {
            secondTens = 5;
            if (minuteUnits<=0) {
                minuteUnits = 9;
                if (minuteTens<=0) {
                    minuteTens = 5;
                    if (hourUnits<=0) {
                        hourUnits = 9;
                        if (hourTens<=0) 
                            hourTens = 5;
                        else
                            hourTens--;
                    }
                    else
                        hourUnits--;
                }
                else
                    minuteTens--;
            }
            else
                minuteUnits--; 
        }

        else
            secondTens--;
    }
    else
        secondUnits--;

    secondunits.innerHTML = secondUnits;    
    secondtens.innerHTML = secondTens; 
    minuteunits.innerHTML = minuteUnits; 
    minutetens.innerHTML = minuteTens; 
    hourunits.innerHTML = hourUnits; 
    hourtens.innerHTML = hourTens;

}
setInterval(Countdown,1000);




$(document).ready(function(){
    var a = false;
    $("#popButton").click(function(){
        if (a == false) {
            $("#palette").animate({left:"0%"},350);
            a = true;
        }
        else {
            $("#palette").animate({left:"-13.5%"},350);
            a = false;
        }
    });
});



$("#white").click(function(){
        $("body").css("color","white");
        $("hr").css("border-color","white");
        $(".form-control").css("border-color","white");
        $("a").css("color","white");
        $("#contact-submit").css("color","white");
        $("Button").css("border-color","white");
        $("#popButton").css("color","white");
        $(".partOne-blue").css("color","white");
        $("#colorPalette").css("color","white"); 
});

$("#dark-yellow").click(function(){
        $("body").css("color","rgb(243,156,18)");
        $("hr").css("border-color","rgb(243,156,18)");
        $(".form-control").css("border-color","rgb(243,156,18)");
        $("a").css("color","rgb(243,156,18)");
        $("#contact-submit").css("color","rgb(243,156,18)");
        $("Button").css("border-color","rgb(243,156,18)");
        $("#popButton").css("color","white");
        $(".partOne-blue").css("color","white");
        $("#colorPalette").css("color","white"); 
});

$("#red").click(function(){
        $("body").css("color","rgb(231,76,60)");
        $("hr").css("border-color","rgb(231,76,60)");
        $(".form-control").css("border-color","rgb(231,76,60)");
        $("a").css("color","rgb(231,76,60)");
        $("#contact-submit").css("color","rgb(231,76,60)");
        $("Button").css("border-color","rgb(231,76,60)");
        $("#popButton").css("color","white");
        $(".partOne-blue").css("color","white");
        $("#colorPalette").css("color","white"); 
});

$("#light-green").click(function(){
        $("body").css("color","rgb(46,204,113)");
        $("hr").css("border-color","rgb(46,204,113)");
        $(".form-control").css("border-color","rgb(46,204,113)");
        $("a").css("color","rgb(46,204,113)");
        $("#contact-submit").css("color","rgb(46,204,113)");
        $("Button").css("border-color","rgb(46,204,113)");
        $("#popButton").css("color","white");
        $(".partOne-blue").css("color","white");
        $("#colorPalette").css("color","white"); 
});

$("#dark-green").click(function(){
        $("body").css("color","rgb(22,160,133)");
        $("hr").css("border-color","rgb(22,160,133)");
        $(".form-control").css("border-color","rgb(22,160,133)");
        $("a").css("color","rgb(22,160,133)");
        $("#contact-submit").css("color","rgb(22,160,133)");
        $("Button").css("border-color","rgb(22,160,133)");
        $("#popButton").css("color","white");
        $(".partOne-blue").css("color","white");
        $("#colorPalette").css("color","white"); 
});

$("#blue").click(function(){
        $("body").css("color","rgb(52,152,219)");
        $("hr").css("border-color","rgb(52,152,219)");
        $(".form-control").css("border-color","rgb(52,152,219)");
        $("a").css("color","rgb(52,152,219)");
        $("#contact-submit").css("color","rgb(52,152,219)");
        $("Button").css("border-color","rgb(52,152,219)");
        $("#popButton").css("color","white");
        $(".partOne-blue").css("color","white");
        $("#colorPalette").css("color","white"); 
});

$("#middle-green").click(function(){
        $("body").css("color","rgb(26,188,156)");
        $("hr").css("border-color","rgb(26,188,156)");
        $(".form-control").css("border-color","rgb(26,188,156)");
        $("a").css("color","rgb(26,188,156)");
        $("#contact-submit").css("color","rgb(26,188,156)");
        $("Button").css("border-color","rgb(26,188,156)");
        $("#popButton").css("color","white");
        $(".partOne-blue").css("color","white");
        $("#colorPalette").css("color","white"); 
});

$("#light-yellow").click(function(){
        $("body").css("color","rgb(241,196,15)");
        $("hr").css("border-color","rgb(241,196,15)");
        $(".form-control").css("border-color","rgb(241,196,15)");
        $("a").css("color","rgb(241,196,15)");
        $("#contact-submit").css("color","rgb(241,196,15)");
        $("Button").css("border-color","rgb(241,196,15)");
        $("#popButton").css("color","white");
        $(".partOne-blue").css("color","white");
        $("#colorPalette").css("color","white"); 
});

$("#middle-green").click(function(){
        $("body").css("color","rgb(26,188,156)");
        $("hr").css("border-color","rgb(26,188,156)");
        $(".form-control").css("border-color","rgb(26,188,156)");
        $("a").css("color","rgb(26,188,156)");
        $("#contact-submit").css("color","rgb(26,188,156)");
        $("Button").css("border-color","rgb(26,188,156)");
        $("#popButton").css("color","white");
        $(".partOne-blue").css("color","white");
        $("#colorPalette").css("color","white"); 
});


$("#facebook").mouseover(function(){
    $("#facebook").css("background-color","rgb(59,89,152)");
    $("#facebook").css("border-style","none");
})

$("#facebook").mouseout(function(){
    $("#facebook").css("background-color","transparent");
    $("#facebook").css("border-style","solid");
})

$("#twitter").mouseover(function(){
    $("#twitter").css("background-color","rgb(59,89,152)");
    $("#twitter").css("border-style","none");
})

$("#twitter").mouseout(function(){
    $("#twitter").css("background-color","transparent");
    $("#twitter").css("border-style","solid");
})

$("#linkedin").mouseover(function(){
    $("#linkedin").css("background-color","rgb(59,89,152)");
    $("#linkedin").css("border-style","none");
})

$("#linkedin").mouseout(function(){
    $("#linkedin").css("background-color","transparent");
    $("#linkedin").css("border-style","solid");
})

$("#google").mouseover(function(){
    $("#google").css("background-color","rgb(59,89,152)");
    $("#google").css("border-style","none");
})

$("#google").mouseout(function(){
    $("#google").css("background-color","transparent");
    $("#google").css("border-style","solid");
})

$("#youtube").mouseover(function(){
    $("#youtube").css("background-color","rgb(59,89,152)");
    $("#youtube").css("border-style","none");
})

$("#youtube").mouseout(function(){
    $("#youtube").css("background-color","transparent");
    $("#youtube").css("border-style","solid");
})





$(".movedown-btn1").click(function(){
    $.scrollTo('#partTwo',1000);
});

$(".movedown-btn2").click(function(){
    $.scrollTo('#partThree',1000);
});

$(".movedown-btn3").click(function(){
    $.scrollTo('#partFour',1000);
});

$(".movedown-btn4").click(function(){
    $.scrollTo('#partOne',1000);
});

$("#Home").click(function(){
    $.scrollTo('#partOne',1000);
});

$("#About").click(function(){
    $.scrollTo('#partTwo',1000);
});

$("#Subscribe").click(function(){
    $.scrollTo('#partThree',1000);
});

$("#Contact").click(function(){
    $.scrollTo('#partFour',1000);
});

$("#Home").mouseover(function(){
    $("#Home").animate({"padding-left": "20px"},500);
});

$("#Home").mouseout(function(){
    $("#Home").animate({"padding-left": "0px"},500);
})

$("#About").mouseover(function(){
    $("#About").animate({"padding-left": "20px"},500);
});

$("#About").mouseout(function(){
    $("#About").animate({"padding-left": "0px"},500);
})

$("#Subscribe").mouseover(function(){
    $("#Subscribe").animate({"padding-left": "20px"},500);
});

$("#Subscribe").mouseout(function(){
    $("#Subscribe").animate({"padding-left": "0px"},500);
})

$("#Contact").mouseover(function(){
    $("#Contact").animate({"padding-left": "20px"},500);
});

$("#Contact").mouseout(function(){
    $("#Contact").animate({"padding-left": "0px"},500);
})

$("#personOne").mouseover(function(){
        $("#personOne").css("background","rgb(52,152,219)")
});

$("#personOne").mouseout(function(){
        $("#personOne").css("background","transparent")
});

$("#personTwo").mouseover(function(){
        $("#personTwo").css("background","rgb(52,152,219)")
});

$("#personTwo").mouseout(function(){
        $("#personTwo").css("background","transparent")
});

$("#personThree").mouseover(function(){
        $("#personThree").css("background","rgb(52,152,219)")
});

$("#personThree").mouseout(function(){
        $("#personThree").css("background","transparent")
});





