 /*!
 * Author: Jasmine Lee
 * Date: Jul 9 2014
 * Description:
 *      This file should be included in the form pages
 !**/

 // This script is responsible for lots of shit. 


function percent(num){
    return num/100;
}

function calculate() {

    var companyName = $('companyName').val();
    $('companyName').val(companyName);

    // Retrieve value from the amount field
    var B14 = parseFloat($('#B14').val().replace(/,/g,'')); //turn B14 from a string w/ commas to a number 
    console.log("poop: " +B14);
    // Store the value in the total field. Note that the 'Number' 
    // function converts a string of numbers into numbers

    $('#B14').val( B14 ); //.toFixed(2) );
    // toFixed ensures there are only two digits after the dec point


    var B16 = $('#B16').val();
    var B17 = B14 / percent( Number(B16) );
    $('#B17').val( B17.toLocaleString() );


    //var B20 = $('#B20').val();
    //var B21 = $('#B21').val();
    var B20= 1;
    $('#B20').val(B20);
    var B21 = 99;
    $('#B21').val(B21);


    var B23 = B17 * percent( Number(B20) );
    var B24 = B17 * percent( Number(B21) );
    var B25 = B23 + B24;

    $('#B23').val( B23.toLocaleString() );
    $('#B24').val( B24.toLocaleString() );
    $('#B25').val( B25.toLocaleString() );

    var B27 = B16;

    var B28 = $('#B28').val(); 
    $('#B28').val(B28);


    // the following function rounds our percentage down to 2 decimal places
    function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
    }

    var B29 = round( B27 * (1 + percent( Number(B28) ) ), 2);
    $('#B27').val( B27 );
    $('#B29').val( B29) ;


    var B31 = B23 * percent( B27 );
    var B32 = B24 * percent( B29 );

    $('#B31').val( B31.toLocaleString() );
    $('#B32').val( B32.toLocaleString() );

    var B34 = B25 * percent( B27 );
    var B35 = B25 * percent( B29 );

    $('#B34').val( B34.toLocaleString() );
    $('#B35').val( B35.toLocaleString() );

    var B37 = B35 - B34;
    var B38 = B32 - (B34 - B31);

    $('#B37').val( B37.toLocaleString() );
    $('#B38').val( B38.toLocaleString() );


    // var B40 = $('#B40').val();
    //if user input a CPC value, use that value in the calculation. else, use default value of half a penny
    if ($('#B40').val()) {
        B40 = $('#B40').val();
        console.log("Used user's CPC value");
    } else {
        B40 =  0.005;
        console.log("CPC default value of $0.005 used");
    }

    $('#B40').val(B40);

    var B42 = Number(B40) * B38; 
    $('#B42').val( B42.toLocaleString() );

    var B46 = B38
    var B47 = $('#B47').val();
    var B48 = $('#B48').val();
    var B49 = $('#B49').val();
    var B50 = (B46 * Number(B47) / 1000 * percent( Number(B48) ) *  Number(B49) ).toLocaleString();
    $('#B46').val( B46.toLocaleString() );
    $('#B50').val( B50.toLocaleString() );

    var B54 = parseFloat(B50.replace(/,/g,'')); //turn B50 from a string to a number
    var B55 = B42;

    var B56 = B54 - B55;

    var B58 = (B55/B54) * 100; 

    var B59 = (B56/B54) * 100;

    $('#B54').val( B54.toLocaleString() );
    $('#B55').val( B55.toLocaleString() );
    $('#B56').val( B56.toLocaleString() );
    $('#B58').val(B58);
    $('#B59').val(B59);

    //scrollTop 
    if (i == 0){
        $("html,body").animate({ scrollTop: 0}, 600);
        i++;
    } else {
        //don't scroll
    }

    //Unhide Shit
    // hide this bc David doesn't want to see it    $('#B17_CONTAINER').show(); 
    $('#B23_CONTAINER').show();
    $('#B24_CONTAINER').hide();
    $('#B25_CONTAINER').show();
    $('#B27_CONTAINER').show();
    $('#B29_CONTAINER').show();
    $('#B31_CONTAINER').show();
    $('#B32_CONTAINER').show();
    $('#B34_CONTAINER').show();
    $('#B35_CONTAINER').show();
    $('#B37_CONTAINER').show();
    $('#B38_CONTAINER').show();
    $('#B40_CONTAINER').show();
    $('#B42_CONTAINER').show();
    $('#B46_CONTAINER').show();
    $('#B50_CONTAINER').show();
    $('#B54_CONTAINER').show();
    $('#B55_CONTAINER').show();
    $('#B56_CONTAINER').show();
    $('#B58_CONTAINER').show();
    $('#B59_CONTAINER').show();
    $('#economicSummary').show();
    $('#submit_Box3').hide(); 
    $('#saveBox1').show();
    $('#saveBox2').show();
    $('#saveBox3').show();
    $('#box1-footer').show();
    $('#rightSidebar').show();

    //hides the collapse button on the top right corner of each widget.
    //$('#collapseWrapper').show();
    $('#collapse').show();

    // Hides the initial form before submission 
    $('#publisherAssumptions').hide();


    //the following scripts fades in the various sections when a user clicks on the Reveal sidebar
    $('#publisherAssumptionsLink').click(function() {
         $('#publisherAssumptions').fadeIn("slow", function(){
        });
    });  

    $('#servedLink').click(function() {
        $('#served').fadeIn("slow", function(){
        });
    });  

    $('#clicksLink').click(function() {
         $('#clicks').fadeIn("slow", function(){
        });
    });  

    $('#incrementalLink').click(function() {
        $('#incremental').fadeIn("slow", function(){
        });
    });  


    //submit event function returns false in order to tell browser not to reload page
    return false;
}



