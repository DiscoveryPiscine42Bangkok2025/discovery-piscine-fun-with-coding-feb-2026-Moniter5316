const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculate);
function calculate() 
{
      const left = document.getElementById("left").value;
      const right = document.getElementById("right").value;
      const op = document.getElementById("operator").value;

      if (!Number.isInteger(Number(left)) || Number(left) < 0 ||
        !Number.isInteger(Number(right)) || Number(right) < 0) {
            alert("Error :(");
            return;
            }


      const l = parseInt(left, 10);
      const r = parseInt(right, 10);
      let result;

      if ((op === "/" || op === "%") && r === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
      }

      switch (op) {
        case "+": result = l + r; break;
        case "-": result = l - r; break;
        case "*": result = l * r; break;
        case "/": result = l / r; break;
        case "%": result = l % r; break;
      }

      alert(result);
      console.log(result);
    }

    
    setInterval(() => {
      alert("Please, use me...");
    }, 30000);