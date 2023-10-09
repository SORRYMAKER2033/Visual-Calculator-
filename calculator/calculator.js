var display = document.getElementById('display');

function appendToScreen(btnVal) {
  display.value += btnVal;
}

function clearScreen() {
  display.value = '';
}

function deleteCharacter() {
  if (display.value) {
    display.value = display.value.slice(0, -1);
  }
}

// 符号按钮点击事件
document.getElementById("buttons").addEventListener("click", function(e) {
  if(e.target.matches("button")) {
    var btnVal = e.target.innerText;
    switch(btnVal) {
      case '=':
        try {
          var result = new Function('return ' + display.value)();
          display.value = result.toString();
        } catch(err) {
          display.value = "错误";
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
      case '.':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        appendToScreen(btnVal);
        break;
    }
  }
});

// 控制键点击事件
document.getElementById("control-keys").addEventListener("click", function(e) {
  if(e.target.matches("button")) {
    var btnVal = e.target.innerText;
    switch(btnVal) {
      case 'C':
        clearScreen();
        break;
      case 'DEL':
        deleteCharacter();
        break;
    }
  }
});

// 高级运算按钮点击事件
document.getElementById("advanced-buttons").addEventListener("click", function(e) {
  if(e.target.matches("button")) {
    var op = e.target.innerText;
    var curVal = parseFloat(display.value);
    switch(op) {
      case 'e^x':
        display.value = Math.exp(curVal).toString();
        break;
      case 'e':
        display.value = Math.E.toString();
        break;
      case 'ln':
        display.value = Math.log(curVal).toString();
        break;
      case 'x^y':
        display.value = `Math.pow(${curVal}, y)`; // 这里假设y是想要使用的变量
        break;
      case '√':
        display.value = Math.sqrt(curVal).toString();
        break;
      case 'sin':
        var rad = curVal * (Math.PI / 180); // 把角度转换为弧度
        display.value = Math.sin(rad).toString();
        break;
      case 'cos':
        var rad = curVal * (Math.PI / 180); // 把角度转换为弧度
        display.value = Math.cos(rad).toString();
        break;
      case 'tan':
        var rad = curVal * (Math.PI / 180); // 把角度转换为弧度
        display.value = Math.tan(rad).toString();
        break;
    }
  }
});