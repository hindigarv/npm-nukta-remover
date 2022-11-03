import assert  from 'assert';
import removeNukta from "../safe.js"


describe('Nukta Remover (safe import)', function () {
    describe('removeNukta("आज़ाद")', function () {
        it('should remove nukta from "आज़ाद"', function () {
            assert.strictEqual(removeNukta("आज़ाद"), "आजाद");
        });
    });
});