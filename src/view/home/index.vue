<template>
    <div class="home-page">
        <!-- 顶部统计模块 -->
        <div class="top-total">
            <div class="t-box">
                <svg-icon icon-class="car" />
                <div class="label">载具数量</div>
                <div class="num">{{ topTotal.vehicleNum }}</div>
            </div>
            <div class="t-box">
                <svg-icon icon-class="driver" />
                <div class="label">司机数量</div>
                <div class="num">{{ topTotal.driver }}</div>
            </div>
            <div class="t-box">
                <svg-icon icon-class="order" />
                <div class="label">订单数量</div>
                <div class="num">{{ topTotal.order }}</div>
            </div>
            <div class="t-box">
                <svg-icon icon-class="amount" />
                <div class="label">交易额度</div>
                <div class="num">{{ topTotal.amount }}</div>
            </div>
        </div>
        <div class="chart">
            <div class="left-chart">
                <div class="chart-title">
                    <h4>出入库统计</h4>
                    <div class="tabs">
                        <div class="tab-item" v-for="item in tabData.tabList" :key="item.id"
                            :class="tabData.active == item.id ? 'tab-active' + tabData.active : ''"
                            @click="changeTab(item.id)">{{
                                item.label }}</div>
                    </div>
                </div>
                <bar-chart />
            </div>
            <div class="right-chart">
                <div class="chart-title">
                    <h4>今日货量</h4>
                </div>
                <pie-chart />
            </div>
        </div>
        <div class="bottom">
            <div class="b-left">
                <div class="income">
                    <div class="income-left">
                        <div class="title">今日收益</div>
                        <div class="num">5236</div>
                        <div class="up">
                            <p>较昨日上升12%</p>
                            <svg-icon icon-class="up" />
                        </div>
                    </div>
                    <div class="income-right">
                        <svg-icon icon-class="money" />
                        <div class="total">26888.26</div>
                        <div class="total-txt">总收益</div>
                        <div class="day">已度过520天</div>
                    </div>
                </div>
                <div class="order">
                    <div class="order-title">
                        <h4>订单调度</h4>
                        <p>查看全部</p>
                    </div>
                    <order />
                </div>
            </div>
            <div class="b-right">
                <h4>客户分布</h4>
                <Map />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import BarChart from './barChart.vue'
import PieChart from './pieChart.vue'
import Order from './order.vue'
import Map from '@/components/Map/index.vue'

// 顶部统计数据
let topTotal = reactive({
    vehicleNum: 555,
    driver: 666,
    order: 266,
    amount: 456
})


let tabData = reactive({
    active: 1,
    tabList: [
        {
            id: 1,
            label: '今日',
        },
        {
            id: 2,
            label: '本周',
        },
        {
            id: 3,
            label: '本月',
        },
    ]
})

const changeTab = (id: number) => {
    tabData.active = id
}



</script>

<style scoped lang="scss">
.home-page {
    display: flex;
    flex-direction: column;

    h4 {
        font-size: 18px;
    }

    .top-total {
        display: flex;
        justify-content: center;
        padding: 0 10px;

        .t-box {
            background-color: white;
            padding: 26px 15px;
            overflow: hidden;
            border-radius: 16px;
            flex: 1;
            margin: 0 5px;
            min-width: 220px;
            display: flex;
            align-items: center;

            .svg-icon {
                font-size: 36px;
                background-color: #f3edff;
                padding: 2px 4px;
                border-radius: 4px;
            }

            .label {
                text-align: center;
                flex: 1;
                color: #727272;
            }

            .num {
                font-size: 26px;
                font-weight: 600;
                flex: 1;
                text-align: center;
            }
        }
    }

    .chart {
        display: flex;
        height: 300px;
        margin: 15px;

        .left-chart,
        .right-chart {
            height: 100%;
            border-radius: 16px;
            background-color: white;
            padding: 16px;
            flex: 1;
            box-sizing: border-box;
        }

        .chart-title {
            display: flex;
            justify-content: space-between;

        }

        .left-chart {
            flex: 3;
            margin-right: 15px;
            display: flex;
            flex-direction: column;


            .tabs {
                display: flex;

                .tab-item {
                    padding: 2px 16px;
                    border-radius: 4px;
                    margin-right: 10px;
                    cursor: pointer;
                    box-sizing: border-box;
                }

                .tab-item:last-child {
                    margin: 0;
                }

                .tab-item:nth-child(1) {
                    color: #7461ed;
                    background-color: rgb(113, 94, 237, 0.1);
                }

                .tab-item:nth-child(2) {
                    color: #ffaf5e;
                    background-color: rgb(255, 173, 92, 0.2);
                }

                .tab-item:nth-child(3) {
                    color: #44d4bc;
                    background-color: rgb(68, 212, 188, 0.1);
                }

                .tab-active1 {
                    border: 1px solid rgb(113, 94, 237, 0.3);
                }

                .tab-active2 {
                    border: 1px solid rgb(255, 173, 92, 0.3);
                }

                .tab-active3 {
                    border: 1px solid rgb(68, 212, 188, 0.3);
                }
            }
        }
    }

    .bottom {
        display: flex;
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        margin: 0 15px 15px 15px;


        .b-right {
            border-radius: 16px;
            flex: 1;
        }

        .b-left {
            flex: 1;
            display: flex;
            flex-direction: column;
            height: 100%;
            margin-right: 15px;

            .income {
                background: linear-gradient(to right, #6a54f7, #9f8fff);
                margin-bottom: 15px;
                width: 100%;
                border-radius: 14px;
                color: white;
                padding: 20px 30px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;

                .income-left {
                    display: flex;
                    flex-direction: column;
                    flex: 1;

                    .num {
                        font-size: 32px;
                        font-weight: bold;
                        margin-bottom: 15px;
                    }

                    .up {
                        display: flex;
                        align-items: center;

                        p {
                            margin-right: 6px;
                        }

                        .svg-icon {
                            font-size: 16px;
                        }
                    }
                }

                .income-right {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    background: linear-gradient(to right, #836ffb, #7360f0);
                    backdrop-filter: blur(10px);
                    border-radius: 16px;
                    text-align: right;
                    padding: 20px;
                    font-size: 14px;
                    color: #ccc;
                    position: relative;
                    overflow: hidden;

                    .total {
                        font-size: 22px;
                        color: #f7f6f6;
                    }

                    .day {
                        margin-top: 10px;
                    }

                    .svg-icon {
                        position: absolute;
                        font-size: 90px;
                        opacity: .1;
                        top: 10px;
                        bottom: 10px;
                        left: 0px;
                    }

                }
            }

            .order {
                flex: 1;
                background-color: white;
                width: 100%;
                border-radius: 16px;
                padding: 20px;
                box-sizing: border-box;

                .order-title {
                    display: flex;
                    justify-content: space-between;

                    p {
                        font-size: 16px;
                        color: #ccc;
                        cursor: pointer;
                    }
                }
            }
        }

        .b-right {
            flex: 1;
            flex-direction: column;
            height: 100%;
            background-color: white;
            padding: 20px;
            box-sizing: border-box;
        }
    }
}
</style>