 // This function performs a basic calcuation. 

function percent(num){
    return num/100;
}

function calculate() {

    // Retrieve value from the amount field
    var B8 = $('#B8').val();
    var B9 = $('#B9').val();

    // Do actual calculation
    var B14 = Number(B8)* percent(Number(B9));
    // Store the value in the total field. Note that the 'Number' 
    // function converts a string of numbers into numbers
    $('#B14').val( B14 ); //.toFixed(2) );
    // toFixed ensures there are only two digits after the dec point


    var B16 = $('#B16').val();
    var B17 = B14/percent(Number(B16));
    $('#B17').val( B17 );

    var B20 = $('#B20').val();
    var B21 = $('#B21').val();

    var B23 = B17*percent(Number(B20));
    var B24 = B17*percent(Number(B21));
    var B25 = B23+B24;

    $('#B23').val( B23 );
    $('#B24').val( B24 );
    $('#B25').val( B25 );

    //submit event function returns false in order to tell browser not to reload page
    return false;
}

$('#test').submit( calculate );