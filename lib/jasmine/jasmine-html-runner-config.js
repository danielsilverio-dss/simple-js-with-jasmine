{
    "jsonMocksPath": "./mocks/", // default, optional
    "outputFile": "./TEST-Jasmine.xml", // default, blank to bypass file output
    "phantomJsLocation": "/usr/local/bin/phantomjs", // only needed if not available in env path. overridable by command line arg --phantom-js-location
    "quiet": false, // default, if true it won't ouput anything to the console
    "serverRootPath": ".", // default
    "servicesPrefix": "/webservice/", // default, optional
    "testHtmlFile": "SpecRunner.html", // default, overridable by command line arg -t
    "timeout": 300000, // default, miliseconds until execution stops if tests didn't end
    "webServices": { // optional
      "get": {
        "YOUR_WEBSERVICE_URI": "WEBSERVICE_JSON_RESULT_FILE.json",
        "YOUR_WEBSERVICE_URI": "WEBSERVICE_JSON_RESULT_FILE.json"
      },
      "post": {
        "YOUR_WEBSERVICE_URI": "WEBSERVICE_JSON_RESULT_FILE.json",
        "YOUR_WEBSERVICE_URI": "WEBSERVICE_JSON_RESULT_FILE.json"
        }
    }
}
