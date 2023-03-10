<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Countdown from "./units/Countdown.vue";
import { useUserStore } from "@/stores/user";
import { ViewNames } from "@/router";
import type { FormInstance } from "element-plus";

const route = useRoute();
const router = useRouter();
const { login } = useUserStore();

const ruleFormRef = ref<FormInstance | null>(null);
const formLabelAlign = reactive({
  mobile: "",
  code: "",
});

const codeStart = ref("init");
const countdown = ref<typeof Countdown | null>(null);
const startCountdown = () => {
  if (codeStart.value === "end") countdown.value?.reset();
  codeStart.value = "count";
  countdown.value?.start();
};
const onFinish = () => {
  codeStart.value = "end";
};

const rules = {
  mobile: [
    {
      required: true,
      message: "请输入手机号码",
      trigger: "blur",
    },
    {
      validator: (rule: unknown, val: string) => /^1[3-9]\d{9}$/.test(val.trim()),
      message: "请输入正确的手机号码",
      trigger: ["blur", "change"],
    },
    { min: 11, max: 11, message: "手机号码位数必须为11位", trigger: "blur" },
  ],
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
    },
    {
      message: "验证码为6位数字",
      validator: (rule: unknown, val: number) => /\d{6}$/.test(val.toString().trim()),
    },
  ],
};

const submitLoginData = async (formEl: FormInstance | null) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      login();
      const query = route.query;
      if (query.redirect && typeof query.redirect === "string") {
        router.replace({
          name: query.redirect,
        });
        return;
      }
      router.push({
        name: ViewNames.PROD,
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
const resetForm = (formEl: FormInstance | null) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<template>
  <el-form
    ref="ruleFormRef"
    :label-position="'top'"
    label-width="100px"
    :model="formLabelAlign"
    :rules="rules"
    style="max-width: 460px"
  >
    <el-form-item label="手机号" prop="mobile">
      <el-input size="large" v-model="formLabelAlign.mobile" />
    </el-form-item>
    <p class="text-xs text-red-400 mb-1">注: 概念版页面，无需真实短信验证</p>
    <el-form-item label="验证码" prop="code">
      <el-input size="large" type="text" v-model.number="formLabelAlign.code">
        <template #append>
          <el-button
            class="w-24"
            :disabled="codeStart === 'count'"
            @click="startCountdown"
          >
            <span v-show="codeStart === 'init' || codeStart === 'end'">获取验证码</span>
            <Countdown
              v-show="codeStart === 'count'"
              :time="30 * 1000"
              ref="countdown"
              @finish="onFinish"
            />
          </el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitLoginData(ruleFormRef)">登录</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
