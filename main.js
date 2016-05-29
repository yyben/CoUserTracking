var fname='https://gitcdn.xyz/repo/yyben/CoUserTracking/master/lecture_actions_test.csv';

// var finished = function(error, results) {
//   console.log(results);
// }

// var foo = function(i, callback) {
//   console.log(i);
//   callback(null, i);  // first argument is error reason, second is result
// }

// queue(2)
//   .defer(foo, 1)
//   .defer(foo, 2)
//   .defer(foo, 3)
//   .defer(foo, 4)
//   .awaitAll(finished); 

// var foo = function(i, callback) {
//   console.log(i);
//   callback(null, i);  // first argument is error reason, second is result
// }

 console.log(fname)
// queue(2) //load multiple files
//   .defer(d3.csv, fnames[0])
//   .defer(d3.csv, fnames[1])
//   .defer(d3.csv, fnames[2])
//   .defer(d3.csv, fnames[3])
//   .await(parseData);


function parseData(fname){
 	d3.csv(fname,function(d){
 		//console.log(d)

 	});

 }
 parseData();