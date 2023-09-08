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
        height: 550,
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
    <div class="flex flex-col w-full px-20 sm:px-28 md:px-44 lg:px-72 mt-14 mb-6 gap-4">
        <h1 class="text-primary text-5xl font-semibold text-center tacking-wide">Calendar</h1>
        <p class="text-md text-gray-500">Our monthly calendar showcases our technical film workshops, social events, talks from special guests, and more! These are the same events shared on our weekly newsletter.</p>
    </div>
    <div class="flex justify-center px-20 sm:px-28 md:px-44 lg:px-72">
        <FullCalendar class="grow" :options='calendarOptions' />
    </div>
</template>