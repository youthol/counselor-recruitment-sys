<template>
  <div class="content-timeline">
    <el-timeline>
      <el-timeline-item
        v-for="record in submitRecords"
        :key="record.id"
        :timestamp="record.created_at"
        :color="chooseColor(record.statusCode)"
        placement="top"
      >
        <el-card class="record-card" shadow="never">
          <span class="record-card__title">{{ record.statusMsg }}</span>
          <span class="record-card__desc">{{ record.description }}</span>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-row class="form-explain">
      <i class="el-icon-info"></i>
      <span class="form-explain__title">说明：</span>
      <ol>
        <li>待审核的报名信息可以无限次修改。</li>
        <li>审核未通过的报名信息，可修改后再次提交,每人最多审核3次。</li>
        <li>审核通过的报名信息不可修改。</li>
      </ol>
    </el-row>
  </div>
</template>

<script>
import './style.scss';
export default {
  name: 'Submit',
  data() {
    return {
      submitRecords: [
        {
          id: 1,
          statusCode: 3,
          statusMsg: '审核未通过',
          description: '1111',
          created_at: '2019-03-17 18:11'
        },
        {
          id: 2,
          statusCode: 3,
          statusMsg: '审核未通过',
          description: '无',
          created_at: '	2019-03-17 23:09'
        },
        {
          id: 3,
          statusCode: 2,
          statusMsg: '待审核',
          description: '无',
          created_at: '2019-03-18 09:59'
        }
      ]
    };
  },
  methods: {
    chooseColor(code) {
      switch (code) {
        case 1:
          return '#67C23A';
        case 2:
          return '#008AFF';
        case 3:
          return '#F56C6C';
        default:
          return '#909399';
      }
    }
  }
};
</script>
