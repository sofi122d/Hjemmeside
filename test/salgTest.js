const assert = require('assert').assert;
const saveFile = require('./../src/helpers/db');

describe ('db', function(){
    it('deleUser should return empty string', function(){
        let result = saveFile.saveFile();
        assert.equal(result, true)
    });
});