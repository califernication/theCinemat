<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, googleCalendarPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        events: [
          { title: 'Meeting', start: new Date() }
        ],
        googleCalendarApiKey: 'AIzaSyD_oqepo7ebC5k4u2xaVa5nZ3uy3UsJexU',
        events: {
          googleCalendarId: '8bc87f1ac86a518a0e9962d29982a0222795dc96a34188293511e6e6a39f716e@group.calendar.google.com'
        }
      }
    }
  }
}
</script>

<template>
  <h1>Demo App</h1>
  <FullCalendar :options='calendarOptions' />
</template>