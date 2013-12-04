/* 
Calculate footer height and adjust layout accordingly
Author: eeallo
Version: 4.12.2013
*/

/* We are using jQuery here for simplicity… */

$(document).ready(function() {
    $('.wrapper').css('margin-bottom', -( $('.footer').height() ) );    
    $('.push').css('height', $('.footer').height() );
});
