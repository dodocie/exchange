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
      <el-input size="large" v-model="formLabelAlign.mobile" />
    </el-form-item>
    <el-form-item label="验证码">
      <el-input size="large" v-model="formLabelAlign.code">
        <template #append>
          <el-button
            class="w-24"
            :disabled="codeStart === 'count'"
            @click="startCountdown"
          >
            <span v-show="codeStart === 'init' || codeStart === 'end'">获取验证码</span>
            <Countdown
              v-show="codeStart === 'count'"
              :time="5 * 1000"
              ref="countdown"
              @finish="onFinish"
            />
          </el-button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>
