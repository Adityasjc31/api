var fs = require('fs');
//read
/*fs.readFile('calc.js', 'utf8', function (err, data) {
    console.log(data);
});*/

//writing
/*fs.appendFile('calc1.js','console.log("done")',function (err) {
      console.log("Data Saved")
})*/
//deleting
fs.unlink('calc1.js',function (err) {
   console.log("Deleted") ;
})