var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback){
	fs.readdir(directory, (err, list) => {
		if(err) return callback(err);

		let files = list.filter((file) => {
			if(path.extname(file) === '.' + extension){
				return file;
			}
		});

		callback(null, files);
	});
}