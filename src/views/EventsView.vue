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
        events: 'en.usa#holiday@group.v.calendar.google.com'
          // googleCalendarId: 'c_8efe8b6ba8fd5a81fddc90777bf7d67a379c46d0f0c0d28fe1241c2efa92fe97@group.calendar.google.com'
        // }
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