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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function goToProfile() {
    window.location.href = "profile.html";  
}

function goToOptions() {
    window.location.href = "Options.html";  
}
function goToHome() {
    window.location.href = "index.html";  
}
function goToAbout() {
    window.location.href = "about.html";  
}
function goToContact() {
    window.location.href = "contact.html";  
}
function goToHelp() {
    window.location.href = "help.html";  
}
function goToTerms() {
    window.location.href = "terms.html";  
}
function goToPrivacy() {
    window.location.href = "privacy.html";  
}
function goToLogout() {
    // Perform logout action here
    // For example, clear session data or redirect to a login page
    window.location.href = "login.html"; // Redirect to login page
}
function goToLogin() {
    window.location.href = "login.html";  
}
function goToRegister() {
    window.location.href = "register.html";  
}
function goToForgotPassword() {
    window.location.href = "forgot_password.html";  
}
function goToResetPassword() {
    window.location.href = "reset_password.html";  
}
function goToDashboard() {
    window.location.href = "dashboard.html";  
}
function goToNotifications() {
    window.location.href = "notifications.html";  
}
function goToMessages() {
    window.location.href = "messages.html";  
}
function goToSearch() {
    window.location.href = "search.html";  
}
function goToFavorites() {
    window.location.href = "favorites.html";  
}
