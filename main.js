"use strict"



function changeColor(){

    let div = document.getElementById('button');

    div.className = "colorRed";
}

/*

function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
  
//alert( sumTo(100) )

//ОБЪЕКТЫ


var user = {
  name: "Вася",
  surname: "Петров"
}
user.name = "Сергей";


for (const key in user) {
  alert( "Свойство: " + key + " его значение: " + user[key])  
}


//

var counter = 0;

for (var key in user) {
  counter++;
}

//alert( "Всего свойств: " + counter );

//

var counter = 0;
var food = {
  fruit:"apple"
}

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

//alert( isEmpty(counter) );
//alert( isEmpty(food) );

//
var Sum = 0;
var salaries = {
  "Steve": 200,
  "Endy": 150
}

for (const key in salaries) {
  Sum += salaries[key];
}
//alert( Sum );

//

var max = 0, maxName = "";

var salaries = {
  "Steve": 200,
  "Endy": 150
}

for (const name in salaries) {
  if ( max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

//alert (maxName|| "Нет сотрудников");

//

var user = {
  name: "John",
  age: "25"
}

var person = user;
person.age = "12";
alert( user.age )

//

var goods = [];
var lastItem = goods[ goods.length - 1];
goods[goods.length] = 'Компьютер';

//

var styles = [ "Джаз","Блюз" ];
styles.push("Рок-н-Ролл");
styles[ styles.length - 2] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп","Рэгги");
alert( styles );



var names = ["Мария","Олег","Петр","Настя"];
names.splice(0, 3, "А","вот","И");
var cutedNames = names.slice(1,4);
delete names[1];
alert(cutedNames);




function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

var arr = [ 100, 0.25, 50, 4, 4.5 ];

arr.sort(compareNumeric);

alert(arr);
arr.reverse();
alert(arr);
var newArrray = arr.concat(5,6);
alert(newArrray);
alert( newArrray.indexOf(4) )


var human = {
  head: "1",
  body: "1",
  hand: "2",
  leg: "2",
}
var keys = Object.keys(human);
alert(keys);




var obj = {
  className : 'open menu'
}

function addClass( obj, cls ){
  var classes = obj.className.split(' ');
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return;
  }
  classes.push(cls);
  obj.className = classes.join(' ')
}

function removeClass( obj, cls) {
  var classes = obj.className.split(' ');
  for (var i = 0; i < classes.length; i++) {
    if( classes[i] == cls){
      classes.splice(i, 1);
      i--;
    }    
  }
  obj.className = classes.join(' ')
}

removeClass(obj, 'blabla');
removeClass(obj, 'menu');
alert(obj.className);


*/

var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});


// а вот и  изменение хых


//ну еще одно изменение и хватит

// обманул