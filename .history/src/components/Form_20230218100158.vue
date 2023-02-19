<script lang="ts" setup>
import { reactive, ref } from "vue";
import Countdown from "./units/Countdown.vue";

const formLabelAlign = reactive({
  mobile: "",
  code: "",
});

const codeStart = ref("init");
const countdown = ref<typeof Countdown | null>(null);
const startCountdown = () => {
  if (codeStart.value === "end") countdown.value?.reset();
  codeStart.value = "count";
  countdown.value?.start(); //第二次开始不会减数了。。
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
      validator: (rule: unknown, val: string) => /\d{6}$/.test(val.trim()),
    },
  ],
};
</script>
<template>
  <el-form
    :label-position="'top'"
    label-width="100px"
    :model="formLabelAlign"
    :rules="rules"
    style="max-width: 460px"
  >
    <el-form-item label="手机号" prop="mobile">
      <el-input size="large" v-model="formLabelAlign.mobile" />
    </el-form-item>
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
      <!-- <el-button type="primary" @click="submitForm(formRef)">Submit</el-button> -->
      <!-- <el-button @click="resetForm(formRef)">Reset</el-button> -->
    </el-form-item>
  </el-form>
</template>
