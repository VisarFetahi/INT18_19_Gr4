   
      
      function collectionsonload(){
      

var x = location.hash;

if(x == "#Rolex")
{
  document.getElementsByClassName("PatekPhilippe")[0].style.display = "none";
   document.getElementById("PatekPhilippe").style.display="none";
   
    document.getElementsByClassName("VacheronConstantin")[0].style.display = "none";
   document.getElementById("VacheronConstantin").style.display="none";
   
       document.getElementsByClassName("Hublot")[0].style.display = "none";
   document.getElementById("Hublot").style.display="none";

}
   
 else if(x == "#PatekPhilippe")
{
  document.getElementsByClassName("Rolex")[0].style.display = "none";
   document.getElementById("Rolex").style.display="none";
   
    document.getElementsByClassName("VacheronConstantin")[0].style.display = "none";
   document.getElementById("VacheronConstantin").style.display="none";
   
       document.getElementsByClassName("Hublot")[0].style.display = "none";
   document.getElementById("Hublot").style.display="none";

}
 else  if(x == "#Hublot")
{
  document.getElementsByClassName("Rolex")[0].style.display = "none";
   document.getElementById("Rolex").style.display="none";
   
    document.getElementsByClassName("VacheronConstantin")[0].style.display = "none";
   document.getElementById("VacheronConstantin").style.display="none";
   
       document.getElementsByClassName("PatekPhilippe")[0].style.display = "none";
   document.getElementById("PatekPhilippe").style.display="none";

}

   if(x == "#VacheronConstantin")
{
  document.getElementsByClassName("Rolex")[0].style.display = "none";
   document.getElementById("Rolex").style.display="none";
   
    document.getElementsByClassName("Hublot")[0].style.display = "none";
   document.getElementById("Hublot").style.display="none";
   
       document.getElementsByClassName("PatekPhilippe")[0].style.display = "none";
   document.getElementById("PatekPhilippe").style.display="none";

}


      }


