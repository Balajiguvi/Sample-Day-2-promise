// var res = fetch("https://restcountries.com/v2/all")
//   .then((data) => data.json())
//   //.then((data1)=>console.log(data1))
//   .then((data1) => {
//     for (var i = 0; i < data1.length; i++) {
//       var div = document.createElement("div");
//       div.innerHTML = ` <div class="container">
//      <div class="row">
//          <div class="col-lg-4 col-sm-12">
//                  <div class="card">
//                      <div class="card-header">
//                          <h5 class="card-title">${data1[i].name}</h5>
//                          <img src="${data1[i].flag}" class="card-img-top" alt="...">
//                           <div class="card-body">
//                                 <p class="card-text">Captital: ${data1[i].capital}</p>
//                                 <p class="card-text">Region: ${data1[i].region}</p>
//                                 <p class="card-text">Country Code: ${data1[i].cioc}</p>
//                                 <a href="#" class="btn btn-primary">Click for Weather</a>
//                           </div>
//                      </div>
//                  </div>
//          </div>
//      </div>
//  </div>`;
//       document.body.append(div);
//     }
//   })
//   .catch((error) => console.log(error));


var container = document.createElement("div");
container.setAttribute("class", "container");

var row = document.createElement("div");
row.setAttribute("class", "row");
container.append(row);

var res = fetch("https://restcountries.com/v2/all");
  res.then((data) => data.json()).then((data1) => foo(data1));

function foo(data1){
  for(var i = 0; i < data1.length; i++){
    row.innerHTML+=`<div class="col-md-4">
      <div class="card mb-5">
      <div class="card-header">
          <h5 class="card-title">${data1[i].name}</h5>
          <img src="${data1[i].flag}" class="card-img-top" alt="...">
           <div class="card-body">
                 <p class="card-text">Captital: ${data1[i].capital}</p>
                 <p class="card-text">Region: ${data1[i].region}</p>
                 <p class="card-text">Country Code: ${data1[i].cioc}</p>
                 <a href="#" class="btn btn-primary">Click for Weather</a>
           </div>
      </div>
 </div>      
      </div>`;
    document.body.append(container);
  }
}
