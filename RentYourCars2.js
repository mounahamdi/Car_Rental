function Car(mark,city,range,price){
    var cr={};
    cr.mark=mark;
    cr.city=city;
    cr.range=range;
    cr.price=price;
    cr.getFormCar=getFormCar;
return cr;
}


var allCars=[];

\\ add car to the table allCars 
function add(car){
    allCars.push(car);
}
function setFormValues(){

var mark = document.getElementById("car_mark").value;
  var city = document.getElementById("car_city").value;
  var price = document.getElementById('car_price').value;
  var highRange = document.getElementById('high_range');
  var normalRange = document.getElementById('normal_range');
  if(highRange.checked){
   var range =  "high range";
  }
  else if(normalRange.checked){
   var range =  "normal range";
  }
    localStorage.setItem('car mark', mark);
    localStorage.setItem('car city', city);
    localStorage.setItem('car range', range);
    localStorage.setItem('car rent price', price);
}

var getFormCar = function(){
    var newCar = Car(localStorage.getItem('car mark'),localStorage.getItem('car city'),localStorage.getItem('car range'),localStorage.getItem('car rent price'));
    return newCar;
}
add(getFormCar());
viewCars();
function viewCars(){
    console.log(allCars);
}
function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }

  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }

  
function getFormValues(){
        tableBody = document.getElementById('cars_for_rent');
        let row = "";
        let rowValues = [localStorage.getItem('car mark'),localStorage.getItem('car city'),localStorage.getItem('car range'),localStorage.getItem('car rent price')];
        for(let i = 0 ; i<rowValues.length ; i++){
            row += "<td>"+rowValues[i]+"</td>";
        }
        tableBody.innerHTML += row;
        // return map(rowValues, function (element,i) {
        // return element;
        // });
}
allCars.concat(getFormValues());

function deleteCar(index){
    document.getElementById('cars_for_rent').deleteRow(index);
}