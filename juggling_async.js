var http = require('http');
var bl = require('bl');

let firstUrl = process.argv[2];
let secondUrl = process.argv[3];
let thirdUrl = process.argv[4];

let promises = [];

for(let i = 0; i < 3; i++){
	promises.push(new Promise((resolve, reject) => {
		http.get(process.argv[2 + i], (res) => {
			res.pipe(bl((err, data) => {
				if(err)
					reject(err);

				resolve(data.toString());
			}));
		});
	}))
}

Promise.all(promises).then(values => {
	values.forEach((text) => {
		console.log(text);
	});
});