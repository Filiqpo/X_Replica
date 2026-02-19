<script setup>
const whatsHappening = ref([
  {
    title: "#Trump",
    count: "18.9k Tweets",
  },
  {
    title: "#Winterolympics",
    count: "39.4k Tweets",
  },
  {
    title: "#Football",
    count: "58.6k Tweets",
  },
  {
    title: "#Icehockey",
    count: "11.3k Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    name: "Elon Musk",
    handle: "@ElonMusk",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Donald Trump",
    handle: "@DonaldTrump",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "LeBron James",
    handle: "@KingJames",
    image: "https://picsum.photos/200/200",
  },
]);
</script>

<template>
  <section class="flex flex-col">
    <!-- preview -->
    <SidebarPreviewCard title="What's happening">
      <SidebarItem v-for="whatsHappening in whatsHappening">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHappening.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarItem>
    </SidebarPreviewCard>

    <SidebarPreviewCard title="Who to follow">
      <SidebarItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row items-center justify-between p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="whoToFollow.image"
              :alt="whoToFollow.name"
            />

            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs text-gray-400 dark:text-white">
                {{ whoToFollow.handle }}
              </p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarItem>
    </SidebarPreviewCard>
  </section>
</template>
