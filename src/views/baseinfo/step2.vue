<template>
  <div class="content-form">
    <el-card v-for="form in step2Forms" :key="form.id" shadow="hover" class="form-card">
      <el-form
        :model="form"
        :rules="step2FormRules"
        :ref="form.id"
        label-position="right"
        label-width="110px"
        size="small"
      >
        <el-row :gutter="10">
          <el-col :lg="6" :md="8" :sm="8" :xs="8">
            <el-form-item label="起止时间" prop="dateRange">
              <el-date-picker
                v-model="form.dateRange"
                type="daterange"
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              />
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="8" :xs="8">
            <el-form-item label="毕业院校" prop="graduateSchool">
              <el-input v-model="form.graduateSchool" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="8" :xs="8">
            <el-form-item label="所学专业" prop="major">
              <el-input v-model="form.major" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="8" :xs="8">
            <el-form-item label="学历" prop="education">
              <el-select v-model="form.education" placeholder="请选择" clearable>
                <el-option
                  v-for="item in educationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="8" :xs="8">
            <el-form-item label="学位" prop="major">
              <el-select v-model="form.degree" placeholder="请选择" clearable>
                <el-option
                  v-for="item in degreeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="8" :xs="8">
            <el-form-item label="学习形式" prop="learningType">
              <el-select v-model="form.learningType" placeholder="请选择" clearable>
                <el-option
                  v-for="item in learningTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="8" :xs="8">
            <el-form-item label="毕业证书编号" prop="geaduattionID">
              <el-input v-model="form.geaduattionID" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="8" :xs="8">
            <el-form-item label="学位证书编号" prop="degreeID">
              <el-input v-model="form.degreeID" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item>
            <el-button @click="deleteForm(form.id)">删除</el-button>
            <el-button @click="resetForm(form.id)">重置</el-button>
            <el-button type="primary" @click="editForm(form.id)">编辑</el-button>
            <el-button type="primary" @click="submitForm(form.id)">提交</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-card>
    <el-row class="form-explain">
      <i class="el-icon-info"></i>
      <span>说明：*为必填项，否则影响审核结果。</span>
    </el-row>
    <el-row class="content-btn-group">
      <el-button type="primary" size="small" @click="addForm">新增教育经历</el-button>
      <el-button size="small" :disabled="activeStep === 0" @click="handlePrev">上一步</el-button>
      <el-button size="small" :disabled="activeStep === 3" @click="handleNext">下一步</el-button>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { generateId } from '@/utils/public';
export default {
  name: 'step2',
  data() {
    return {
      step2Form: {
        dateRange: '',
        graduateSchool: '',
        major: '',
        education: '',
        degree: '',
        learningType: '',
        geaduattionID: '',
        degreeID: ''
      },
      step2FormRules: {
        dateRange: [
          { type: 'date', required: true, message: '请选择起止时间', trigger: 'change' }
        ],
        graduateSchool: [
          { required: true, message: '请输入毕业院校', trigger: 'blur' }
        ],
        major: [
          { required: true, message: '请输入所学专业', trigger: 'blur' }
        ],
        education: [
          { required: true, message: '请选择学历', trigger: 'change' }
        ],
        degree: [
          { required: true, message: '请选择学位', trigger: 'change' }
        ],
        learningType: [
          { required: true, message: '请选择学习形式', trigger: 'change' }
        ],
        geaduattionID: [
          { required: false, message: '请输入毕业证书编号', trigger: 'blur' }
        ],
        degreeID: [
          { required: false, message: '请输入学位证书编号', trigger: 'blur' }
        ]
      },
      step2Forms: [{ id: generateId('form'), ...this.step2Form }]
    };
  },
  computed: {
    ...mapState('baseinfo', [
      'educationOptions',
      'degreeOptions',
      'learningTypeOptions'
    ])
  },
  methods: {
    addForm() {
      this.step2Forms.push({ id: generateId('form'), ...this.step2Form });
    },
    editForm(form) {
      console.log(form);
    },
    submitForm(form) {
      console.log('form', this.step2Forms.find(el => el.id === form));
      this.$refs[form][0].validate(valid => {
        if (valid) {
          console.log('submit!');
          this.$emit('submit');
        } else {
          console.log('error submit!!');
          // return false;
        }
        this.$emit('submit', this.step1Form);
      });
    },
    resetForm(form) {
      console.log(this.$refs, form, this.$refs[form]);
      this.$refs[form][0].resetFields();
    },
    deleteForm(form) {
      const index = this.step2Forms.findIndex(el => el.id === form);
      this.step2Forms.splice(index, 1);
    },
    handlePrev() {
      this.$emit('prev');
    },
    handleNext() {
      this.$emit('next');
    }
  }
};
</script>
