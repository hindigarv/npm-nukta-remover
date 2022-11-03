import assert  from 'assert';
import {} from "../index.js"


describe('Nukta Remover', function () {
    describe('"आज़ाद".removeNukta()', function () {
        it('should remove nukta from आज़ाद', function () {
            assert.strictEqual("आज़ाद".removeNukta(), "आजाद");
        });
    });
    describe('removeNukta("आज़ाद")', function () {
        it('should fail because removeNukta() function is not imported', function () {
            assert.throws(() => removeNukta("आज़ाद"), ReferenceError, "removeNukta is not defined")
        });
    });
});