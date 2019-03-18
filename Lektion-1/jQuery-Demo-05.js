// Manipulera innehåll med jQuery

$(document).ready(function() {

    /* Metoden html() */
    // Hämta HTML-kod
    let $demo = $('#demo1').html();
    console.log($demo); 
    
    // Ändra HTML-kod
    $('#demo2').html('<em>Här kommer ny HTML-kod.</em>');

    /* Metoden text() */
    // Hämta text
    $demo = $('#demo3').text();
    console.log($demo);

    /* Metoden val() */
    $demo = $('#demo5').val()
    console.log($demo);

    /* Metoden remove() */
    $('#demo6').remove();

    /* Metoden hide() */
    $('#demo7').hide();

}); // Ready