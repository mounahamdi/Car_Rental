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
function getCars(){
        tableBody = document.getElementById('cars_for_rent_home');
        let row = "";
        let rowValues = [localStorage.getItem('car mark'),localStorage.getItem('car city'),localStorage.getItem('car range'),localStorage.getItem('car rent price')];
        for(let i = 0 ; i<rowValues.length ; i++){
            row += "<td>"+rowValues[i]+"</td>";
        }
        tableBody.innerHTML += row;
        return map(rowValues, function (element,i) {
        return element;
        });
}
allCars.concat(getCars());