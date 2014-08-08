 /*!
 * Author: Jasmine Lee
 * Date: August 2014
 * Description:
 *      This script contains all the code that generates the PDF.
 !**/

// Get client's time zone abbreviation, eg PDT 
function getTimeZone() {
	var now = new Date().toString();
	var TZ = now.indexOf('(') > -1 ?
		now.match(/\([^\)]+\)/)[0].match(/[A-Z]/g).join('') :
		now.match(/[A-Z]{3,4}/)[0];
		if (TZ == "GMT" && /(GMT\W*\d{4})/.test(now)) TZ = RegExp.$1;
		return TZ;

	}

//Get client's time and date
function getDateTime() {
	var now     = new Date(); 
	var year    = now.getFullYear();
	var month   = now.getMonth()+1; 
	var day     = now.getDate();
	var hour    = now.getHours();
	var minute  = now.getMinutes();
	var second  = now.getSeconds(); 

	if(month.toString().length == 1) {
		var month = '0'+month;
	}
	if(day.toString().length == 1) {
		var day = '0'+day;
	}   
	if(hour.toString().length == 1) {
		var hour = '0'+hour;
	}
	if(minute.toString().length == 1) {
		var minute = '0'+minute;
	}
	if(second.toString().length == 1) {
		var second = '0'+second;
	}   
	var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second + ' ' + getTimeZone();   
	return dateTime;
}



