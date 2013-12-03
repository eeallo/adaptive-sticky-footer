/* 
	Calculate footer height and readjust layout accordingly
	Author:		eeallo
	Version:	27.11.2013
*/

var $j = jQuery;

$j(document).ready(function() {
    $j('#wrapper').css('margin-bottom', -( $j('footer').height() ) );    
    $j('#push').css('height', $j('footer').height() );
});
