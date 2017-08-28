const defaultOpts = require('conventional-changelog-angular');
const _ = require('lodash');

module.exports = defaultOpts.then(data => {
	const extented = _.cloneDeep(data.parserOpts);
	extented.headerPattern = /^(\w*)(?:\((.*)\))?-(.*)$/;
	return extented;
});
