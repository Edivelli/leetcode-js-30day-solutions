/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const a = val;
    return {
        toBe(val){
            const b = val;
            if(a!==b)
                throw new Error('Not Equal');
            return true; 
        },
        notToBe(val){
            const c = val;
            if(a===c)
             throw new Error('Equal');
            return true;
        },  
    }
};

try{
expect(5).toBe(null);
}catch(e){
    console.log(e);
}
//expect(5).toBe(null);
//expect(5).notToBe(null); // throws "Equal"
 