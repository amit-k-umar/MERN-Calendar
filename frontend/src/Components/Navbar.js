import React from 'react'
import Login from './Login'
import Signup from './Signup'
import "../CSS/Navbar.css"

const createScheduledNotification = async (tag, title, timestamp) => {
  const registration = await navigator.serviceWorker.getRegistration();
  registration.showNotification(title, {
    tag: tag,
    body: "This notification was scheduled 30 seconds ago",
    showTrigger: new window.TimestampTrigger(timestamp + 30 * 1000)
  });
};

function showNotification(e) {
    createScheduledNotification('hello','hobo',Date.now())
    e.preventDefault();
    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        if ("showTrigger" in Notification.prototype) {
          /* Notification Triggers supported */
          console.log('are ha rre');
        }
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Vibration Sample', {
            body: 'Buzz! Buzz!',
            tag:'jfld',
            icon: '../images/touch/chrome-touch-icon-192x192.png',
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: 'vibration-sample',
            // showTrigger: new TimestampTrigger(timestamp + 30 * 1000)
          });
        });
      }
    });
  }


// const notifi= async () => {
//   const reg = await navigator.serviceWorker.getRegistration();
//   Notification.requestPermission().then(permission => {
//     if (permission !== 'granted') {
//       alert('you need to allow push notifications');
//     } else {
//       const timestamp = new Date().getTime() + 10 * 1000;
//       const scheduledTime = new Date(timestamp);
//       reg.showNotification(
//         'Scheduled Push Notification',
//         {
//           tag: timestamp, // a unique ID
//           body: 'Hi there, it\'s ' + pad(scheduledTime.getHours()) + ':' + pad(scheduledTime.getMinutes()), // content of the push notification
//           showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
//           data: {
//             url: window.location.href, // pass the current url to the notification
//           },
//           // badge: './assets/badge.png',
//           // icon: './assets/icon.png',
//         }
//       );
//       // $button.setAttribute('disabled', 'disabled');
//     }
//   });
// };

function Navbar() {
    return (
        <div className="nav">
            <div className="nav-left">
                <h4>LOGO</h4>
            </div>
            <div className="nav-right">
                <Login/>
                <Signup/>
                <button onClick={showNotification}>hellp</button>
            </div>
        </div>
    )
}

export default Navbar
