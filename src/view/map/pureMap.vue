<template>
  <div class='gd-map'>
    <div id="map"></div>
    <div class="options">
      <p>添加/删除覆盖物</p>
      <div class="row">
        <div class=" o-item" @click="addSingle">添加标记</div>
        <div class=" o-item" @click="cleSingle">删除标记</div>
      </div>
      <div class="row">
        <div class=" o-item" @click="addCircle">添加图形</div>
        <div class=" o-item" @click="cleCircle">删除图形</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import { mapKey } from "@/config/index"

let map: any = null;
let AMapObj: any = null;
let marker: any = null // 点位信息
let icon: any = null // 点位图标
let circle: any = null // 图形信息
onMounted(() => {
  initMap()
});

const initMap = () => {
  AMapLoader.load({
    key: mapKey, // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      AMapObj = AMap
      map = new AMap.Map("map", {
        // 设置地图容器id
        viewMode: "2D", // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
        position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      });

      // 创建一个 Marker 实例：
      marker = new AMapObj.Marker({
        position: new AMapObj.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '北京'
      });

      // 创建 AMap.Icon 实例：
      icon = new AMapObj.Icon({
        size: new AMapObj.Size(40, 50),    // 图标尺寸
        image: '/src/assets/images/point.png',  // Icon的图像
        // imageOffset: new AMapObj.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMapObj.Size(26, 26)   // 根据所设置的大小拉伸或压缩图片
      });

      // 构造矢量圆形
      circle = new AMap.Circle({
        center: new AMap.LngLat("116.403322", "39.920255"), // 圆心位置
        radius: 1000,  //半径
        strokeColor: "#F33",  //线颜色
        strokeOpacity: 1,  //线透明度
        strokeWeight: 3,  //线粗细度
        fillColor: "#ee2200",  //填充颜色
        fillOpacity: 0.35 //填充透明度
      });
    })
    .catch((e) => {
      console.log(e);
    });
}

const addSingle = () => {
  // 将创建的点标记添加到已有的地图实例：
  map.add(marker);
  map.setFitView();
}

const cleSingle = () => {
  map.remove(marker);
  map.setFitView();
}


const addCircle = () => {
  map.add(circle);
  map.setFitView();
}

const cleCircle = () => {
  map.remove(circle);
  map.setFitView();
}

onUnmounted(() => {
  map?.destroy();
});
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

  .options {
    position: absolute;
    right: 1%;
    bottom: 1%;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: white;

    p {
      line-height: 2;
    }

    .row {
      display: flex;
    }

    .o-item {
      width: 60px;
      height: 30px;
      background-color: rgb(88, 189, 122);
      text-align: center;
      line-height: 30px;
      margin-bottom: 5px;
      color: white;
      padding: 0 5px;
      border-radius: 2px;
      cursor: pointer;
      margin-right: 10px;
    }
  }
}
</style>