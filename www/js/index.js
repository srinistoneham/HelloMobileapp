/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function () {
                //FastClick.attach(document.body);
            }, false);
        }

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        alert('test');
         app.receivedEvent('deviceready');
        GetGPS();

    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');

//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');

//        console.log('Received Event: ' + id);
    }
};

app.initialize();

function GetGPS() {
   // alert('fff');
    showSpinner("Getting GPS Location");
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

//GeoLocation Details
  // onSuccess Geolocation
    //
function onSuccess(position) {

    hideSpinner();
    showSpinner('Loading....');
        var element = document.getElementById('geolocation');
        
        var msg = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />';
      
        // element.innerHTML  = msg;
         alert(msg);
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        hideSpinner();
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }


    function showSpinner(msg) {
        var options = {
            customSpinner: true,
            position: "middle",
            label: msg,
            bgColor: "#000",
            opacity: 0.5,
            color: "#000"
        };
        window.plugins.wizSpinner.show(options);
        


        
    }

    function hideSpinner() {
        window.plugins.wizSpinner.hide();
    }