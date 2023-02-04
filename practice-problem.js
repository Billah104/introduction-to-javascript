/* 1. What is Javascript?
answer:  JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces  for working with text, dates, regular expressions, standard data structures, and the Document Object Model.

2. How does JavaScript Work?
answer: JavaScript is a client-side scripting language and one of the most efficient, commonly used scripting languages. The term .client-side scripting language means that it runs at the client-side inside the web-browsers, but one important thing to remember is that client's web-browser also needs to support the JavaScript or it must be JavaScript enabled. Nowadays, most of the modern web browsers support JavaScript and have their JavaScript engines. For example, Google Chrome has its own JavaScript engine called V8.

3. What is variables?
answer: Variables are containers for storing data (storing data values).

A JavaScript variable is simply a name of storage location. There are two types of variables in JavaScript : local variable and global variable.


4. How to declare variables ?
answer: 4 Ways to Declare a JavaScript Variable:
        *Using var
        *Using let
        *Using const
        *Using nothing

Declaring a variable takes 5 things.

(i) The var statement declares a variable.
(ii) Variable name: Variable must be identification with unique names.
(iii) Assignment operators "=": use an "=" operator to assign a value.
(iv) value: Specifies the value to assign to the variable.
(v) use a semicolon to indicate the end of var statement.

example:::::::::::::::::::::::::    var applePrice = 150;     ::::::::::::::::::::::::::::::::::::

5. How to change or update the value of variable?
answer: example:
                    
                    var applePrice = 150;

                    // applePrice= 170;
                    // applePrice = applePrice+40;
                    // applePrice +=60;
                    // applePrice ++;

                    console.log(applePrice)

6. What are the types of variables? what are they?
answer: JavaScript has 8 Datatypes
            1. String
            2. Number
            3. Bigint
            4. Boolean
            5. Undefined
            6. Null
            7. Symbol
            8. Object

        The Object Datatype
        The object data type can contain:

            1. An object
            2. An array
            3. A date

7. What are the primitive and non-primitive data types in javaScript?
answer: In JavaScript, a primitive is data that is not an object and has no methods or properties.  There are 7 primitive data types:
            1. String: var nameHis = "Abdul Hamid";
            2. Number:  var applePrice = 130;
            3. Bigint:  var
            4. Boolean: var isHappy = true;
            5. Undefined: 
            6. Symbol:
            7. Null:


8. how to declare the name of the variable? no thing can be written in the name. that is, write about the naming convention of the variable?

answer: Go Variable Naming Rules: 
A variable can have a short name (like x and y) or a more descriptive name (age, price, carName, etc.).

**Go variable naming rules:

    1. A variable name must start with a letter or an underscore character (_)
    2. A variable name cannot start with a digit
    3. A variable name can only contain alpha-numeric characters and underscores (a-z, A-Z, 0-9, and _ )
    4. Variable names are case-sensitive (age, Age and AGE are three different variables)
    5. There is no limit on the length of the variable name
    6. A variable name cannot contain spaces
    7. The variable name cannot be any Go keywords
    8. Multi-Word Variable Names
    9. Variable names with more than one word can be difficult to read.

**There are several techniques you can use to make them more readable:

### Camel Case:
--- Each word, except the first, starts with a capital letter:
    ex: var myVariableName = "John";

### Pascal Case:
--- Each word starts with a capital letter:
    ex: var MyVariableName = "John";

### Snake Case:
--- Each word is separated by an underscore character:
    ex: var my_variable_name = "John";


9. How do =, -, *, /, % between two variables?
answer: 



10. Shorthands should be known. Especially +=, -=, *=, /= should be known.
answer: "+=" = means adding some value to existing value
    ex: var price = 30;
        price += 10;
        console.log(price)

        "-=" = means deducting some values from the current value of the variable
    ex: var price = 30;
        price -= 5;
        console.log(price)    

        "*=" = means multiply some value to existing value
    ex: var price = 30;
        price *=10;
        console.log(price)
        
        "/=" = means division some vale form the current value of the variable
    ex: var price = 30;
        price /= 10;
        console.log(price)
   

11. What is the function of (++) and (--) ? 
answer: "++" = means adding 1 to the existing value
    ex: var age = 15;
        // age = age +1;
        age++;

        "--" = means deducting 1 from the existing value
    ex: var love = 100;
        // love = love-1;
        love--; 



12. What do parseInt, parseFloat, toFixed do?
answer:  #. parseInt():
            -- The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).


         #. parseFloat():
            -- The parseFloat() function parses a string argument and returns a floating point number. 

         #. toFixed():
            -- The toFixed() method converts a number to a string.

            -- The toFixed() method rounds the string to a specified number of decimals.
            
13. Array is a thing. How does this work? How to declare an Array?
answer:
         Array: These values can be of any data type — meaning you can store a string, number, boolean, and other data types in one variable.
         An array can hold many values under a single name, and you can access the values by referring to an index number.

          var tableItems = ["book", "sunglass", "pen", "notebook"];

14. How to find out how many elements are in the array?

answer: var tableItems = ["book", "sunglass", "pen", "notebook"];

        console.log(tableItems.length);

15. How the position (index) of the elements of the array works. How much does it start with? And how values ​​change?
answer: JavaScript arrays are zero-indexed: the first element of an array is at index 0 , the second is at index 1 , and so on — and the last element is at the value of the array's length property  -1.

16. What does an element's index value of -1 mean?
answer: The indexof() method returns(-1) if the value is not found. then output come undefined. 

17. How to find the value of an element in an array with index?
answer: 
        var tableItems = ["book", "sunglass", "pen", "notebook"];
        // var penIndex = tableItems[2];
        // console.log(penIndex);
        console.log(tableItems[3]);

18. How to change the value of an element of an array at an index position?
answer: set element value by index:

        var tableItems = ["book", "sunglass", "pen", "notebook"];
        tableItems[3] = "handbook";
        console.log(tableItems);

19. How can you find the value of an element in an array, now its index? 
answer:
        var tableItems = ["book", "sunglass", "pen", "notebook"];
        console.log(tableItems.indexOf("sunglass"))

        // var tableIndex = tableItems.indexof(notebook);
        // console.log(tableIndex)


20. Let's say you're looking for an element with an index. But without giving its value you get undefined. What do you understand by seeing that?
answer:  the indexof() method returns -1 if the value is not found

        var tableItems = ["book", "sunglass", "pen", "notebook"];
        console.log(tableItems.indexOf("handbook"))

        // var tableIndex = tableItems.indexof(handbook);
        // console.log(tableIndex)


21. How to add an element as the last element in an Array? If you want to remove the last element from the Array, how will you remove it?
answer: push(): The push() method adds new items to the end of an array.
        var tableItems = ["book", "sunglass", "pen", "notebook"];
        tableItems.push("handbook");
        console.log(tableItems)

        pop(): The pop() method removes the last element from an array.        
        var tableItems = ["book", "sunglass", "pen", "notebook"];
        tableItems.pop();
        console.log(tableItems)

22. If you want to add an element as the first element in an Array, how do you add it? If you want to remove the first element from the Array, how will you remove it?
answer: shift(): The shift() method removes the first element form an array
        var tableItems = ["book", "sunglass", "pen", "notebook"];
        tableItems.shift();
        console.log(tableItems);

        unshift(): The unshift() method adds new elements to the beginning of an array.
        var tableItems = ["book", "sunglass", "pen", "notebook"];
        tableItems.unshift("handbook");
        console.log(tableItems);

23. How to compare What do these mean: >, <, ==, !=, <=, >=, ===, !==, &&, ?

answer:
        (==)  = (equal to)
        (===) = (equal value and equal type)
        (!=)  = (not equal)
        (!==) = (not equal value or not equal type)
        (>)   = (greater than)
        (<)   = (less than)
        (>=)  = (greater than or equal to)
        (<=)  = (less than or equal to)
        (&&)  = (and)-- The (and) operator returns true if both expressions are true. Otherwise it returns false.
        (||)  = (or)-- The(or) operator returns true if one or both expressions are true. Otherwise it returns false. 



25. Show this as the output 39 times?
answer: 
        for (var i = 1; i<=39; i++){
            console.log(i)
            console.log("I'm not in a good mood")
        }

26. How the while loop works?
answer: 
        var roastGiven = 0;
        while (roastGiven<5) {
            console.log("Roast Den , Please!!");
            roastGiven++;
        }

27. How the for loop works?
answer:
        for(var i = 0; i<5; i++){
            console.log("Roast Den, Please!!",);
        }

28.



29. Write a code and display all the numbers from 58 to 98?
answer: 
        for(var i = 58; i<= 98; i++){
            console.log(i);
        }

30. Write a code and show all the even numbers from 412 to 456 ?
answer: 
        for(var i = 412; i<= 456; i+=2){
            console.log(i);
        }

31. Write a code and show all the odd numbers from 581 to 623?
answer: 
        for(var i = 581; i<= 623; i+=2){
            console.log(i);
        }

32. What is the difference between while and for loop?
answer: # For Loop:

            1. It is used when the number of iterations is known.	
            2. In case of no condition, the loop is repeated infinite times.	
            3. Initialization is not repeated.	
            4. Statement of Iteration is written after running.	
            5. Initialization can be in or out of the loop	
            6. The nature of the increment is simple.	
            7. Used when initialization is simple.	

        # While Loop:

            1. It is used when the number of iterations is not known.
            2. In case of no condition, an error will be shown.
            3. Initialization is repeated if carried out during the stage of checking.
            4. It can be written at any place.
            5. Initialization is always out of the loop.
            6. The nature of the increment is complex.
            7. Used when initialization is complex.

33. 33 Make an array with the names of the things you have learned so far. Then use a for loop to output all elements of that array.
answer:
        var Items = ['numeric', 'string', 'boolean', 'indexof', 'shorthand', 'parseInt', 'parseFloat', 'toFixed', 'remainder', 'push', 'pop', 'shift', 'unshift', 'operators', 'if', 'else', 'while loop', 'for loop']

        var i = 0;

        while(i < Items.length){
            var item = Items[i];
            i++;
            console.log(item);
        }

34. Create an array with the names of all the mobile phone models you have used so far. Then show the elements of that array as output one by one with a while loop?
answer: 
        var mobileUses = ["nokia 1100", 'nokia 1200', 'symphony', 'samsung button', 'samsung galaxy j3', 'redmi 9']
        var i = 0;
        while (i<mobileUses.length) {
            var mobileUse = mobileUses[i];
            i++;
            console.log(mobileUse)
        }

35. Run a for loop. 30 to 86. And when this loop goes to 44, it will brake. Code that thing?
answer: 
        for(var i = 30; i<= 86; i++){
            console.log(i);
            if(i>= 44){
                break;
            }
        }


36. Write an array with the prices of all the books you have. The books whose price is above 200 rupees will be skipped. That is, they will not show as output. The rest will be displayed as output. See if you can?
answer: 
        var bookPrices = [100, 150, 180, 130, 250, 230, 300, 450, 170, 150, 120];
            
        for(var i = 0; i<bookPrices.length; i++){
            var bookPrice = bookPrices[i];
            if(bookPrice>200){
                continue;
            }
            console.log(bookPrice);
            
        }

























/*