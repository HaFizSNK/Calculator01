function getvalue(event){
    var value = event.target.innerText;
    document.getElementById("input").value += value;
}
     
    

  function clearScreen(){
      document.getElementById("input").value="";
  }
  function Divide(){
    document.getElementById("input").value += "/";

  }
  function Sub(){
    document.getElementById("input").value += "-";
  }
  function Perccentage(){
    document.getElementById("input").value += "%";
  }

  function Mul(){
    document.getElementById("input").value += "*";
  }
  function add(){
    document.getElementById("input").value +="+";

  }                     
  function Result(){
    document.getElementById("input").value = eval(document.getElementById("input").value);
  }