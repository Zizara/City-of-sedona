// -----------------Ползунок-----------------//

$("#slider").slider({
	min: 0,
	max: 3000,
	values: [0,3000],
	range: true,
  step: 5,
	// stop: function(event, ui) {
	// 	$("input#minCost").val($("#slider").slider("values",0));
	// 	$("input#maxCost").val($("#slider").slider("values",1));
  //   },
    slide: function(event, ui){
  		$("input#minCost").val("от "+ $("#slider").slider("values",0));
  		$("input#maxCost").val("до "+ $("#slider").slider("values",1));
    }
});
