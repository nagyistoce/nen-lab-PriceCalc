 /*!
 * Author: Jasmine Lee
 * Date: August 2014
 * Description: 
 *      this script is responsible for taking in a user's input, calculating the output, displaying
 *      the output, showing/hiding divs, and saving all the values to the FirebaseDB. 
 *      
 !**/



 function percent(num){
    return num/100;
}

function calculate() {

    var companyName = $('companyName').val();
    $('companyName').val(companyName);

    // Retrieve value from the amount field using .val()
    //turn videoStreamsNeonCouldInfluencePerMo from a string w/ commas to a number that can be calculated bc a string can't be calculated
    var videoStreamsNeonCouldInfluencePerMo = parseFloat($('#videoStreamsNeonCouldInfluencePerMo').val().replace(/,/g,'')); 
    // toLocaleString() puts commas into long numbers to improve readability
    $('#videoStreamsNeonCouldInfluencePerMo').val( videoStreamsNeonCouldInfluencePerMo.toLocaleString() ); 

    var publisherClickRate = $('#publisherClickRate').val();

    //Number() function converts a string of numbers into numbers
    var potentialThumbnailsNeonWouldServe = videoStreamsNeonCouldInfluencePerMo / percent( Number(publisherClickRate) );
    $('#potentialThumbnailsNeonWouldServe').val( potentialThumbnailsNeonWouldServe.toLocaleString() );


    var thumbnailViewsWhereNeonServesPublisherSuppliedThumbnails= 1;
    $('#thumbnailViewsWhereNeonServesPublisherSuppliedThumbnails').val(thumbnailViewsWhereNeonServesPublisherSuppliedThumbnails);
    var thumbnailViewsWhereNeonServesDefaultThumbnails = 99;
    $('#thumbnailViewsWhereNeonServesDefaultThumbnails').val(thumbnailViewsWhereNeonServesDefaultThumbnails);


    var publisherSuppliedThumbnailViews = potentialThumbnailsNeonWouldServe * percent( Number(thumbnailViewsWhereNeonServesPublisherSuppliedThumbnails) );
    var neonThumbnailViews = potentialThumbnailsNeonWouldServe * percent( Number(thumbnailViewsWhereNeonServesDefaultThumbnails) );
    var totalThumbnailViews = publisherSuppliedThumbnailViews + neonThumbnailViews;

    $('#publisherSuppliedThumbnailViews').val( publisherSuppliedThumbnailViews.toLocaleString() );
    $('#neonThumbnailViews').val( neonThumbnailViews.toLocaleString() );
    $('#totalThumbnailViews').val( totalThumbnailViews.toLocaleString() );

    var defaultClickRate = publisherClickRate;

    var neonLiftRate = $('#neonLiftRate').val(); 
    $('#neonLiftRate').val(neonLiftRate);


    // round() rounds our percentage down to 2 decimal places
    function round(num, places) {
        var multiplier = Math.pow(10, places);
        return Math.round(num * multiplier) / multiplier;
    }

    var neonClickRate = round( defaultClickRate * (1 + percent( Number(neonLiftRate) ) ), 2);
    $('#defaultClickRate').val( defaultClickRate );
    $('#neonClickRate').val( neonClickRate) ;


    var publisherViewsxpublisherClickRate = publisherSuppliedThumbnailViews * percent( defaultClickRate );
    var neonViewsxNeonClickRate = neonThumbnailViews * percent( neonClickRate );

    $('#publisherViewsxpublisherClickRate').val( publisherViewsxpublisherClickRate.toLocaleString() );
    $('#neonViewsxNeonClickRate').val( neonViewsxNeonClickRate.toLocaleString() );

    var withoutNeon = totalThumbnailViews * percent( defaultClickRate );
    var withNeon = totalThumbnailViews * percent( neonClickRate );

    $('#withoutNeon').val( withoutNeon.toLocaleString() );
    $('#withNeon').val( withNeon.toLocaleString() );

    var netNewClicksOn99Traffic = withNeon - withoutNeon;
    var actualIncrementalClicks = neonViewsxNeonClickRate - (withoutNeon - publisherViewsxpublisherClickRate);

    $('#netNewClicksOn99Traffic').val( netNewClicksOn99Traffic.toLocaleString() );
    $('#actualIncrementalClicks').val( actualIncrementalClicks.toLocaleString() );


    //if user inputs a CPC value, use that value in the calculation. else, use default value of half a penny
    if ($('#CPCforIncrementalClicks').val()) {
        CPCforIncrementalClicks = $('#CPCforIncrementalClicks').val();
        console.log("Used user's CPC value");
    } else {
        CPCforIncrementalClicks =  0.005;
        console.log("CPC default value of $0.005 used");
    }

    $('#CPCforIncrementalClicks').val(CPCforIncrementalClicks);

    var neonFeePerMo = Number(CPCforIncrementalClicks) * actualIncrementalClicks; 
    $('#neonFeePerMo').val( neonFeePerMo.toLocaleString() );

    var actualIncrementalClicks = actualIncrementalClicks
    var CPM = $('#CPM').val();
    var sellThroughRate = $('#sellThroughRate').val();
    var avgPrerollsPerStream = $('#avgPrerollsPerStream').val();
    var estimatedPotentialIncrementalRevenue = (actualIncrementalClicks * Number(CPM) / 1000 * percent( Number(sellThroughRate) ) *  Number(avgPrerollsPerStream) ).toLocaleString();
    $('#actualIncrementalClicks').val( actualIncrementalClicks.toLocaleString() );
    $('#estimatedPotentialIncrementalRevenue').val( estimatedPotentialIncrementalRevenue.toLocaleString() );

    var potentialIncrementalRevenue = parseFloat(estimatedPotentialIncrementalRevenue.replace(/,/g,'')); //turn estimatedPotentialIncrementalRevenue from a string to a number
    var neonFee = neonFeePerMo;

    var neonIncrementalRevenue = potentialIncrementalRevenue - neonFee;

    var percentEstimatedPotentialRevenueforNeon = (neonFee/potentialIncrementalRevenue) * 100; 

    var percentEstimatedPotentialRevenueforCustomer = (neonIncrementalRevenue/potentialIncrementalRevenue) * 100;

    $('#potentialIncrementalRevenue').val( potentialIncrementalRevenue.toLocaleString() );
    $('#neonFee').val( neonFee.toLocaleString() );
    $('#neonIncrementalRevenue').val( neonIncrementalRevenue.toLocaleString() );
    $('#percentEstimatedPotentialRevenueforNeon').val(percentEstimatedPotentialRevenueforNeon);
    $('#percentEstimatedPotentialRevenueforCustomer').val(percentEstimatedPotentialRevenueforCustomer);

    //Unide form values after submission
    $('#economicSummary').show();
    $('#submit_Box3').hide(); 
    
    $('#rightSidebar').show();

    //hides the collapse button on the top right corner of each widget.
    //$('#collapseWrapper').show();
    $('#collapse').show();

    // Hides the initial Public Assumptions form before submission 
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

    //this code block gets the .json file for the form just generated. Note: creating a new form 
    // of the same company name will overwrite that company's data in the FirebaseDB
    var companyName = $('#companyName').val();
    $('#json').click(function(){
        window.open('https://neonpricing.firebaseio.com/'+companyName+'.json','_blank');
    });

    //submit event function returns false in order to tell browser not to reload page
    return false;
}


