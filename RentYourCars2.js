// Class Car
function Car(mark,city,range,price){
    var cr={};
    cr.mark=mark;
    cr.city=city;
    cr.range=range;
    cr.price=price;
    cr.getFormCar=getFormCar;
return cr;
}
\\table contains all the cars

var allCars=[];

\\ add car to the table allCars 
function add(car){
    allCars.push(car);
}
//select car properties from the html form
// var mark = document.getElementById('car_mark');
// var city = document.getElementById('car_city');
// // var range = document.getElementById('carRange');
// var price = document.getElementById('car_price');
// var button = document.getElementById('post_car');
// //get properties values (to revise)
// var mark_value=mark.value;
// var city_value=city.value;
// var price_value=price.value;
//local storage the form data
function setFormValues(){

var mark = document.getElementById("car_mark").value;
  // console.log(mark);
  var city = document.getElementById("car_city").value;
  // console.log(city);
  var price = document.getElementById('car_price').value;
  // console.log(price);
  var highRange = document.getElementById('high_range');
  var normalRange = document.getElementById('normal_range');
  if(highRange.checked){
   // console.log("high range");
   var range =  "high range";
  }
  else if(normalRange.checked){
   // console.log("normal range");
   var range =  "normal range";
  }
    localStorage.setItem('car mark', mark);
    localStorage.setItem('car city', city);
    localStorage.setItem('car range', range);
    localStorage.setItem('car rent price', price);
}
//     //create a car after the local storage and push it on the array of cars 
//     var car = Car(mark_value,city_value,price_value);
//     car.add(car);
    // var newCar = Car(localStorage.getItem('car mark'),localStorage.getItem('car city'),localStorage.getItem('car range'),localStorage.getItem('car rent price'));
    // add(newCar);
    // console.log(localStorage.getItem('car mark'));
    // console.log(localStorage.getItem('car city'));
    // console.log(localStorage.getItem('car range'));
    // console.log(localStorage.getItem('car rent price'));

var getFormCar = function(){
    var newCar = Car(localStorage.getItem('car mark'),localStorage.getItem('car city'),localStorage.getItem('car range'),localStorage.getItem('car rent price'));
    return newCar;
}
add(getFormCar());
viewCars();
function viewCars(){
    console.log(allCars);
}
//Show form values on the console
// function addCars() {
//   var mark = document.getElementById("car_mark").value;
//   console.log(mark);
//   var city = document.getElementById("car_city").value;
//   console.log(city);
//   var price = document.getElementById('car_price').value;
//   console.log(price);
//   var highRange = document.getElementById('high_range');
//   var normalRange = document.getElementById('normal_range');
//   if(highRange.checked){
//    console.log("high range");
//    var range =  "high range";
//   }
//   else if(normalRange.checked){
//    console.log("normal range");
//    var range =  "normal range";
//   }
//   var newCar = Car(mark,city,range,price);
//   add(newCar);
//   console.log(allCars);
// }

//execute the local storage function every time when click on the button "Post"
// button.addEventListener('click',setFormValues);
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

  //first tentative of getFormValues function
// function getFormValues(){
//     var i = 0;
//     while(setFormValues()){
//         tableBody = document.getElementById('cars_for_rent');
//         let rowValues = [localStorage.getItem('car mark'),localStorage.getItem('car city'),localStorage.getItem('car range'),localStorage.getItem('car rent price')];
//         let newTr = document.createElement('tr');
//         let idTr = "id"+i;
//         document.querySelector('tr').setAttribute("id",idTr);
//         tableBody.appendChild(newTr);
//         for(let j=0;j<rowValues.length;j++){
//             let newTd = document.createElement('td');
//             let idTd = "id"+j;
//             document.querySelector('td').setAttribute("id",idTd);
//             tableBody.innerHTML = rowValues[j];
//             document.querySelector(idTr).appendChild(newTd);
//         }
//         i++;
//     }
// }

   //second tentative of getFormValues function
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

//     // tableBody.appendChild("<tr>"+row+"</tr>");
//     return map(rowValues, function (element,i) {
//         return element;
//     });
    // let newCar = Car(newCarProperties[1], newCarProperties[2], newCarProperties[3], newCarProperties[4]);
    // createdCars.push(newCar);
    // return createdCars;
// }
// function getFormValuesAsObject(){
//     return Car(localStorage.getItem('car mark'),localStorage.getItem('car city'),localStorage.getItem('car range'),localStorage.getItem('car rent price'));
// }

// allCars.push(getFormValuesAsObject());
