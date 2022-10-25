function Car(mark,city,range,price){
    var cr={};
    cr.mark=mark;
    cr.city=city;
    cr.range=range;
    cr.price=price;
return cr;
}

var allCars=[];
function add(car){
    allCars.push(car);
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
   function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
allCars = [localStorage.getItem('car mark'),localStorage.getItem('car city'),localStorage.getItem('car range'),localStorage.getItem('car rent price')];
console.log(allCars);
var askedCar = Car();
console.log(askedCar);
var brand = document.getElementById('car_mark2').value;
localStorage.setItem('askedBrand', brand);
var city = document.getElementById('car_city2').value;
localStorage.setItem('askedCity', city);
var price = document.getElementById('budget').value;
localStorage.setItem('askedBudget', price);
var askedCar = Car(brand,city,"",price);
function checkEqual(obj1,obj2){
  return (obj1['mark']===obj2['mark'] && obj1['city']===obj2['city'] && obj1['price']===obj2['price']){
    return true;
  }
  else{
    return false;
  }
}
function getAskedCars(array, obj){
  return filter(array,function(element,key){
    return checkEqual(element,obj);
  });
}
console.log(getAskedCars(allCars,askedCar));
function displayAskedCars(){
  tableBody = document.getElementById('searched_cars');
  let row = "";
  let rowAskedValues = getAskedCars(allCars,askedCar);
  for(let i = 0 ; i<rowAskedValues.length ; i++){
    row += "<td>"+rowAskedValues[i]+"</td>";
  }
  tableBody.innerHTML += row;
}