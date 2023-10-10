<template>
    <div class="bar-char">
        <Chart :myOptions="myOptions.data" />
    </div>
</template>

<script lang='ts' setup>
import Chart from '@/components/Chart/index.vue'
import { reactive } from 'vue';

const myOptions = reactive({
    data: {
        tooltip: {
            trigger: 'item'
        },
        // 图例
        legend: {
            orient: 'vertical',
            left: 'right',
            top: 'center',
            align: 'left',
        },
        // 图表距离四周距离
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['30%', '50%'], // 饼图位置调整
                left: 0,
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 22,
                        fontWeight: 'bold',
                        formatter: `{c}` // 设置中心圈展示数据：https://echarts.apache.org/zh/option.html#series-pie.emphasis.label.formatter
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '今日单量' },
                    { value: 735, name: '昨日单量' },
                    { value: 580, name: '前日单量' },
                ]
            }
        ]
    }
})
</script>

<style lang='scss' scoped>
.bar-char {
    width: 100%;
    height: 100%;
}
</style>