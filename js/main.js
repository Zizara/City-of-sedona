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
// -----------------Календарь-----------------//

	$(function() {
		$("#start").datepicker();
	} );

	$(function() {
		$("#finish").datepicker();
	} );

	$(".inputText").focus(function() {
		$(this).siblings(".labelText").addClass("focus");
	})

	$(".inputText").blur(function() {
		if($(this).val()===""){
		$(this).siblings(".labelText").removeClass("focus");
		}
	})


// -----------------Счетчик-----------------//

	var counterParent = document.querySelector('counter');
	var countInputParent = document.getElementById('parents');
	var butMParent = document.getElementById('minusParents');
	var butPParent = document.getElementById('plusParents');
	//в содержании инпута удалить (replace) все(g) цифры (/\d/) из строки
	var unitsParent = countInputParent.value.replace(/\d/g, '');
	butPParent.onclick = function(){
		//(parseInt) перевод значение в число. Прибавить к нему +1
		//и удалить ранее стоящую цифру
		countInputParent.value = parseInt(countInputParent.value)+1+unitsParent;
	};
	butMParent.onclick = function(){
		if(parseInt(countInputParent.value) > 1) {
				countInputParent.value = parseInt(countInputParent.value)-1+unitsParent;
		}
	};

	var counterChild = document.querySelector('counter');
	var countInputChild = document.getElementById('child');
	var butMChild = document.getElementById('minusChild');
	var butPChild = document.getElementById('plusChild');
	var unitsChild = countInputChild.value.replace(/\d/g, '');
	butPChild.onclick = function(){
		countInputChild.value = parseInt(countInputChild.value)+1+unitsChild;
	};
	butMChild.onclick = function(){
		if(parseInt(countInputChild.value) > 1) {
				countInputChild.value = parseInt(countInputChild.value)-1+unitsChild;
		}
	};
