// jQuery - Demo 2
$(document).ready(function(){
 
    // Type Selector
    // $('p').hide();

    // ID Selector
    $('#demo').hide();

    // Class Selector
    $('.demo').hide();

    // Universal Selector
    // $('*').hide();

    // Group of selectors
    $('h3,h4,#group-demo,.group-demo').hide();

    // Descendant combinator
    $('li a').hide();

    // Child combinator (gömmer alla p direkt under div)
    $('div > p').hide();

    // Sibling combinator (gömmer p efter div inom samma parent)
    $('div + p').hide();

    // Subsequent sibling combinator (gömmer alla p efter div inom samma parent)
    $('article ~ p').hide();

    // This Selector (ej CSS)
    $('p').click(function() {
        $(this).hide();
    });
});