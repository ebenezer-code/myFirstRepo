//this is how to write js comment
// alert("HELLO FROM STYLES.JS!");
// var pics = [
   // "images/portfolio1.jpg",
   // "images/portfolio2.jpg",
   // "images,portfolio3.jpg",
   // "images/portfolio4.jpg",
   // "images/portfolio5.jpg",
   // "images/portfolio6.jpg",
   // "images/portfolio7.jpg",
   // "images/portfolio8.jpg",
   // "images/portfolio9.jpg",
   // "images/portfolio10.jpg",
   // "images/portfolio11.jpg",
   // "images/portfolio12.jpg"
// ];

// var btn = document.querySelector("button");
// btn.addEventListener("click", function(){
// 	alert("CLICKED!")
// });
//this is how to write js comment
alert("HELLO FROM EBEN.JS!");
var pics = [
   "images/portfolio1.jpg",//0
   "images/portfolio2.jpg",//1
   "images/portfolio3.jpg",//2
   "images/portfolio4.jpg",//3
   "images/portfolio5.jpg",//4
   "images/portfolio6.jpg",//5
   "images/portfolio7.jpg",//6
   "images/portfolio8.jpg",//7
   "images/portfolio9.jpg",//8
   "images/portfolio10.jpg",//9
   "images/portfolio11.jpg",//10
   "images/portfolio12.jpg"//11
   							//12
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var me = 1;
	
btn.addEventListener("click", function(){ 
	if (me === 12) {
		me = 0;
	}
	img.src = pics[me]
	me = me + 1;
});