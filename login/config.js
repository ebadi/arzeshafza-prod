/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
    //databaseURL: "https:/chedoku.firebaseio.com",
    databaseURL: "https://arzeshafza-default-rtdb.europe-west1.firebasedatabase.app/",

    apiKey: "AIzaSyAoMCJT3hSSE-STpAtKAI4kud9VRjdxEQ0",
    authDomain: "arzeshafza.firebaseapp.com",
    projectId: "arzeshafza",
    storageBucket: "arzeshafza.appspot.com",
    messagingSenderId: "556150844443",
    appId: "1:556150844443:web:2fea24bb0f852d4f8c5cbe",
    measurementId: "G-XE6XC720NJ"
};
firebase.initializeApp(config);

const database = firebase.database()
const auth = firebase.auth()

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID =
    'YOUR_OAUTH_CLIENT_ID';
