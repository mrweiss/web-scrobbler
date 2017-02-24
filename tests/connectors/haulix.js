'use strict';

module.exports = function (driver, connectorSpec) {
	// The actual player is available only to subscribers
	connectorSpec.shouldLoadWebsite(driver, {
		url: 'http://www.haulix.com/'
	});
};
