<template>
  <div>
    <h1>This is submit page!</h1>
    <el-timeline>
      <el-timeline-item timestamp="2018-4-12" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'submit',
  data() {
    return {
      submitRecords: [
        {
          id: 1,
          statusMsg: '审核未通过',
          description: '无',
          created_at: '2019-03-18 09:59',
          created_at: '2019-03-18 09:59'
        },
        {
          id: 2,
          statusMsg: '审核未通过',
          description: '无',
          created_at: '2019-03-18 09:59',
          created_at: '2019-03-18 09:59'
        },
        {
          id: 3,
          statusMsg: '审核未通过',
          description: '无',
          created_at: '2019-03-18 09:59',
          created_at: '2019-03-18 09:59'
        }
      ]
    };
  }
}
</script>
