<script lang="ts" setup>
import { reactive, ref, type Component } from "vue";
import Countdown from './units/Countdown2';


const formLabelAlign = reactive({
  mobile: "",
  code: "",
});

const countdown = ref<typeof Countdown | null>(null);
const startCountdown = () => {
  countdown?.value?.start()
}
</script>
<template>
  <el-form
    :label-position="'Top'"
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
          <el-button @click="startCountdown">获取验证码</el-button>
          <Countdown :time="30" ref="countdown" />
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>
