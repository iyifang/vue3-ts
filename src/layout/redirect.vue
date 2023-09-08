<template>
    <div>
        Redirect
    </div>
</template>

<script lang="ts" setup>
import { unref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
    name: "Redirect"
})

const { currentRoute, replace } = useRouter()
const { params, query } = unref(currentRoute)
const { path } = params;

const _path = Array.isArray(path) ? path.join('/') : path;
console.log(unref(currentRoute));

replace({
    path: '/' + _path,
    query
})
</script>