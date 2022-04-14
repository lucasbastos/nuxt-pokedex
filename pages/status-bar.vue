<script setup lang="ts">
const props = defineProps({
  status: {
    type: Number,
    required: true
  }
})
</script>

<template>
<div class="bg-zinc-300 w-[255px] h-4">
    <div class="bg-blue-300 h-4" :style="`width: ${status}px`">
    </div>
</div>
</template>