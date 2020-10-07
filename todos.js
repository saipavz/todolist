//check off specific todos by clicking
$("ul").on("click", "li", function() {
		$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function() {
	if(event.which === 13) {
		//grab txt from input
		let todoText =$(this).val();
		$(this).val("");
		//create a new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText +"</li>");
	}
});

$(".fa-arrow-circle-up").click(10,function() {
	$("input[type='text']").fadeToggle();
});