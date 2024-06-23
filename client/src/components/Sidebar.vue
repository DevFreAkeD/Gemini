<template>
    <div class="sidebar min-h-screen flex flex-col justify-between bg-gray-900 p-2.5">
        <div class="mt-3.5">
            <img
                :src={menuIcon}
                class="ml-2.5 cursor-pointer hover:bg-gray-500"
            />
8
            <div class="mt-4 flex items-center gap-2 px-4 py-2 hover:bg-slate-800 rounded-full text-sm text-gray-500 cursor-pointer">
                <img :src={newChatIcon} alt="new-chat" class="w-4 h-4" />
                <p>New Chat</p>
            </div>
        </div>

        <div class="fixed bottom-0 justify-around items-center gap-2 py-3 px-2">
            <div class="flex text-gray-500">
                <img :src={question_icon} alt="" class="w-6 h-6" />
                <p class="ml-2">Help</p>
            </div>
            <div class="flex text-gray-500">
                <img :src={history_icon} alt="" class="w-6 h-6" />
                <p class="ml-2">Activity</p>
            </div>
            <div class="flex text-gray-500">
                <img :src={setting_icon} alt="" class="w-6 h-6" />
                <p class="ml-2">Settings</p>
            </div>
        </div>
    </div>
</template>

<script>
import { menuIcon, newChatIcon, settingsIcon, historyIcon, questionIcon } from "../assets"
import { reactive, ref } from 'vue';

export default {
    data() {
        return {
            menuIcon: menuIcon,
            newChatIcon: newChatIcon,
            settingsIcon: settingsIcon,
            historyIcon: historyIcon,
            questionIcon: questionIcon,
        };
    }
};
</script>

<style>
@media (max-width:600px){
    .sidebar{
        display: none;
    }
}
</style>