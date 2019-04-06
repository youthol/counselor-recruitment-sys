<template>
  <div class="content-timeline">
    <!-- <h1>This is submit page!</h1> -->
    <el-timeline>
      <el-timeline-item
        v-for="record in submitRecords"
        :key="record.id"
        :timestamp="record.created_at"
        placement="top"
      >
        <el-card class="record-card">
          <span class="record-card__title">{{ record.statusMsg }}</span>
          <span class="record-card__desc">{{ record.description }}</span>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import './style.scss';
export default {
  name: 'submit',
  data() {
    return {
      submitRecords: [
        {
          id: 1,
          statusCode: 1,
          statusMsg: '审核未通过',
          description: '1111',
          created_at: '2019-03-17 18:11',
          created_at: '2019-03-17 18:11'
        },
        {
          id: 2,
          statusCode: 1,
          statusMsg: '审核未通过',
          description: '无',
          created_at: '	2019-03-17 23:09',
          created_at: '	2019-03-17 23:09'
        },
        {
          id: 3,
          statusCode: 1,
          statusMsg: '待审核',
          description: '无',
          created_at: '2019-03-18 09:59',
          created_at: '2019-03-18 09:59'
        }
      ]
    };
  }
};
</script>
