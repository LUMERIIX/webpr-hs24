
**We need to ensure that dependencies are loaded before test exection**:  
```
    <script src="function/function.js"></script> <!--Specified first because functionTest.js needs function.js-->
    <script src="function/functionTest.js"></script>

    <script src="lambda/lambda.js"></script>
    <script src="lambda/lambdaTest.js"></script>

```