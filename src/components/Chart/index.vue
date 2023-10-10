<template>
    <div class='chart-box' :id="uid"></div>
</template>

<script lang='ts' setup>
import { ref, onBeforeMount, onMounted, defineProps } from 'vue';
import * as echarts from 'echarts'

const props = defineProps({
    myStyle: {
        type: Object,
        default: () => ({
            white: '100%',
            height: '100%'
        })
    },
    myOptions: {
        type: Object,
        default: () => ({}),
        required: true
    }
})

// 因为是封装的组件，会多次调用，id不能重复，要在初始化之前写，不然会报错dom为定义
let uid = ref('')
onBeforeMount(() => {
    uid.value = `echarts-uid-${parseInt((Math.random() * 1000000).toString())}`;
});

onMounted(() => {
    let myChart = echarts.init(document.getElementById(uid.value));
    myChart.setOption(props.myOptions, {
        notMerge: true, // 不和之前的option合并
    })

    // 监听页面大小
    window.addEventListener('resize', () => {
        setTimeout(() => {
            myChart?.resize({
                animation: {
                    duration: 300
                }
            })
        }, 300);
    })
})

</script>

<style lang='scss' scoped>
.chart-box {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
</style>