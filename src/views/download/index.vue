<template>
  <div class="content-download">
    <el-row :gutter="30">
      <el-col v-for="file in fileList" :key="file.id" :span="8">
        <el-card shadow="hover">
          <span class="file-name">{{ file.name }}</span>
          <div class="clearfix">
            <time class="time">{{ file.updated_at }}</time>
            <el-button type="text" class="button">点击下载</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="form-explain">
      <i class="el-icon-info"></i>
      <span class="form-explain__title">说明：</span>
      <ol>
        <li>点击文件标题链接即可下载。</li>
        <li>材料需打印后盖章，以备现场审核时使用。</li>
      </ol>
    </el-row>
  </div>
</template>

<script>
import './style.scss';
export default {
  name: 'download',
  data() {
    return {
      fileList: [
        {
          id: 1,
          name: '党员证明',
          url: 'https://youthol.cn',
          created_at: '2017-03-17',
          updated_at: '2017-03-17'
        },
        {
          id: 2,
          name: '学士干部证明',
          url: 'https://youthol.cn',
          created_at: '2017-03-17',
          updated_at: '2017-03-17'
        }
      ],
      currentDate: new Date()
    };
  }
};
</script>


<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>

