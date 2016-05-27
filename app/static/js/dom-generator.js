var DASHBOARD_DATA_VIEWER_SECTION = '<div class="panel-body">\n    <div>\n        <ul class="nav nav-tabs" id="selection-tabs">\n            <li class="active"><a href="#all-quads" role="tab" data-toggle="tab">Quadrants</a></li>\n            <li><a role="tab" data-toggle="tab" href="#rain">Rain</a></li>\n            <li><a role="tab" data-toggle="tab" href="#cistern">Cistern</a></li>\n            <li><a role="tab" data-toggle="tab" href="#other-sensors">Other Sensors</a></li>\n        </ul>\n    </div>\n    <div class="tab-content">\n        <div id="all-quads" role="tabpanel" class="tab-pane active tab-plot">\n            <div id="combined-graphs-menu" class="row">\n                <div class="btn-toolbar" role="toolbar" aria-label="...">\n                    <div class="btn-group btn-group-sm" role="group" aria-label="..." data-toggle="buttons">\n                        <div><h6>Quadrants</h6></div>\n                        <label class="btn btn-default">\n                            <input type="checkbox" name="Quadrant" value="q-1">1\n                        </label>\n                        <label class="btn btn-default">\n                            <input type="checkbox" name="Quadrant" value="q-2">2\n                        </label>\n                        <label class="btn btn-default">\n                            <input type="checkbox" name="Quadrant" value="q-3">3\n                        </label>\n                        <label class="btn btn-default">\n                            <input type="checkbox" name="Quadrant" value="q-4">4\n                        </label>\n                    </div>\n                    <div class="btn-group btn-group-sm" role="group" aria-label="..." data-toggle="buttons">\n                        <div><h6>Probes</h6></div>\n                        <label class="btn btn-default">\n                            <input type="checkbox" name="Probe" value="p-1">1\n                        </label>\n                        <label class="btn btn-default">\n                            <input type="checkbox" name="Probe" value="p-2">2\n                        </label>\n                    </div>\n                    <div class="btn-group btn-group-sm" role="group" aria-label="..." data-toggle="buttons">\n                        <div><h6>Temperature</h6></div>\n                        <label class="btn btn-default">\n                            <input type="checkbox" name="Temp" value="t-1">1\n                        </label>\n                    </div>\n                    <div class="btn-group btn-group-sm">\n                        <div><h6>View Mode</h6></div>\n                        <button data-toggle="dropdown" class="btn btn-default dropdown-toggle">Separated<span class="caret"></span></button>\n                        <ul class="dropdown-menu">\n                            <li><input type="radio" id="separated" name="view-mode" value="separated" checked><label for="separated">Separated</label></li>\n                            <li><input type="radio" id="combined" name="view-mode" value="combined"><label for="combined">Combined</label></li>\n                            <li><input type="radio" id="synchronized" name="view-mode" value="synchronized"><label for="synchronized">Synchronized</label></li>\n                        </ul>\n                    </div>\n                    <div class="btn-group btn-group-sm text-center">\n                        <div><h6>Average</h6></div>\n                        <input type="checkbox" name="average-checkbox" data-size="small">\n                    </div>\n                    <div class="btn-group btn-group-sm text-center">\n                        <div><h6>Date Range</h6></div>\n                        <div class="input-daterange input-group" id="datepicker">\n                            <input type="text" class="input-sm form-control" data-size="small" name="start" />\n                            <span class="input-group-addon">to</span>\n                            <input type="text" class="input-sm form-control" data-size="small" name="end" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="text-center">\n                <button type="button"\n                        class="btn btn-primary btn-sm graphs-plot-button" onclick="generateMixedGraphs_()">\n                    <span class="glyphicon glyphicon-triangle-right"></span> Plot\n                </button>\n            </div>\n            <hr>\n            <div id="plot-area"></div>\n        </div>\n        <div id="rain" role="tabpanel" class="tab-pane tab-plot">\n\n            <div id="rain-graphs-menu" class="row">\n                <div class="btn-toolbar" role="toolbar" aria-label="...">\n                    <div class="btn-group btn-group-sm text-center">\n                        <div><h6>Date Range</h6></div>\n                        <div class="input-daterange input-group" id="rain-datepicker">\n                            <input type="text" class="input-sm form-control" data-size="small" name="start" />\n                            <span class="input-group-addon">to</span>\n                            <input type="text" class="input-sm form-control" data-size="small" name="end" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="text-center">\n                <button type="button"\n                        class="btn btn-primary btn-sm graphs-plot-button" onclick="generateRainGraphs()">\n                    <span class="glyphicon glyphicon-triangle-right"></span> Plot\n                </button>\n            </div>\n            <hr>\n            <div id="rain-plot-area"></div>\n\n        </div>\n        <div id="cistern" role="tabpanel" class="tab-pane tab-plot">\n\n            <div id="cistern-graphs-menu" class="row">\n                <div class="btn-toolbar" role="toolbar" aria-label="...">\n                    <div class="btn-group btn-group-sm text-center">\n                        <div><h6>Date Range</h6></div>\n                        <div class="input-daterange input-group" id="cistern-datepicker">\n                            <input type="text" class="input-sm form-control" data-size="small" name="start" />\n                            <span class="input-group-addon">to</span>\n                            <input type="text" class="input-sm form-control" data-size="small" name="end" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="text-center">\n                <button type="button"\n                        class="btn btn-primary btn-sm graphs-plot-button" onclick="generateCisternGraphs()">\n                    <span class="glyphicon glyphicon-triangle-right"></span> Plot\n                </button>\n            </div>\n            <hr>\n            <div id="cistern-plot-area"></div>\n\n        </div>\n        <div id="other-sensors" role="tabpanel" class="tab-pane tab-plot">\n\n            <div id="other-sensors-graphs-menu" class="row">\n                <div class="btn-toolbar" role="toolbar" aria-label="...">\n                    <div class="btn-group btn-group-sm text-center">\n                        <div><h6>Date Range</h6></div>\n                        <div class="input-daterange input-group" id="other-sensors-datepicker">\n                            <input type="text" class="input-sm form-control" data-size="small" name="start" />\n                            <span class="input-group-addon">to</span>\n                            <input type="text" class="input-sm form-control" data-size="small" name="end" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="text-center">\n                <button type="button"\n                        class="btn btn-primary btn-sm graphs-plot-button" onclick="generateOtherSensorsGraphs()">\n                    <span class="glyphicon glyphicon-triangle-right"></span> Plot\n                </button>\n            </div>\n            <hr>\n            <div id="other-sensors-plot-area"></div>\n\n        </div>\n    </div>\n</div>';
var NOT_SELECTED_SITE_WARNING = '<div class="col-xs-12 alert alert-info"><div class="glyphicon glyphicon-exclamation-sign"></div><div>Select a green site from the map to display information here.</div>';
var MAP_TOOLBAR_HANDHELD = '<div id="map-toolbar" class="btn-group">\
        <button type="button" class="btn btn-default" onclick="openToolbar()">Dashboard\
        </button>\
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\
        <span class="caret"></span>\
        </button>\
        <ul class="dropdown-menu" role="menu">\
        <li><a href="#"onclick="populateSitesOnMap()">Show Sites</a></li>\
        <li><a href="#"onclick="clearMap()">Clear Map</a></li>\
        </ul>\
        </div>'