$('#main_form').submit( calculate );



// This function hides all the parts of the form we don't want to see before the user submits
$(document).ready(function(){

    $("#potentialThumbnailsNeonWouldServe_CONTAINER").hide();
    $('#economicSummary').hide();
    $('#served').hide();
    $('#collapse').hide();
    $('#rightSidebar').hide();
    $('#byComparison').hide();

    $('#served').hide();
    $('#clicks').hide();
    $('#incremental').hide();


});

// format () inserts commas into videoStreamsNeonCouldInfluencePerMo(Video streams that Neon could influence per month)
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

// global variables to keep track of my FirebaseDB references
// read up on docs here https://www.firebase.com/docs/web/guide/
var newPushRef;
var myDataRef;
var companyRef; // for the "data" child and url 

$('#main_form').submit(function () {

    //Each form has a unique ID, it's company name. All entries in FirebaseDB are listed by companyName.
    var companyName = $('#companyName').val();

    //creates new entry in FirebaseDB
    myDataRef = new Firebase("https://neonpricing.firebaseio.com/"+ companyName); 

    //The following lines save all the form information underneath 'data'. File structure: 'companyName' > 'data' > values

    //Each videoStreamsNeonCouldInfluencePerMo, publisherClickRate, is a variable that matches the row/column in Jay's original excel sheet (v140620)
    
    companyRef = myDataRef.child("data");
    companyRef.set({
        
        companyName: $('#companyName').val(),
        videoStreamsNeonCouldInfluencePerMo: $('#videoStreamsNeonCouldInfluencePerMo').val(),
        publisherClickRate: $('#publisherClickRate').val(),
        potentialThumbnailsNeonWouldServe: $('#potentialThumbnailsNeonWouldServe').val(),

    thumbnailViewsWhereNeonServesPublisherSuppliedThumbnails: 1, //Default value
    thumbnailViewsWhereNeonServesDefaultThumbnails: 99, //Default value
    publisherSuppliedThumbnailViews: $('#publisherSuppliedThumbnailViews').val(),
    neonThumbnailViews: $('#neonThumbnailViews').val(),
    totalThumbnailViews: $('#totalThumbnailViews').val(),
    defaultClickRate: $('#defaultClickRate').val(),
    neonClickRate: $('#neonClickRate').val(),
    publisherViewsxpublisherClickRate: $('#publisherViewsxpublisherClickRate').val(),
    neonViewsxNeonClickRate: $('#neonViewsxNeonClickRate').val(),
    withoutNeon: $('#withoutNeon').val(),
    withNeon: $('#withNeon').val(),
    netNewClicksOn99Traffic: $('#netNewClicksOn99Traffic').val(),
    actualIncrementalClicks: $('#actualIncrementalClicks').val(),
    neonFeePerMo: $('#neonFeePerMo').val(),
    actualIncrementalClicks: $('#actualIncrementalClicks').val(),
    estimatedPotentialIncrementalRevenue: $('#estimatedPotentialIncrementalRevenue').val(),
    potentialIncrementalRevenue: $('#potentialIncrementalRevenue').val(),
    neonFee: $('#neonFee').val(),
    neonIncrementalRevenue: $('#neonIncrementalRevenue').val(),
    percentEstimatedPotentialRevenueforNeon: $('#percentEstimatedPotentialRevenueforNeon').val(),
    percentEstimatedPotentialRevenueforCustomer: $('#percentEstimatedPotentialRevenueforCustomer').val(),
});    

})
