$('#first').on('click',() => {
    console.log('Yeah you clicked me')
  });

$('#second').click(() => {
    document.getElementById('first').innerHTML = "You totally clicked the second button";
});
let bttn = $("<button></button>").text("Third Button");
bttn.attr('id', 'third');
bttn.attr('class', 'btns');
$('.buttons').append(bttn);


$('#third').click(() => {
var changecolor= $("#clr").val();
$(".btns").css("backgroundColor",changecolor);
$('#third').off('click');
});





//NOT WORKING THIRD BUTTON

/* $(document).ready(function() {
    $('.buttons').append(<button id="third" class="btns" type="button">Third Button</button>);
});  */

//CREATE THIRD BUTTON

/* let btn = document.createElement("BUTTON");
btn.setAttribute('id','third');
btn.setAttribute('class','btns');
btn.innerHTML = "Third Button";
document.body.append(btn);
 */
