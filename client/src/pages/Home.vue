<template>
    <div class="bg-zinc-900 w-full">
        <div class="flex items-center justify-between text-[22px] p-5 border-b-[1px] border-zinc-700">
            <p class="h1 text-[22px] text-gray-300 pl-6 font-medium">Gemini</p>

            <a class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] text-zinc-900 font-medium text-sm w-36 px-5 py-2.5 text-center rounded-full text-nowrap min-h-button flex items-center justify-center gap-[0.3em]">
                Sign In
                <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </a>
        </div>
        <div class="bg-zinc-950 flex flex-col items-center justify-center w-full px-52 py-32 border-b-[4px] border-zinc-700">
            <h1 class="text-[60px] text-white font-medium">
                <span class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Gemini</span>
            </h1>
            <div class="my-6 text-center">
                <p class="text-zinc-600 text-[26px]">Your one-stop shop for information. Ask in-depth questions, get creative writing assistance, or bridge language barriers – all powered by cutting-edge AI.</p>
                <br />
                <p class="text-zinc-600 text-[26px]">Unleash your potential and explore a world of knowledge. Let's get started!</p>
            </div>
            <div class="py-8 items-center justify-center">
                <a class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] text-zinc-800 font-medium text-md w-40 px-5 py-2.5 text-center rounded-full text-nowrap min-h-button flex items-center justify-center gap-[0.3em]">
                    Try Gemini
                    <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <span className="sr-only">(opens in a new window)</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
    }
};
</script>

<style>

</style>