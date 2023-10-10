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
        xAxis: {
            type: 'category',
            data: ['数据一', '数二', '数据三', '数据四', '数据五', '数据六', '数据七', '数据八', '数据九', '数据十'],
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8f8f8f'
                }
            }
        },
        yAxis: {
            type: 'value',
            show: true,
            splitNumber: 7,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8f8f8f'
                }
            },
            max: function (value: any) {
                // 取最大值向上取整为最大刻度
                let integer = Math.ceil(value.max / 0.75);
                let length = String(integer).length;
                return (Math.ceil(integer / Math.pow(10, length - 2)) * Math.pow(10, length - 2));
            },
        },
        // hove数据
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        // 图表距离四周距离
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        // 图例
        legend: {
            show: true,
            left: 25,
            top: 20
        },
        series: [
            // 可配置多个柱状数据
            {
                data: [120, 200, 150, 80, 70, 110, 130, 70, 110, 130], // 出库
                type: 'bar',
                name: '出库',
                barWidth: 20,
                itemStyle: {
                    color: '#7461ed',
                    borderRadius: [10, 10, 0, 0],
                }
            },
            {
                data: [120, 200, 150, 80, 70, 110, 130, 70, 110, 130], // 入库
                type: 'bar',
                name: '入库',
                barWidth: 20,
                itemStyle: {
                    color: '#44d4bc',
                    borderRadius: [10, 10, 0, 0]
                }
            }
        ]
    }
})
</script>

<style lang='scss' scoped>
.bar-char{
    width: 100%;
    height: 100%;
}
</style>