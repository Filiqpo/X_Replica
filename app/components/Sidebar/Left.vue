<script setup>
import { HomeIcon } from "@heroicons/vue/16/solid";
import X from "../Logo/X.vue";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/vue/24/outline";

const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 rounded-full hover:bg-gray-200 w-min dark:hover:bg-dim-200"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <X />
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-3">
      <SidebarTab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name> Home </template>
      </SidebarTab>

      <SidebarTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name> Explore </template>
      </SidebarTab>

      <SidebarTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name> Notifications </template>
      </SidebarTab>

      <SidebarTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name> Messages </template>
      </SidebarTab>

      <SidebarTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name> Bookmarks </template>
      </SidebarTab>

      <SidebarTab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name> Lists </template>
      </SidebarTab>

      <SidebarTab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name> Profile </template>
      </SidebarTab>

      <SidebarTab>
        <template v-slot:icon>
          <EllipsisHorizontalCircleIcon />
        </template>
        <template v-slot:name> More </template>
      </SidebarTab>
    </div>
  </div>
</template>
