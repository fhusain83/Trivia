$(document).ready(function(){
$('#test').hide();
$('#Timer').hide();
$('#Scores').hide();
var chosennums=[];
var CurrNum=0;
var CurrQues;
var classification="";
var QuestionsArr=[];
var Answers=[];
var config;
var myVar;
var time=60;
var SelectedValue;
StartDataBase();
var a="test";

var keepCount=0;
function StartDataBase()
{
$("#cat01").attr('src',"images/Fashion.jpg");
$("#cat02").attr('src',"images/makeup.jpg");
$("#cat03").attr('src',"images/antiaging.jpg");
$("#cat04").attr('src',"images/exercise.jpg");
$("#cat05").attr('src',"images/sports.jpg");
$("#cat06").attr('src',"images/water.jpg");
$("#cat07").attr('src',"images/holistic.jpg");
$("#cat08").attr('src',"images/recipes.jpg");
$("#cat09").attr('src',"images/dental.jpg");
$("#cat010").attr('src',"images/travel.jpg");
$("#cat011").attr('src',"images/design.jpg");
$("#cat012").attr('src',"images/meditation.jpg");
}

 var Decor=[];
 var chosennums=[];

function CreateQuestionsDecor()//database)
{

var question1 = {

Q:"What is a platform bed with drawers and storage compartments built in underneath called?",
Option1:"Day Bed",
Option2:"Futon",
Option3:"Captain's Bed",
Option4:"Bunk Beds",
CorrectOption:"Option1"

};
Decor.push(question1);
var question2={
Q:"What is another word for a free standing closet, usually with shelves and/or a hanging rod?",
Option1:"Dresser",
Option2:"Armoire",
Option3:"Ottoman",
Option4:"Entertainment Center",
CorrectOption:"Option1"

};
Decor.push(question2);
var question3={
Q:"What is another word for a free standing closet, usually with shelves and/or a hanging rod?",
Option1:"Dresser",
Option2:"Armoire",
Option3:"Ottoman",
Option4:"Entertainment Center",
CorrectOption:"Option1"
};
Decor.push(question3);

var question4={
Q:"What is a lgall chest of drawers, usually 24 to 36 inches wide by 30 to 36 inches tall, called?",
Option1:"Bachelor's Chest",
Option2:"Captain's Bed",
Option3:"Armoire",
Option4:"Hutch",
CorrectOption:"Option1"
};
Decor.push(question4);
var question5= {
Q:"What type of bed is narrow, with the back and ends of equal height, similar to a sofa?",
Option1:"Captain's Bed",
Option2:"Bunk Beds",
Option3:"Waterbed",
Option3:"Daybed",
CorrectOption:"Option1"
};

Decor.push(question5);

var question6={
Q:"What are metal or wooden frames that join a headboard and footboard and also support a mattress?",
Option1:"Box Spring",
Option2:"Pillows",
Option3:"Canopy",
Option4:"Bed Rails",
CorrectOption:"Option1"};
Decor.push(question6);


var question7= {
Q:"What is the name of a bed for a newborn baby, sometimes basket-shaped?",
Option1:"Stroller",
Option2:"Daybed",
Option3:"Rocker",
Option4:"Bassinet",
CorrectOption:"Option1"
};
Decor.push(question7);
var question8={
Q:"What is the name of a long seat that can seat at least two people?",
 
Option1:"Recliner",
Option2:"Armchair",
Option3:"Chaise",
Option4:"Bench",
CorrectOption:"Option1"
};
Decor.push(question8);
var question9= {
Q:"What are window coverings that are designed of either horizontal or vertical slats?",
Option1:"Curtains",
Option2:"Blinds",
Option3:"Shades",
Option4:"Blankets",
CorrectOption:"Option1"
};

Decor.push(question9);
var question10={
Q:"What is a piece of furniture with shelves, used in an office or study for storing books?",
Option1:"Coffee Table",
Option2:"Entertainment Center",
Option3:"Dresser",
Option4:"Bookcase",
CorrectOption:"Option1"
};
Decor.push(question10);
var question11= {
Q:"What is the name for an American Colonial-style chair with large turned posts and spindles?",
Option1:"Recliner",
Option2:"Loveseat",
Option3:"Brewster Chair",
Option4:"Sofabed",
CorrectOption:"Option1"
};
Decor.push(question11);

var question12= {
Q:"What are two beds stacked on top of each other called?",
Option1:"Captain's Bed",
Option2:"Sofabed",
Option3:"Bunk Beds",
Option4:"Daybed",
CorrectOption:"Option1"
};
Decor.push(question12);

var question13={
Q:"What do you call a curved sofa back characterized by a large central hump?",
Option1:"Cat Back",
Option2:"Elephant Back",
Option3:"Camel Back",
Option4:"Donkey Back",
CorrectOption:"Option1"
 };

Decor.push(question13);
var question14={
Q:"What is an ornament used to occupy and decorate the center of a dining table called?",
Option1:"Candlesticks",
Option2:"Centerpiece",
Option3:"Flowers",
Option4:"Vase",
CorrectOption:"Option1"
};

Decor.push(question14);
var question15= {
Q:"What is a ceiling-mounted lighting fixture consisting of two or more arms bearing lights called?",
Option1:"Lamp",
Option2:"Ceiling Fan",
Option3:"Candelabra",
Option4:"Chandelier",
CorrectOption:"Option1"
};

Decor.push(question15);
var question16= {
Q:"Chinoiserie is decoration inspired by the art of which country?",
Option1:"England",
Option2:"China",
Option4:"Italy",
Option5:"Germany",
CorrectOption:"Option1"};
Decor.push(question16);
}

function RandomQ()
{
  for(var i=0;i<4;i++)
  {
  var num=  Math.random() * (16 - 1) + 1;
  if(!chosennums.includes(num))
  {
    chosennums.push(num);
  }
  }
}

function MyTrivia()
{
  if($(this).html()==="Play Another Category")
{
location.reload();
}

if($(this).html()==="Next")
{
 keepCount++;
 Answers.push(SelectedValue);

if(keepCount<4)
CreateQ(keepCount);
else
CheckScore();
}

if($(this).html()!=="Play Another Category" && $(this).html()!=="Next"){

CreateQuestionsDecor();

switch($(this).attr("name"))
{
case "Fashion":
classification="Fashion";
clearInterval(myVar);
RandomQ();
CreateQ(keepCount);
$("#TriviaCats").hide();
$('#test').show();
 myVar = setInterval(myTimer, 1000);
$('#Timer').show();
//$('#fashion').attr('href',"TriviaPage.html?test="+classification+","+Decor[0]);//+
  //","+JSON.stringify(Decor[parseInt(chosennums[1])])+","+JSON.stringify(Decor[parseInt(chosennums[2])])+","+JSON.stringify(Decor[parseInt(chosennums[3])])+","+JSON.stringify(Decor[parseInt(chosennums[4])]));
break;
case "Makeup":
classification="Makeup";
break;
case "design":
classification="Design";
break;
case "antiaging":
classification="Antiaging";
break;
case "holistic":
classification="holistic";
break;
case "recipes":
classification="Recipes";
break;
case "dental":
classification="Dental";
break;
case "travel":
classification="Travel";
break;
case "sports":
classification="Sports";
break;
case "water":
classification="Water";
break;
case "meditation":
classification="Meditation";
break;
case "exercise":
classification="Exercise";
break;
}

}

}


function CheckScore()
{
   $('#test').hide();
  clearInterval(myVar);
  var score=0;
  for(var e=0;e<4;e++)
   {
    var question=Decor[parseInt(chosennums[e])];
    if(question.CorrectOption===Answers[e].replace('_',''))
    {
     score++;
    }
   }
    $('#MyScore').html(score);
    $('#Category').html(classification);
    $('#Scores').show();
}


function myTimer() {
  // var t= moment().utc().seconds();
    time=time-1;
    if(time!==0)
   $('#Timer').html(time);
  else
   clearInterval(myVar);
   // var d = new Date();
    //document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


function CreateQ(count)
{

//for(var e=0;e<5;e++)
//{
var question=Decor[parseInt(chosennums[count])];
$("#Question").html(question.Q);
$("#Option1").html(question.Option1);
$("#Option2").html(question.Option2);
$("#Option3").html(question.Option3);
$("#Option4").html(question.Option4);
	
}

$('input[type="radio"]').click(function(){SelectedValue=$(this).attr('id'); });
$("Button").on("click",MyTrivia)

});


 


