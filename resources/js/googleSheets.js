// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '759021146581-brl6j3gcecmg6bd7qe76rerv82e7hk6l.apps.googleusercontent.com';

var SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

/**
 * Check if current user has authorized this application.
 */
function checkAuth() {
    gapi.auth.authorize(
        {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
        }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error) {
        // Hide auth UI, then load client library.
        authorizeDiv.style.display = 'none';
        loadSheetsApi();
    } else {
        // Show auth UI, allowing the user to initiate authorization by
        // clicking authorize button.
        authorizeDiv.style.display = 'inline';
    }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
function handleAuthClick(event) {
    gapi.auth.authorize(
        { client_id: CLIENT_ID, scope: SCOPES, immediate: false },
        handleAuthResult);
    return false;
}

/**
 * Load Sheets API client library.
 */
function loadSheetsApi() {
    var discoveryUrl =
        'https://sheets.googleapis.com/$discovery/rest?version=v4';
    gapi.client.load(discoveryUrl).then(retrieveNetProfits);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
        range: 'Class Data!A2:E',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            appendPre('Name, Major:');
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
                // Print columns A and E, which correspond to indices 0 and 4.
                appendPre(row[0] + ', ' + row[4]);
            }
        } else {
            appendPre('No data found.');
        }
    }, function (response) {
        appendPre('Error: ' + response.result.error.message);
    });
}




/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('output');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}




// https://docs.google.com/spreadsheets/d/1LNy4spXbG7JAIU-ApTDINfXuNUilAapofN1zyJ9ezB0/edit?usp=sharing
function retrieveNetProfits() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1LNy4spXbG7JAIU-ApTDINfXuNUilAapofN1zyJ9ezB0',
        range: 'NetReturns!A2:O',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            // var yearlyStats = [];
            var monthlyStats = [];
            var yearlySeries = [{
                name: 'Yearly',
                colorByPoint: true,
                data: []
            }];

            // {
            //     name: '2010',
            //     id: '2010',
            //     data: [
            //         [
            //             'January',
            //             -3.08
            //         ],
            //         [
            //             'February',
            //             0.26
            //         ],
            //         [
            //             'March',
            //             1.26
            //         ]
            //     ]
            // }

            for (i = 0; i < range.values.length; i++) {
                var _dataYearly = {};
                var _dataDrilldown = {};
                var row = range.values[i];
                console.dir(row);
                _dataYearly.name = row[0] + '';
                _dataYearly.y = +(row[13]);
                _dataYearly.drilldown = row[0] + '';


                _dataDrilldown = {
                    name: _dataYearly.drilldown,
                    id: _dataYearly.drilldown,
                    data: [
                        [
                            'January',
                            +(row[1])
                        ],
                        [
                            'February',
                            +(row[2])
                        ],
                        [
                            'March',
                            +(row[3])
                        ],
                        [
                            'April',
                            +(row[4])
                        ],
                        [
                            'May',
                            +(row[5])
                        ],
                        [
                            'June',
                            +(row[6])
                        ],
                        [
                            'July',
                            +(row[7])
                        ],
                        [
                            'August',
                            +(row[8])
                        ],
                        [
                            'September',
                            +(row[9])
                        ],
                        [
                            'October',
                            +(row[10])
                        ],
                        [
                            'November',
                            +(row[11])
                        ],
                        [
                            'December',
                            +(row[12])
                        ]
                    ]
                }

                yearlySeries[0].data.push(_dataYearly);
                monthlyStats.push(_dataDrilldown);
            }

            console.dir(yearlySeries);
            console.dir(monthlyStats);
            drawDrilldownWithData(yearlySeries, monthlyStats);

        } else {
            appendPre('No data found.');
        }
    }, function (response) {
        appendPre('Error: ' + response.result.error.message);
    });
}

// setTimeout(function(){
//     gapi.auth.authorize(
//         { client_id: CLIENT_ID, scope: SCOPES, immediate: false },
//         handleAuthResult);

//         console.log("Hello world");
// }, 5000);
