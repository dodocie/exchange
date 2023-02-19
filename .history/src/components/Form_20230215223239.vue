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
  codeStart.value = "count";
  countdown?.value?.start();
};
const onFinish = () => {
  codeStart.value = "end";
};
</script>
<template>
  <el-form
    :label-position="'top'"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <el-form-item label="手机号">
      <el-input v-model="formLabelAlign.mobile" />
    </el-form-item>
    <el-form-item label="验证码">
      <el-input v-model="formLabelAlign.code">
        <template #append>
          <el-button
            v-show="codeStart === 'init' || codeStart === 'end'"
            @click="startCountdown"
            >获取验证码</el-button
          >
          <Countdown v-show="codeStart === 'count'" :time="30 * 1000" ref="countdown" />
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>
