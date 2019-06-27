const assert = require('assert');

const {message} = new assert.AssertionError({
    actual:1,
    expected:2,
    operator:'strictEqual'
})
try{
    assert.strictEqual(1,2)
}catch(err){
    console.log(message)
    // assert(err instanceof assert.AssertionError);
    // assert.strictEqual(err.message, message);
    // assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
    // assert.strictEqual(err.actual, 1);
    // assert.strictEqual(err.expected, 2);
    // assert.strictEqual(err.code, 'ERR_ASSERTION');
    // assert.strictEqual(err.operator, 'strictEqual');
    // assert.strictEqual(err.generatedMessage, true);
}
