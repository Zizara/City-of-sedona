// -----------------Сортировка-----------------//


var buttonUp = document.getElementsByClassName('.active');
var buttonDown = document.getElementsByClassName('fa-caret-down');
//var buttonType = document.getElementsByTagName("button")[2];
buttonUp.onclick = function () {
	//получаем элемент с id rangHotels
	var div = document.getElementById ('rangHotels');
	//получаем в id rangHotels все элементы с классом hotel
	var content = div.querySelectorAll ('.hotel');
	//получаем в id rangHotels все элементы с классом price
	var prices = div.querySelectorAll ('.price');

	//создаем новый ассоциативный массив list с длиной равное коллекции price
	for (var list = [], j = 0, le = prices.length; j < le; j++) {
		list[j] ={}
	//создаем ключ ассоциативного массива с именем prc, записываем внутрене содержание spana в prc
		list[j].prc= +prices [j].innerHTML;
	//создаем ключ ассоциативного массива с именем cln, делаем клон diva с дочерними элементами (true)
		list[j].cln = content [j].cloneNode (true);
	};
	//опустошаем внутренние содеражание diva c id='rangHotels'
	div.innerHTML ='';
	//сортируем под возрастанию divы
	list.sort (function (x, y) {return x.prc - y.prc});
	//Добавляет (appendChild) элемент (list [j].cln) в конец переменной div
    for (j = 0; j < le; j++) div.appendChild (list [j].cln);
}


//  buttonUp.onclick = function () {
// 	var div = document.getElementById ('center');
// 	var content = div.querySelectorAll ('.content');
// 	var prices = div.querySelectorAll ('.price');
//
//
// 	for (var list = [], j = 0, le = prices.length; j < le; j++) {
// 		list[j] ={}
// 		list[j].prc= +prices [j].innerHTML;
// 		list[j].cln = content [j].cloneNode (true);
// 	};
// 	div.innerHTML ='';
// 	list.sort (function (x, y) {return x.prc - y.prc});
//     for (j = 0; j < le; j++) div.appendChild (list [j].cln);
// }

// buttonType.onclick = function () {
// 	var div = document.getElementById ('center');
// 	var content = div.querySelectorAll ('.content');
// 	var type = div.querySelectorAll ('.type');
//
//
// 	for (var list = [], j = 0, le = type.length; j < le; j++) {
// 		list[j] ={}
// 		list[j].tp= +type [j].innerHTML;
// 		list[j].cln = content [j].cloneNode (true);
// 	};
// 	div.innerHTML ='';
// 	list.sort (function (x, y) {return x.tp - y.tp});
//     for (j = 0; j < le; j++) div.appendChild (list [j].cln);
// };
