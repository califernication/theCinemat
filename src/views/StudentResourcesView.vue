<template>
    <div class="flex flex-col w-full px-20 sm:px-28 md:px-44 lg:px-72 mt-14 gap-4">
        <h1 class="text-primary text-5xl font-semibold text-center tacking-wide">Student Resources</h1>
        <p class="text-md text-gray-500">The Cinemat position packets provide information about the responsibilities and guidelines for various Cinemat production roles. If you click the chevron symbol next to a packet, you can learn more about the role. You can also click on the packet to open it in a new tab. If you have any issues accessing the packets or if you want information about a role that is not listed, please contact <a class="text-bold underline text-primary-light" href="mailto:yalecinematicproductions@gmail.com">yalecinematicproductions@gmail.com</a>.</p>
    </div>

    <!-- TODO: add Chevron -->
    <div class="w-full px-20 sm:px-28 md:px-44 lg:px-72 mt-8 mb-6">
        <div class="mx-auto w-full rounded-2xl bg-white flex flex-col gap-4">
            <div v-auto-animate v-for="position in positions" :key="position.title">
                <Disclosure>
                    <DisclosureButton class="flex w-full justify-between rounded-lg bg-primary-light px-4 py-2 text-left text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                        <span>{{ position.title }}</span>
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {{ position.description }}
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const positions = [
    {
        title: "Director of Photography",
        description: "The Director of Photography (DP) is responsible for the visual look of a film or video, including lighting and camera work. The DP works closely with the director to achieve the desired visual aesthetic and mood.",
        link: "https://www.google.com"
    },
    {
        title: "Producer",
        description: "The producer is responsible for managing the budget, schedule, and resources of a film or video production. They work closely with the director and other crew members to ensure that the project is completed on time and within budget.",
        link: "https://www.google.com"
    },
    {
        title: "Assistant Director",
        description: "The assistant director (AD) is responsible for managing the day-to-day operations of the set. They work closely with the director and producer to ensure that the production stays on schedule and that all necessary resources are available when needed.",
        link: "https://www.google.com"
    },
    {
        title: "Gaffer",
        description: "The gaffer is responsible for lighting the set. They work closely with the director of photography to achieve the desired visual aesthetic and mood.",
        link: "https://www.google.com"
    },
    {
        title: "Sound Producer",
        description: "The sound producer is responsible for managing the sound design and recording for a film or video production. They work closely with the director and other crew members to ensure that the sound quality is consistent and high-quality.",
        link: "https://www.google.com"
    },
    {
        title: "Set Designer",
        description: "The set designer is responsible for designing the set for a film or video production. They work closely with the director and other crew members to ensure that the set is visually appealing and functional.",
        link: "https://www.google.com"
    },
    {
        title: "Editor (General)",
        description: "The editor is responsible for assembling and refining the raw footage of a film or video into a cohesive final product. This includes selecting the best takes, trimming and arranging shots, and adding special effects, music, and other elements as needed.",
        link: "https://www.google.com"
    }
]

</script>