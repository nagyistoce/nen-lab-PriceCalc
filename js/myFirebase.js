//Create our Firebase reference
var myDataRef = new Firebase('https://neonpricing.firebaseio.com/');
console.log("Hello world!");
$('#main_form').submit(function () {
    	console.log("hey");
    	console.log(B14);
        var B14 = $('#B14').val();
        console.log(B14);
        myDataRef.push({
            B14: B14
        });
}) 
