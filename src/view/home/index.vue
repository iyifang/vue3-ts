<template>
    <div>
        {{ collapse }}
    </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
import { storeToRefs } from 'pinia'
const appStore = useAppStore()

const appStoreData = storeToRefs(appStore)
const collapse = appStoreData.collapse.value

</script>