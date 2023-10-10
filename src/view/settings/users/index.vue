<template>
    <div class='table-container'>
        <el-table :data="tableData.list" stripe style="width: 100%" border>
            <el-table-column type="index" label="序号" min-width="20" align="center">
            </el-table-column>
            <el-table-column prop="name" label="名称" resizable>
            </el-table-column>
            <el-table-column prop="createdTime" label="上传时间" resizable>
            </el-table-column>
            <el-table-column prop="type" label="类型" resizable>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="{ row }">
                    <el-button size="small" @click="handleDownload(row.id)">下载</el-button>
                    <!-- <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button> -->
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'
import { getfiles, downloadImg } from '@/Api/files'

const tableData = reactive({
    list: []
})

const getfileList = async () => {
    let res = await getfiles()
    tableData.list = res
    console.log(tableData.list);
}

getfileList()

const handleDownload = async (id: string) => {
    const http = import.meta.env.VITE_APP_BASE_PATH
    let res = await downloadImg({ id })
    let imgPath = http + res[0]
    getVagueImage(imgPath)
}


const getVagueImage = (imgSrc: string) => {

}

</script>

<style lang='scss' scoped>
.table-container {
    height: 100%;
    width: 100%;
}
</style>