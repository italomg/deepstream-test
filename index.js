const deepstream = require('deepstream.io-client-js');

const ds = deepstream('localhost:6020');

ds.login();

var myRecord = ds.record.getRecord('test/johndoe');

myRecord.subscribe( data => { console.log(data) });