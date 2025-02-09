/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
       return  n++;
        
    };
};


 const counter = createCounter(-2)
 counter() // 10
 counter() // 11
 counter() // 12
 