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
          <el-button>获取验证码</el-button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const formLabelAlign = reactive({
  mobile: "",
  code: "",
});
</script>
