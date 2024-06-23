<template>
    <div class="min-h-screen flex flex-col justify-between bg-gray-700 p-2.5">
        <div class="mt-3.5 top">
            <img
                :src={menuIcon}
                class="ml-2.5 cursor-pointer"
            />
        </div>
    </div>
</template>

<script>
import { menuIcon } from "../assets/index"

export default {
    data() {
        return {
            menuIcon: menuIcon
        };
    }
};
</script>

<style lang="scss" scoped>

</style>