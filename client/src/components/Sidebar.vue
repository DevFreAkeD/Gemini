<template>
    <div class="sidebar bg-zinc-900">
        <div class="mt-4">
            <img
                :src="menuIcon"
                @click="toggleExtended"
                class="ml-2.5 h-5 w-5 cursor-pointer"
            />
            <div class="mt-10 flex items-center gap-10 px-2 py-2 hover:bg-slate-800 rounded-full text-sm text-gray-500 cursor-pointer">
                <img :src="newChatIcon" alt="new-chat" class="w-5 h-7" />
                <p v-if="extended">New Chat</p>
            </div>
            <div v-if="extended" class="recent flex flex-col animate-fadeIn">
                <p class="mt-10 pb-2 mt-30 text-gray-500">Recent</p>
                <div class="flex items-start gap-10 p-3 pr-20 rounded-full text-gray-800 cursor-pointer hover:bg-gray-500">
                    <img :src="messageIcon" alt="message" class="h-6 w-6" />
                    <p class="text-gray-500 hover:text-gray-800">Chat</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col">
            <div class="flex items-center gap-2 p-2 cursor-pointer">
                <img :src="questionIcon" alt="help" class="h-6 w-6" />
                <p v-if="extended" class="text-gray-500">Help</p>
            </div>
            <div class="bottom-item flex items-center gap-2 p-2 cursor-pointer">
                <img :src="historyIcon" alt="activity" class="h-6 w-6" />
                <p v-if="extended" class="text-gray-500">Activity</p>
            </div>
            <div class="bottom-item flex items-center gap-2 p-2 cursor-pointer">
                <img :src="settingsIcon" alt="settings" class="h-6 w-6" />
                <p v-if="extended" class="text-gray-500">Settings</p>
            </div>
        </div>
    </div>
</template>

<script>
import { menuIcon, newChatIcon, settingsIcon, historyIcon, questionIcon, messageIcon } from "../assets";
import { ref } from 'vue';

export default {
    setup() {
        const extended = ref(false);

        const toggleExtended = () => {
            extended.value = !extended.value;
        };

        return {
            menuIcon,
            newChatIcon,
            settingsIcon,
            historyIcon,
            questionIcon,
            messageIcon,
            extended,
            toggleExtended,
        };
    }
};
</script>

<style>
.sidebar {
    min-height: 100vh;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 15px;
}
</style>