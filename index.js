
/*function add(a, b) {
    return a + b;
}

add(5, 10)

//Arguments are the values you pass in
//param are the named variables inside the function
//that recieve

/*function sub(x, y) {
    return x - y;
}

sub(10,6);

funtion foo(z = 3) {
    console.log(z);
}

foo(undefined);
*/


/*funtion multipleArgs(a, b, c) {
    return (a + b + c)
}

multipleArgs(10,12,42);
console.log("Length is " + multipleArgs.length);

*/
/*
function hello(e, f, g) {
    console.log(arguments.length);
    
}

hello(20, 3)


function foof(x, y = 1) {
    console.log(foof.length);
    
}

foof(1,3)

// with the foof.length it shows how many values are left to be entered to fill all parameters with an arguement.
//foof.length will show the amount of variables that do not have an assigned value.

function add5(a, b = 5) {
 let result = (a + b);
 console.log(result);
}

add5(9)
*/

function foo(...args) {
    console.log(args[3]);
    
}

var arr = [1, 2, 3, 4, 5]

foo(...arr)

//...args is a spread operator this operator allows an iterable to expand in places where 0+ arguments are expected,
//which means that if you are unsure of how many parameters will be entered at any given time this is a helpful 
//operator to use as it can also take arrays as parameters and will always save data within its own array, seperate
//from the individual parameters within the function. Accessable with the key word "args", or whatever word was 
//defined after the "..." in your function.

function goods(x, y, z, ...lala) {
    console.log(x, y, z, lala);
    console.log(lala);
}

goods(1, 2, 3, 4, 5, 6, 7, 8)

//share link to repo or screen shot with examples of what was covered today.args
//use spread rest and gather operators.


//example of spread operator


function spread(a, b, ...args) {
    console.log(args, a, b, args);

}

spread(4, 12, 9, 42)

function rest(g, h , ...test) {
    console.log(test);
    console.log(test[3] + test[0]);
    
    
}

rest(9,2,4,1,5,7,)