var MAP_TOOLBAR_NORMAL = 
    '<div id="map-toolbar" class="btn-group">\
            <button type="button" class="btn btn-default" onclick="openToolbar()">Dashboard</button>\
            <button type="button" class="btn btn-default" onclick="populateSitesOnMap()">Show Sites</button>\
            <button type="button" class="btn btn-default" onclick="clearMap()">Clear Map</button>\
     </div>';


function initializeQuadrantsDomElements() {
	// for(var i=0; i<streams.length; i++) {
	// 	$("#quad-" + streams[i].quad).append('<div class="row dygraph-plot-row-wrapper">' +
	// 					'<div class="col-sm-2 text-center"></div>' +
	// 					'<div class="col-sm-8 text-center graph-container">' +
	// 						'<div id=' + streams[i].name + ' style="width:100%"></div>' +
	// 					'</div>' +
	// 					'<div class="col-sm-2 text-center"></div>' +
	// 				'</div>');
	// }
}

function showMapToolbar() {
    if ($(window).width() <= 500) {
        mapToolbar("Handheld");
    } else {
        mapToolbar("Normal");
    }
}

function mapToolbar(screenSize) {
    if (screenSize === "Handheld") {
        $("#map-toolbar").replaceWith(MAP_TOOLBAR_HANDHELD);
    } else {
        $("#map-toolbar").replaceWith(MAP_TOOLBAR_NORMAL);
    }

}

$(document).ready(function() {
	initializeQuadrantsDomElements();
    showMapToolbar();
    $(window).resize(function() {
        if ($(window).width() <= 500) {
            mapToolbar("Handheld");
        } else {
            mapToolbar("Normal");
        }
    });
});