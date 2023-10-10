<template>
    <div class='gd-map'>
        <div id="map"></div>
        <div class="input-card">
            <h4>轨迹回放控制</h4>
            <div class="input-item">
                <div class="btn" @click="startAnimation">开始动画 </div>
                <div class="btn" @click="pauseAnimation">暂停动画 </div>
            </div>
            <div class="input-item">
                <div class="btn" @click="resumeAnimation">继续动画 </div>
                <div class="btn" @click="stopAnimation">停止动画 </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue'
import AMapLoader from "@amap/amap-jsapi-loader";
import { mapKey } from "@/config/index"

let map: any = null;
let marker: any = null;
let lineArr: any = [[116.478935, 39.997761], [116.478939, 39.997825], [116.478912, 39.998549], [116.478912, 39.998549], [116.478998, 39.998555], [116.478998, 39.998555], [116.479282, 39.99856], [116.479658, 39.998528], [116.480151, 39.998453], [116.480784, 39.998302], [116.480784, 39.998302], [116.481149, 39.998184], [116.481573, 39.997997], [116.481863, 39.997846], [116.482072, 39.997718], [116.482362, 39.997718], [116.483633, 39.998935], [116.48367, 39.998968], [116.484648, 39.999861]];

const initMap = () => {
    AMapLoader.load({
        key: mapKey, // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
        .then((AMap) => {
            console.log(AMap);
            // JSAPI2.0 使用覆盖物动画必须先加载动画插件
            AMap.plugin('AMap.MoveAnimation', function () {

                map = new AMap.Map("map", {
                    resizeEnable: true,
                    center: [116.397428, 39.90923],
                    zoom: 17
                });

                marker = new AMap.Marker({
                    map: map,
                    position: [116.478935, 39.997761],
                    icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
                    offset: new AMap.Pixel(-13, -26),
                });
                // 绘制轨迹
                var polyline = new AMap.Polyline({
                    map: map,
                    path: lineArr,
                    showDir: true,
                    strokeColor: "#28F",  //线颜色
                    // strokeOpacity: 1,     //线透明度
                    strokeWeight: 6,      //线宽
                    // strokeStyle: "solid"  //线样式
                });
                // 已行驶轨迹
                var passedPolyline = new AMap.Polyline({
                    map: map,
                    strokeColor: "#AF5",  //线颜色
                    strokeWeight: 6,      //线宽
                });

                marker.on('moving', function (e) {
                    passedPolyline.setPath(e.passedPath);
                    map.setCenter(e.target.getPosition(), true)
                });
                map.setFitView();
            })
        })

}

const startAnimation = function () {
    marker.moveAlong(lineArr, {
        // 每一段的时长
        duration: 500,//可根据实际采集时间间隔设置
        // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
        autoRotation: true,
    });
};

const pauseAnimation = function () {
    marker.pauseMove();
};

const resumeAnimation = function () {
    marker.resumeMove();
};

const stopAnimation = function () {
    marker.stopMove();
};
onMounted(() => {
    initMap()
})
</script>

<style lang='scss' scoped>
.gd-map {
    width: 100%;
    height: 100%;
    position: relative;

    #map {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .input-card {
        position: absolute;
        right: 1%;
        bottom: 1%;
        background-color: white;
        padding: 10px 20px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;

        h4 {
            line-height: 2;
        }

        .input-item {
            display: flex;

            .btn {
                border-radius: 16px;
                padding: 4px 10px;
                border: 1px solid skyblue;
                background-color: white;
                margin-right: 10px;
                margin-bottom: 10px;
                cursor: pointer;
            }

            .btn:last-child {
                margin-right: 0;
            }

            .btn:hover {
                border-color: #25a5f7;
                background-color: #25a5f7;
                color: white;
                transition: .25s;
            }
        }
    }
}
</style>