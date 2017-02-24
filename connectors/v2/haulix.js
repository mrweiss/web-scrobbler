'use strict';

/* global Connector */

Connector.playerSelector = '.jp-single-player';

Connector.getArtist = function () {
	return $('#artist').text();
};

Connector.trackSelector = '.jp-single-player #track-title';

Connector.trackArtImageSelector = '#photo .GalleryItem:first img';

Connector.currentTimeSelector = '#jplayer_play_time';

Connector.durationSelector = '#jplayer_total_time';

Connector.isPlaying = function () {
	return $('.jp-single-player .jp-interface').hasClass('.jp-state-playing');
};
