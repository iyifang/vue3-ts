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
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';
import { useUserStore } from "@/store/modules/user"

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


const router = useRouter()
const userStore = useUserStore()

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            await userStore.login(ruleForm)
            router.push('/')
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