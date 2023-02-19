<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules, UploadProps } from "element-plus";
import { ElMessage, ElMessageBox } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { genStuffMenu } from "@/lib/jumble";
import { useUserStore } from "@/stores/user";
import { useProductStore } from "@/stores/products";
import type { CategoryTypes, SubCategoryTypes } from "@/lib/types";
import { useRouter } from 'vue-router';
import { wrapPromise } from '@/utils/share'

const { setProduct } = useProductStore();
const router = useRouter();
const asideMenu = genStuffMenu();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  category: "" as CategoryTypes,
  subCategory: "" as SubCategoryTypes,
  hasInvoice: true,
  imageUrls: [] as string[],
  price: 0,
  descr: "",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "请输入物品名称", trigger: "blur" },
    { min: 3, max: 15, message: "名称3~15个字", trigger: "blur" },
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
      message: "",
      trigger: "change",
    },
  ],
  price: [
    {
      required: true,
      message: "请输入物品原价",
      trigger: "change",
    },
  ],
  descr: [{ required: true, message: "Please input activity form", trigger: "blur" }],
});

// const imageUrl = ref("");
const fileUrls = ref({});

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};
const onChangeImages: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  const urls: string[] = [];
  uploadFiles.forEach((v) => urls.push(URL.createObjectURL(uploadFile.raw!)));
  ruleForm.imageUrls = urls;
};

const onPost = () => {
  const { profile } = useUserStore();
  const id = Math.random().toString(32).slice(2)
  const r = {
    ...ruleForm,
    ownerId: profile.uid,
    id,
    createdTime: Date.now(),
  };
  console.log('rrr--', r)
  setProduct(r);
  return id
};

const openPostMsg = async (id: string) => {
  const [err] = await wrapPromise(ElMessageBox.confirm('物品成功发布，是否去查看物品详情？', '', {
      confirmButtonText: '确定',
      cancelButtonText: '继续发布',
      type: 'success',
    }))
  if(err) return
  router.push({
    name: 'detail',
    params: {
      id
    }
  })
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const id = onPost();
      openPostMsg(id)
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const selectCategory = (values: unknown | string[]) => {
  if (Array.isArray(values)) {
    ruleForm.category = values[0] as CategoryTypes;
    ruleForm.subCategory = values[1];
  }
};
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm mt-4 pt-16 w-4/5 mx-auto"
    status-icon
  >
    <el-form-item label="物品名称" prop="name">
      <el-input class="w-52" v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="物品类别" prop="category">
      <el-cascader
        class="w-52"
        :placeholder="'选择物品类别'"
        :options="asideMenu"
        @change="selectCategory"
      />
    </el-form-item>
    <el-form-item label="原价" prop="price">
      <el-input class="w-52" v-model="ruleForm.price" type="number" />
    </el-form-item>
    <el-form-item label="有发票" prop="hasInvoice">
      <el-switch v-model="ruleForm.hasInvoice" />
    </el-form-item>
    <el-form-item label="描述" prop="descr">
      <el-input v-model="ruleForm.descr" type="textarea" />
    </el-form-item>
    <el-form-item label="物品图片">
      <el-upload
        accept="image/png, image/jpeg"
        list-type="picture-card"
        :auto-upload="false"
        :multiple="true"
        :limit="3"
        :before-upload="beforeAvatarUpload"
        :on-change="onChangeImages"
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
