<template>
  <div class="notice-editor-container">
    <el-page-header class="page-header" content="公告详情" @back="goBack" />
    <div class="title-container">
      <el-input
        v-model="title"
        placeholder="请输入公告标题"
        class="title-input"
      >
        <template slot="prepend">标题：</template>
        <i slot="suffix" class="el-icon-loading el-input__icon checking"></i>
        <i
          slot="suffix"
          class="el-icon-circle-check el-input__icon check-success"
        ></i>
        <i
          slot="suffix"
          class="el-icon-circle-close el-input__icon check-filed"
        ></i>
      </el-input>

      <el-checkbox v-model="checked" class="right-options">
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content">
            默认情况下，公告会按发布时间排序；<br />置顶后，该公告会优先显示。
          </div>
          <span>置顶</span>
        </el-tooltip>
      </el-checkbox>
    </div>

    <!-- 富文本编辑器 -->
    <quill-editor
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    >
    </quill-editor>

    <div class="btn-group">
      <el-button type="primary" :disabled="!btnDisabled">保存</el-button>
      <el-button type="primary" :disabled="!btnDisabled">
        保存并发布
      </el-button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import '@/style/third-part-override.scss';

export default {
  name: 'NoticeEditor',
  components: {
    quillEditor
  },
  data() {
    return {
      editorOption: {
        placeholder: '请编辑公告内容。'
      },
      title: '',
      titleAvailable: false,
      checked: false,
      content: ''
    };
  },
  computed: {
    isEdit() {
      console.log(this.$route.query.isEdit);

      return this.$route.query.isEdit;
    },
    btnDisabled() {
      return this.titleAvailable && this.content;
    }
  },
  methods: {
    goBack() {
      this.$router.push('notice');
    },
    onEditorBlur() {},
    onEditorFocus() {},
    onEditorReady() {}
  }
};
</script>

<style lang="scss" scoped>
.notice-editor-container {
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
}

.page-header {
  margin-bottom: 20px;
}

.title-container {
  min-width: 720px;
}
.title-input {
  margin-bottom: 24px;
  width: 600px;

  .checking {
    color: #000;
  }

  .check-success {
    color: #67c23a;
  }

  .check-filed {
    color: #f56c6c;
  }
}

.right-options {
  margin-left: 40px;

  .item {
    margin-top: 8px;
  }
}

.btn-group {
  margin-top: 20px;
}
</style>
