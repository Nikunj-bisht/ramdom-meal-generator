var clic=document.getElementById("clic");
var container=document.getElementById("container");
var gather=document.getElementById("videos");
clic.addEventListener("click",get);

function get(){
  var url= "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(url)
  .then(response =>response.json())
  .then(data=>{
console.log(data);
  build(data.meals);
  videos(data.meals[0].strMeal);
    })
}
function build(flow){
var rex=flow;
console.log(rex);

var html="";
html+=`<div class="content">
<div class="title"><h1>${rex[0].strMeal}</h1></div>
<div class="fle">
<div class="ins"><h2>${rex[0].strInstructions}</h2></div>
           <img src=${rex[0].strMealThumb} width="400px" height="300px"></div></div>`;

for(var i=1;i<20;i++){

var convert=`strMeasure${i}`;
const pro=rex[0][convert];
var ingre=`strIngredient${i}`;
const ing=rex[0][ingre];
html+=`<div class="list"><li class="ingredients">${ing} ${pro}</li></div>`;
}
container.innerHTML=html;
}
function videos(name){
  var vn=name;
  console.log(vn);
  var url=`https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyDDcf3J5sANx2EYBi7mlhWpbz6I-jO8p8o&q=${vn}&maxResults=5`;

fetch(url)
.then(response => response.json())
.then(data =>buildvideo(data.items))
}

function buildvideo(vd){
var storage=vd;
console.log(storage);
var htm="";
for(var i=0;i<storage.length;i++){
  const st=storage[i].id.videoId;
  console.log(st);
     htm+=`<div class="makin"><iframe width="350" height="200" src=https://www.youtube.com/embed/${storage[i].id.videoId}
     frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
  }
gather.innerHTML=htm;
}