var i =0; //counter to stop scrolling to top after first submission of #main_form
$('#main_form').submit( calculate );



// Hide Shit
$(document).ready(function(){
    $('#B17_CONTAINER').hide();
    $('#B23_CONTAINER').hide();
    $('#B24_CONTAINER').hide();
    $('#B25_CONTAINER').hide();
    $('#B27_CONTAINER').hide();
    $('#B29_CONTAINER').hide();
    $('#B31_CONTAINER').hide();
    $('#B32_CONTAINER').hide();
    $('#B34_CONTAINER').hide();
    $('#B35_CONTAINER').hide();
    $('#B37_CONTAINER').hide();
    $('#B38_CONTAINER').hide();
    $('#B40_CONTAINER').hide();
    $('#B42_CONTAINER').hide();
    $('#B46_CONTAINER').hide();
    $('#B50_CONTAINER').hide();
    $('#B54_CONTAINER').hide();
    $('#B55_CONTAINER').hide();
    $('#B56_CONTAINER').hide();
    $('#B58_CONTAINER').hide();
    $('#B59_CONTAINER').hide();
    $('#economicSummary').hide();
    $('#served').hide();
    $('#saveBox1').hide();
    $('#saveBox2').hide();
    $('#saveBox3').hide();
    $('#box1-footer').hide();
    $('#saveSuccessful').hide();
    $('#saveSuccessful2').hide();
    $('#saveSuccessful3').hide();
    $('#collapse').hide();
    $('#rightSidebar').hide();
    $('#byComparison').hide();
    //$('#collapseWrapper').hide();

    $('#served').hide();
    $('#clicks').hide();
    $('#incremental').hide();


});

// inserts commas into B14, aka "Video streams that Neon could influence per month"
// The key is to use 'onkeyup'
function format(input)
{
    var nStr = input.value + '';
    nStr = nStr.replace( /\,/g, "");
    var x = nStr.split( '.' );
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while ( rgx.test(x1) ) {
        x1 = x1.replace( rgx, '$1' + ',' + '$2' );
    }
    input.value = x1 + x2;
}

var newPushRef;
var myDataRef;
var companyRef; // for the "data" child and url 

$('#main_form').submit(function () {

    var companyName = $('#companyName').val();
    console.log(companyName);
    myDataRef = new Firebase("https://neonpricing.firebaseio.com/"+ companyName);
//    newPushRef = myDataRef.push(); //push adds to a list of data. generates a unique ID 
    companyRef = myDataRef.child("data");

    companyRef.set({
    companyName: $('#companyName').val(),
    B14: $('#B14').val(),
    B16: $('#B16').val(),
    B17: $('#B17').val(),
    B20: 1,
    B21: 99,
    B23: $('#B23').val(),
    B24: $('#B24').val(),
    B25: $('#B25').val(),
    B27: $('#B27').val(),
    B29: $('#B29').val(),
    B31: $('#B31').val(),
    B32: $('#B32').val(),
    B34: $('#B34').val(),
    B35: $('#B35').val(),
    B37: $('#B37').val(),
    B38: $('#B38').val(),
    B42: $('#B42').val(),
    B46: $('#B46').val(),
    B50: $('#B50').val(),
    B54: $('#B54').val(),
    B55: $('#B55').val(),
    B56: $('#B56').val(),
    B58: $('#B58').val(),
    B59: $('#B59').val(),
    });    

})



var pushedMyDataRef =  companyRef; //what do I .set()? pushedMyDataRef or newPushRef? 

$('#saveBox1').click(function (){
    console.log("whuu");
     pushedMyDataRef.set({
    

        B14: $('#B14').val(),
        B16: $('#B16').val(),
        B17: $('#B17').val(),
        });

        $('#saveSuccessful').fadeIn(500).delay(2000).fadeOut(1000);
})

$('#saveBox2').click(function (){
    console.log("whuu");
     pushedMyDataRef.set({
        B20: 1,
        B21: 99,
        B23: $('#B23').val(),
        B24: $('#B24').val(),
        B25: $('#B25').val(),
        B27: $('#B27').val(),
        B28: $('#B28').val(),
        B29: $('#B29').val(),
        B31: $('#B31').val(),
        B32: $('#B32').val(),
        B34: $('#B34').val(),
        B35: $('#B35').val(),
        B37: $('#B37').val(),
        B38: $('#B38').val(),
        B42: $('#B42').val(),
        });

        $('#saveSuccessful2').fadeIn(500).delay(1500).fadeOut(1000);
})

$('#saveBox3').click(function (){
    console.log("whuu");
     pushedMyDataRef.set({
        B46: $('#B46').val(),
        B47: $('#B47').val(),
        B48: $('#B48').val(),
        B49: $('#B49').val(),
        B50: $('#B50').val(),
        });

        $('#saveSuccessful3').fadeIn(500).delay(2000).fadeOut(1000);
})



