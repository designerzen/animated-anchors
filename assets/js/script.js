/*

a simple script that simply changes the classes for all links
in the zone with the selected class.

This is NOT NEEDED for the links to work, it's just for the demo page
 
 */
$(document).ready(function() {

	var $hTest = $( '#vertical_test a' ),
		$vTest = $( '#horizontal_test a' ),
		$pTest = $( '#paragraph_test a' ),
		$stats = $( '#status' );
	
	$('#selectors a').click(function ()
	{
   		// get all classess associated with this anchor
		var selection = $(this).attr('class');
		
		// update the status text
		$stats.text( selection );
		
		// and replace all test links with this new class!
   		$hTest.removeClass().addClass( selection );
		$vTest.removeClass().addClass( selection );
		$pTest.removeClass().addClass( selection );
		
		return false;
	});
   
});