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

// -----------------Сортировка-----------------//


var buttonDown = document.getElementsByTagName("button")[0];
var buttonUp = document.getElementsByTagName("button")[1];
var buttonType = document.getElementsByTagName("button")[2];

buttonDown.onclick = function () {
	//получаем элемент с id center
	var div = document.getElementById ('center');
	//получаем в id center все элементы с классом content
	var content = div.querySelectorAll ('.content');
	//получаем в id center все элементы с классом price
	var prices = div.querySelectorAll ('.price');

	//создаем новый ассоциативный массив list с длиной равное коллекции price
	for (var list = [], j = 0, le = prices.length; j < le; j++) {
		list[j] ={}
	//создаем ключ ассоциативного массива с именем prc, записываем внутрене содержание spana в prc
		list[j].prc= +prices [j].innerHTML;
	//создаем ключ ассоциативного массива с именем cln, делаем клон diva с дочерними элементами (true)
		list[j].cln = content [j].cloneNode (true);
	};
	//опустошаем внутренние содеражание diva c id='center'
	div.innerHTML ='';
	//сортируем под убыванию divы
	list.sort (function (x, y) {return y.prc - x.prc});
	//Добавляет (appendChild) элемент (list [j].cln) в конец переменной div
    for (j = 0; j < le; j++) div.appendChild (list [j].cln);
}


 buttonUp.onclick = function () {
	var div = document.getElementById ('center');
	var content = div.querySelectorAll ('.content');
	var prices = div.querySelectorAll ('.price');


	for (var list = [], j = 0, le = prices.length; j < le; j++) {
		list[j] ={}
		list[j].prc= +prices [j].innerHTML;
		list[j].cln = content [j].cloneNode (true);
	};
	div.innerHTML ='';
	list.sort (function (x, y) {return x.prc - y.prc});
    for (j = 0; j < le; j++) div.appendChild (list [j].cln);
}

 buttonType.onclick = function () {
	var div = document.getElementById ('center');
	var content = div.querySelectorAll ('.content');
	var type = div.querySelectorAll ('.type');


	for (var list = [], j = 0, le = type.length; j < le; j++) {
		list[j] ={}
		list[j].tp= +type [j].innerHTML;
		list[j].cln = content [j].cloneNode (true);
	};
	div.innerHTML ='';
	list.sort (function (x, y) {return x.tp - y.tp});
    for (j = 0; j < le; j++) div.appendChild (list [j].cln);
}