// This function contains formatting of the PDF. In order to edit the formatting, you must manipulate 
// the individual x,y values of each doc.text(x,y, etc, etc)
function demoFromHTML(){
	// imgData is the Neon logo in base 64
	console.log('hay');
	var imgData = 'data:image/jpg;base64,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';
	var doc = new jsPDF();

	doc.setFont('helvetica', 'normal');
	doc.addImage(imgData, 20,20, 40, 10);

	var companyName = $('#companyName').val();
	console.log(companyName);

	doc.setFontSize(20);
	doc.text(20, 40, companyName+ " Price Report");
	doc.setFontSize(14);
	doc.text(20,50, "Calculated on " + getDateTime() );

	doc.setFontSize(13);
	doc.setFontStyle('bold');
	doc.text(20, 70, 'Economic Summary');

	doc.setFontStyle('normal');
	doc.setFontSize(13);
	doc.text(20, 80, 'Potential incremental revenue');
	doc.setFontSize(12);
	doc.text(20, 85, '$'+ $('#B54').val() );
	
	doc.setFontSize(13);
	doc.text(20, 95, 'Neon fee'); 
	doc.setFontSize(12);
	doc.text(20, 100, '$'+ $('#B55').val() );

	doc.setFontSize(13);
	doc.text(20, 110, 'Neon incremental revenue');
	doc.setFontSize(12);
	doc.text(20, 115, '$'+ $('#B56').val() );


	doc.setFontSize(8);
	doc.text(170, 285, '1/1 Economic Summary');
	//2nd Page
	doc.addPage();

	doc.setFontSize(13);
	doc.setFontStyle('bold');
	doc.text(20, 25, 'Publisher Assumptions');

	doc.setFontSize(13);
	doc.setFontStyle('normal');
	doc.text(20, 35, 'Video streams that Neon could influence per month');
	doc.setFontSize(12);
	doc.text(20, 40, $('#B14').val() );

	doc.setFontSize(13);
	doc.text(20, 50, 'Publisher click rate');
	doc.setFontSize(12);
	doc.text(20, 55, $('#B16').val() + '%');

	doc.setFontSize(13);
	doc.text(20, 65, 'Neon Lift Rate');
	doc.setFontSize(12);
	doc.text(20, 70, $('#B28').val() + '%');

	doc.setFontSize(13);
	doc.text(20, 80, 'CPM');
	doc.setFontSize(12);
	doc.text(20, 85, '$'+ $('#B47').val() );

	doc.setFontSize(13);
	doc.text(20, 95, 'Sell-through rate');
	doc.setFontSize(12);
	doc.text(20, 100, $('#B48').val() + '%' );

	doc.setFontSize(13);
	doc.text(20, 110, 'Average pre-rolls per stream');
	doc.setFontSize(12);
	doc.text(20, 115, $('#B49').val() );

	doc.setFontSize(13);
	doc.text(20, 125, "CPC for Incremental Clicks");
	doc.setFontSize(12);
	doc.text(20,130, '$'+ $('#B40').val() );

	doc.setFontSize(13);
	doc.setFontStyle('bold');
	doc.text(20, 140, 'Served');

	doc.setFontSize(12);
	doc.setFontStyle('normal');
	doc.text(20, 150, 'Thumbnail views where Neon serves: publisher supplied thumbnails | Neon thumbnails');
	doc.setFontSize(12);
	doc.text(20, 155, $('#B20').val()+"% | "+ $('#B21').val() ) +'%';

	doc.setFontSize(12);
	doc.text(20, 165, 'Publisher supplied thumbnail views ("A" in the A/B test) | Neon supplied ("B" in the A/B test)');
	doc.setFontSize(12);
	doc.text(20, 170, $('#B23').val() + " | " + $('#B24').val() );

	doc.setFontSize(13);
	doc.text(20, 180, 'Total thumbnail views');
	doc.setFontSize(12);
	doc.text(20, 185, $('#B25').val() );

	doc.setFontSize(13);
	doc.text(20, 195, "Default Click Rate");
	doc.setFontSize(12);
	doc.text(20, 200, $('#B27').val() + '%');

	doc.setFontSize(13);
	doc.setFontStyle('normal');
	doc.text(20, 210, 'Neon Lift Rate | Neon Click Rate');
	doc.setFontSize(12);
	doc.text(20, 215, $('#B28').val() + '% | ' + $('#B29').val() + '%' );

	doc.setFontSize(13);
	doc.setFontStyle('bold');
	doc.text(20, 225, 'Clicks');

	doc.setFontSize(13);
	doc.setFontStyle('normal');
	doc.text(20, 235, 'Publisher views * publisher click rate');
	doc.setFontSize(12);
	doc.text(20, 240, $('#B31').val() );

	doc.setFontSize(13);
	doc.text(20, 250, 'Neon views * Neon click rate');
	doc.setFontSize(12);
	doc.text(20, 255, $('#B32').val() );

	doc.setFontSize(13);
	doc.setFontStyle('normal');
	doc.text(20, 265, 'Without Neon');
	doc.setFontSize(12);
	doc.text(20, 270, $('#B34').val() );

	doc.setFontSize(8);
	doc.text(170, 285, '1/2 Implementation Details');

	//3rd page
	doc.addPage();

	doc.setFontSize(13);
	doc.setFontStyle('bold');
	doc.text(20, 25, "Clicks (cont'd.)");

	doc.setFontSize(13);
	doc.setFontStyle('normal');
	doc.text(20, 35, 'With Neon');
	doc.setFontSize(12);
	doc.text(20, 40, $('#B35').val() );

	doc.setFontSize(13);
	doc.setFontStyle('bold');
	doc.text(20, 50, 'Incremental');
	doc.setFontSize(12);

	doc.setFontSize(13);
	doc.setFontStyle('normal');
	doc.text(20, 60, 'Net new clicks on 99% of traffic');
	doc.setFontSize(12);
	doc.text(20, 65, $('#B37').val() );

	doc.setFontSize(13);
	doc.text(20, 75, 'Actual Incremental Clicks');
	doc.setFontSize(12);
	doc.text(20, 80, $('#B38').val() );

	doc.setFontSize(13);
	doc.text(20, 90, 'Neon Fee per Month');
	doc.setFontSize(12);
	doc.text(20, 95, '$'+ $('#B42').val() );

	//small font and large XY values for page footer
	doc.setFontSize(8);
	doc.text(170, 285, '2/2 Implementation Details');

	doc.save(companyName+'Report.pdf');



} 