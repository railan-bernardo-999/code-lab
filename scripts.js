"use strict"

let hours = 0;
let minutes = 0;
let seconds = 59;

let intervalId = null;

let displayHours = document.getElementById("hours");
let displayMinutes = document.getElementById("minutes");
let displaySeconds = document.getElementById("seconds");

window.addEventListener('DOMContentLoaded', () => {


    requestNotificationPermission()
})

function requestNotificationPermission() {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("Notificações permitidas!");
            }
        });
    }
}

function notification() {
    if (Notification.permission === "granted") {
        new Notification("⏰ Timer finalizado!", {
            body: "O seu tempo acabou.",
            icon: "https://cdn-icons-png.flaticon.com/512/2088/2088617.png"
        });
    }
}

function updateDisplay(h, m, s) {
    displayHours.value = String(h).padStart(2, '0');
    displayMinutes.value = String(m).padStart(2, '0');
    displaySeconds.value = String(s).padStart(2, '0');
}


function startTimer() {
    hours = parseInt(displayHours.value);
    minutes = parseInt(displayMinutes.value);
    seconds = parseInt(displaySeconds.value);


    let totalSecondsLeft = (hours * 3600) + (minutes * 60) + seconds;


    intervalId = setInterval(() => {
        totalSecondsLeft--;

        hours = Math.floor(totalSecondsLeft / 3600);
        minutes = Math.floor((totalSecondsLeft % 3600) / 60);
        seconds = totalSecondsLeft % 60;

        updateDisplay(hours, minutes, seconds)

        if (totalSecondsLeft <= 0) {
            clearInterval(intervalId)
            updateDisplay(0, 0, 0)
            notification()

        }
    }, 50)

}

function restartTimer() {
    clearInterval(intervalId);
    updateDisplay(0, 0, 0)
}


function stopTimer() {
    clearInterval(intervalId)
}