<template>
  <div class="content-form">
    <!-- <h3>Step 1</h3> -->
    <el-form
      :model="step1Form"
      :rules="step1FormRules"
      ref="step1Form"
      label-position="right"
      label-width="110px"
      size="small"
    >
      <el-row :gutter="formLayout.gutter">
        <el-col :lg="18" :md="16" :sm="16" :xs="16">
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="step1Form.name" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="性别" prop="gender">
              <el-select v-model="step1Form.gender" placeholder="请选择" clearable>
                <el-option
                  v-for="item in genderOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="出生年月" prop="birthday">
              <el-date-picker
                v-model="step1Form.birthday"
                type="month"
                placeholder="请选择"
              />
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="民族" prop="people">
              <el-select v-model="step1Form.people" placeholder="请选择(可检索)" filterable clearable>
                <el-option
                  v-for="item in peopleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="政治面貌" prop="political">
              <el-select v-model="step1Form.political" placeholder="请选择" clearable>
                <el-option
                  v-for="item in politicalOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="入党时间" prop="partytime">
              <el-date-picker
                v-model="step1Form.partytime"
                type="date"
                placeholder="请选择"
              />
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="籍贯" prop="hometown">
              <el-input v-model="step1Form.hometown" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="婚姻状况" prop="marriage">
              <el-select v-model="step1Form.marriage" placeholder="请选择" clearable>
                <el-option
                  v-for="item in marriageOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="身份证号" prop="identityNum">
              <el-input v-model="step1Form.identityNum" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="step1Form.phone" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="12">
            <el-form-item label="Email" prop="email">
              <el-input v-model="step1Form.email" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-col>
      </el-row>
      <el-row :gutter="formLayout.gutter">
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-form-item label="现工作单位" prop="workunit">
            <el-input v-model="step1Form.workunit" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-form-item label="档案所在单位" prop="fileLocation">
            <el-input v-model="step1Form.fileLocation" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-form-item label="最高学历" prop="education">
            <el-select v-model="step1Form.education" placeholder="请选择" clearable>
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
          <el-form-item label="最高学位" prop="degree">
            <el-input v-model="step1Form.degree" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-form-item label="硕士专业代码" prop="masterMajorCode">
            <el-input v-model="step1Form.masterMajorCode" placeholder="请输入研究生报考专业代码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-form-item label="所学专业" prop="major">
            <el-input v-model="step1Form.major" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-form-item label="毕业时间" prop="graduateDate">
            <el-date-picker
              v-model="step1Form.graduateDate"
              type="date"
              placeholder="请选择"
            />
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-form-item label="毕业学校" prop="graduateSchool">
            <el-input v-model="step1Form.graduateSchool" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-form-item label="应聘岗位" prop="jobApplied">
            <el-select v-model="step1Form.jobApplied" placeholder="请选择" clearable>
              <el-option
                v-for="item in jobOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <el-form-item label="是否应届生" prop="freshGraduate">
            <el-radio-group v-model="step1Form.freshGraduate">
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row class="form-explain">
      <i class="el-icon-info"></i>
      <span class="form-explain__title">说明：</span>
      <span>*为必填项，否则影响审核结果。</span>
    </el-row>
    <el-row class="content-btn-group">
      <el-button size="small" @click="resetForm">重置</el-button>
      <el-button size="small" :disabled="activeStep === 0" @click="handlePrev">上一步</el-button>
      <el-button size="small" :disabled="activeStep === 3" @click="submitForm">下一步</el-button>
    </el-row>
  </div>
</template>

<script>
import baseinfoMixin from '@/mixins/baseinfo-mixin';
export default {
  name: 'step1',
  mixins: [baseinfoMixin],
  data() {
    return {
      formLayout: {
        gutter: 20
      },
      step1Form: {
        name: '',
        gender: '',
        birthday: '',
        people: '',
        political: '',
        partytime: '',
        hometown: '',
        marriage: '',
        identityNum: '',
        phone: '',
        email: '',
        workunit: '',
        fileLocation: '',
        education: '',
        degree: '',
        masterMajorCode: '',
        major: '',
        graduateDate: '',
        graduateSchool: '',
        jobApplied: '',
        freshGraduate: ''
      },
      step1FormRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birthday: [
          { type: 'date', required: true, message: '请选择出生年月', trigger: 'change' }
        ],
        people: [
          { required: true, message: '请选择民族', trigger: 'change' }
        ],
        political: [
          { required: true, message: '请选择政治面貌', trigger: 'change' }
        ],
        partytime: [
          { type: 'date', required: false, message: '请选择入党时间', trigger: 'change' }
        ],
        hometown: [
          { required: true, message: '请输入籍贯', trigger: 'blur' }
        ],
        marriage: [
          { required: true, message: '请选择婚姻状况', trigger: 'change' }
        ],
        identityNum: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入Email', trigger: 'blur' }
        ],
        workunit: [
          { required: true, message: '请输入现工作单位', trigger: 'blur' }
        ],
        fileLocation: [
          { required: true, message: '请输入档案所在单位', trigger: 'blur' }
        ],
        education: [
          { required: true, message: '请选择最高学历', trigger: 'change' }
        ],
        degree: [
          { required: true, message: '请输入最高学位', trigger: 'blur' }
        ],
        masterMajorCode: [
          { required: true, message: '请输入研究生报考专业代码', trigger: 'blur' }
        ],
        major: [
          { required: true, message: '请输入所学专业', trigger: 'blur' }
        ],
        graduateDate: [
          { type: 'date', required: true, message: '请选择毕业时间', trigger: 'change' }
        ],
        graduateSchool: [
          { required: true, message: '请输入学校', trigger: 'blur' }
        ],
        jobApplied: [
          { required: true, message: '请选择应聘岗位', trigger: 'change' }
        ],
        freshGraduate: [
          { type: 'boolean', required: true, message: '请选择是否应届毕业生', trigger: 'change' }
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submitForm() {
      console.log('form', this.step1Form);
      this.$refs.step1Form.validate(valid => {
        if (valid) {
          console.log('submit!');
          this.handleNext();
        } else {
          console.log('error submit!!');
          // return false;
        }
        this.handleNext(this.step1Form);
      });
    },
    resetForm() {
      console.log(this.$refs);
      this.$refs.step1Form.resetFields();
    }
  }
};
</script>
