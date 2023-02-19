<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules, UploadProps } from "element-plus";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { genStuffMenu } from "@/lib/jumble";

const asideMenu = genStuffMenu();

const formSize = ref<"" | "default" | "small" | "large">("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  region: "",
  category: "",
  showPrice: false,
  imageUrls: [] as string[],
  price: "",
  desc: "",
});
const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "请输入物品名称", trigger: "blur" },
    { min: 3, max: 15, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  category: [
    {
      required: true,
      message: "请选择物品类别",
      trigger: "change",
    },
  ],
  imageUrls: [
    {
      type: "array",
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  price: [
    {
      required: true,
      message: "Please select activity price",
      trigger: "change",
    },
  ],
  desc: [{ required: true, message: "Please input activity form", trigger: "blur" }],
});

const imageUrl = ref("");
const fileList = ref([]);
const handleAvatarSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  ruleForm.imageUrls.push(URL.createObjectURL(uploadFile.raw!));
};
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm mt-4 pt-16 w-4/5 mx-auto"
    :size="formSize"
    status-icon
  >
    <el-form-item label="物品名称" prop="name">
      <el-input class="w-52" v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="物品类别" prop="category">
      <el-cascader class="w-52" v-model="ruleForm.category" :options="asideMenu" />
    </el-form-item>
    <el-form-item class="w-52" label="交易地点" prop="region">
      <el-input v-model="ruleForm.region" />
    </el-form-item>
    <el-form-item label="原价" prop="price">
      <el-input class="w-52" v-model="ruleForm.price" type="number" />
    </el-form-item>
    <el-form-item label="是否显示原价" prop="showPrice">
      <el-switch v-model="ruleForm.showPrice" />
    </el-form-item>
    <el-form-item label="描述" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="物品图片">
      <el-upload
        v-model:file-list="fileList"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        list-type="picture-card"
        :multiple="true"
        :limit="3"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :on-remove="handleRemove"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> 发布 </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
