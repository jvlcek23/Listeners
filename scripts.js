$('#first').on('click',() => {
    console.log('Yeah you clicked me')
  });

$('#second').click(() => {
    document.getElementById('first').innerHTML = "You totally clicked the second button";
});

let btn = document.createElement("BUTTON");
btn.setAttribute('id','third');
btn.setAttribute('class','btns');
btn.innerHTML = "Third Button";
document.body.append(btn);


$('#third').click(() => {
$(".btns").css("backgroundColor","olive");
});



//CREATE THIRD BUTTON

/* $(document).ready(function() {
    $('body').append('<button class="btns" id="third" type="button">Third Button</button>');
}); */

