<template>
    <div class="login"><el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'
import { login, test } from '@/Api/index'

const userStore = useUserStore()
const router = useRouter()
const userInfo = {
    username: '王花花',
    sex: 0,
    token: 'token',
    roles: [0, 1]
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
interface RuleForm {
    username: string
    password: string
}

const ruleForm = reactive<RuleForm>({
    username: '',
    password: ''
})

const rules = reactive<FormRules<RuleForm>>({
    username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 12, message: '密码长的应为6-12之间', trigger: 'blur' }
    ]
})


/* const submitForm = async (e) => {
    await userStore.login(userInfo)
    router.push('/')
} */

const submitForm = async (formEl: FormInstance | undefined)=>{
    if (!formEl) return
    await formEl.validate((valid, fields) => {
    if (valid) {
        let { username, password } = ruleForm
        let res = test()
    } else {
      console.log('error submit!', fields)
    }
  })
}


</script>

<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $themeColor;
}
</style>