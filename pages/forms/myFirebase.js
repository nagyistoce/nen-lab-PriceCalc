//Create our Firebase reference
var myDataRef = new Firebase('https://neonpricing.firebaseio.com/');

$('#').keypress(function (e) {
    if (e.keyCode == 13){
        var B14 = $('#B14').val();
        console.log(B14);
        myDataRef.push({
            B14: B14
        });
    }
}) 