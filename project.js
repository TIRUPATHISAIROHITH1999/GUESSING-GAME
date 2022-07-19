let seceretNumber=Math.trunc(Math.random()*20+1);
let score=20;
let highScore=0;
//document.querySelector(".number").textContent=seceretNumber;//
document.querySelector("#check").addEventListener("click",function()
{
   const guess=Number(document.querySelector(".guess").value);
   if(!guess)
   {
       document.querySelector(".message").textContent="!!ENTER THE NUMBER SHEEP!!😜😜";
   }
   else if(guess===seceretNumber)
   {
       document.querySelector(".message").textContent="!!YOU WON SHEEP!!😜😜";
       document.querySelector("header").style.backgroundColor="#60b347";
       document.querySelector("h1").textContent="TIME FOR KISSES💖💖💖😁🎊!!!"  ; 
       document.querySelector(".number").textContent=seceretNumber; 
       if(score>highScore)
       {
           highScore=score;
           document.querySelector(".highscore").textContent=score;
       }
   }
   
   else if(guess>seceretNumber)
   {
    if(score>1)
    {
       document.querySelector(".message").textContent="!! THE NUMBER IS TOO HIGH SHEEP!!😜😜";
       score--;
       document.querySelector(".score").textContent=score;
    }
    else
    {
        document.querySelector(".message").textContent="GAME OVER!!";
        document.querySelector(".score").textContent=0
        document.querySelector("header").style.backgroundColor="#FF0000";
        document.querySelector("h1").textContent="LOST YOUR GUESSES!!!"
    }
   }
   else if(guess<seceretNumber)
   {
   if(score>1)
   {
       document.querySelector(".message").textContent="!!THE NUMBER IS TOO LOW SHEEP!!😜😜";
       score--;
       document.querySelector(".score").textContent=score;
   }
   else
   {
       document.querySelector(".message").textContent="GAME OVER!!";
       document.querySelector(".score").textContent=0;
       document.querySelector("header").style.backgroundColor="#FF0000";
       document.querySelector("h1").textContent="LOST YOUR GUESSES!!!"
   }
   }
});

document.querySelector(".again").addEventListener("click",function()
{
    score=20;
   seceretNumber=Math.trunc(Math.random()*20+1);
   document.querySelector(".number").textContent="?";
   document.querySelector("header").style.backgroundColor="#000000";
   document.querySelector(".score").textContent=score;
   document.querySelector(".message").textContent="START GUESSING !!!!";
   document.querySelector(".guess").value="";
});