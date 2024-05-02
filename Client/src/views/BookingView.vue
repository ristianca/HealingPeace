<template>
  <body class="container text-center text-dark pad-top">
    <div class="h-100vh w-100vw mx-auto">
      <h1>Upcoming events:</h1>
      <pre id="content"></pre>
      <p>Click the button below to list upcoming events:</p>
      <button @click="listUpcomingEvents">Click here</button>
    </div>
  </body>
</template>

<script setup>
import { gapi } from 'gapi-script';

// Function to list upcoming events
const listUpcomingEvents = async () => {
  try {
    const request = {
      'calendarId': 'booking@healingpeacemassage.com',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime',
    };
    
    const response = await gapi.client.calendar.events.list(request);
    console.log('Response:', response);
    const events = response.result.items;
    
    if (!events || events.length === 0) {
      document.getElementById('content').innerText = 'No events found.';
      return;
    }

    // Flatten to string to display
    const output = events.reduce(
      (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
      'Events:\n'
    );
    document.getElementById('content').innerText = output;
  } catch (err) {
    document.getElementById('content').innerText = err.message;
  }
};

// Load Google API client library and initialize it
async function loadAndInitGoogleClient() {
  try {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });

    await new Promise((resolve, reject) => {
      gapi.load('client:auth2', {
        callback: resolve,
        onerror: reject,
      });
    });

    await gapi.client.init({
      apiKey: "YOUR_API_KEY",
      clientId: "YOUR_CLIENT",
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: 'https://www.googleapis.com/auth/calendar.readonly',
    });

    listUpcomingEvents(); // Call the function after initialization
  } catch (error) {
    console.error("Google API Error:", error);
  }
}

// Call the loadAndInitGoogleClient function when the component is mounted

loadAndInitGoogleClient();

</script>

<style>
/* Add your styles here */
</style>