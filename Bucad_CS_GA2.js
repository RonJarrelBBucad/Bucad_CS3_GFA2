<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arithmetic Operations</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 50px;
        }
        input {
            margin: 10px;
            padding: 5px;
        }
        button {
            padding: 5px 10px;
            margin: 5px;
            cursor: pointer;
        }
        #result {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</head>
<body>

    <h1>Arithmetic Operations</h1>
    
    <input type="number" id="num1" placeholder="Enter first number" />
    <input type="number" id="num2" placeholder="Enter second number" />
    
    <br><br>
    
    <button onclick="performOperation('+')">+</button>
    <button onclick="performOperation('-')">-</button>
    <button onclick="performOperation('*')">*</button>
    <button onclick="performOperation('/')">/</button>
    <button onclick="performOperation('%')">%</button>
    
    <p id="result">Results will be displayed here.</p>

    <script>
        function performOperation(operation) {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('result').textContent = "Please enter valid numbers in both textboxes.";
                return;
            }

            switch (operation) {
                case '+':
                    result = num1 + num2;
                    document.getElementById('result').textContent = `The sum of ${num1} and ${num2} is ${result}.`;
                    break;
                case '-':
                    result = num1 - num2;
                    document.getElementById('result').textContent = `The difference of ${num1} and ${num2} is ${result}.`;
                    break;
                case '*':
                    result = num1 * num2;
                    document.getElementById('result').textContent = `The product of ${num1} and ${num2} is ${result}.`;
                    break;
                case '/':
                    if (num2 === 0) {
                        document.getElementById('result').textContent = "Cannot divide by zero.";
                    } else {
                        result = num1 / num2;
                        document.getElementById('result').textContent = `The quotient of ${num1} and ${num2} is ${result}.`;
                    }
                    break;
                case '%':
                    result = num1 % num2;
                    document.getElementById('result').textContent = `The remainder of ${num1} and ${num2} is ${result}.`;
                    break;
            }
        }
    </script>

</body>
</html>