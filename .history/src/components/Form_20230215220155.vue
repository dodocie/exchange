<script lang="ts" setup>
import { reactive, ref, type Component } from "vue";
import Countdown from './units/Countdown';


const formLabelAlign = reactive({
  mobile: "",
  code: "",
});

const countdown = ref<Component | null>(null);
const startCountdown = () => {
  countdown?.value.start()
}
rt
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
          <el-button>
            <span>获取验证码</span>
            <Countdown :time="30" ref="countdown" />
          </el-button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>
