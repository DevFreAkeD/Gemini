<template>
    <div class="sidebar bg-gray-800">
        <div class="mt-3.5">
            <img
                :src={menuIcon}
                class="ml-2.5 cursor-pointer hover:bg-gray-500"
            />
            <div class="mt-5 flex pt-10 items-center gap-2 px-4 py-2 hover:bg-slate-800 rounded-full text-sm text-gray-500 cursor-pointer">
                <img :src={newChatIcon} alt="new-chat" class="w-4 h-4" />
                <p>New Chat</p>
            </div>
            <div className="recent flex flex-col animate-fadeIn">
                <p className="recent-title pt-10 mt-30 text-gray-500">Recent</p>
                <div className="recent-entry flex items-start gap-10 p-3 pr-20 rounded-full text-gray-800 cursor-pointer hover:bg-gray-500">
                    <img :src={message_icon} alt="" className="h-6 w-6" />
                    <p class="text-gray-500">Chat</p>
                </div>
            </div>
        </div>

        <div className="bottom flex flex-col">
            <div className="bottom-item flex items-center gap-2 p-2 cursor-pointer">
                <img :src={questionIcon} alt="" className="h-6 w-6" />
                <p class="text-gray-500">Help</p>
            </div>
            <div className="bottom-item flex items-center gap-2 p-2 cursor-pointer">
                <img :src={historyIcon} alt="" className="h-6 w-6" />
                <p class="text-gray-500">Activity</p>
            </div>
            <div className="bottom-item flex items-center gap-2 p-2 cursor-pointer">
                <img :src={settingsIcon} alt="" className="h-6 w-6" />
                <p class="text-gray-500">Settings</p>
            </div>
        </div>
        
    </div>
</template>

<script>
import { menuIcon, newChatIcon, settingsIcon, historyIcon, questionIcon, messageIcon } from "../assets"
import { reactive, ref } from 'vue';

export default {
    data() {
        return {
            menuIcon: menuIcon,
            newChatIcon: newChatIcon,
            settingsIcon: settingsIcon,
            historyIcon: historyIcon,
            questionIcon: questionIcon,
            messageIcon: messageIcon,
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
@media (max-width:450px){
    .sidebar{
        display: none;
    }
}
</style>