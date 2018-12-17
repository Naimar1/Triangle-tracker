function getResult(){
  
      var sideA = parseInt(document.getElementById("side-a").value);
      var sideB = parseInt(document.getElementById("side-b").value);
      var sideC = parseInt(document.getElementById("side-c").value);
  
   
      if (sideA === sideB && sideB === sideC) {
            alert("This is an equilateral triangle");
   }
      else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      alert("This is isosceles triangle");
   } 
      else if ((sideA + sideB) <= sideC || (sideA + sideC) <= sideB || (sideB + sideC) <= sideA) {
      alert("Not a definite triangle");
}






};



