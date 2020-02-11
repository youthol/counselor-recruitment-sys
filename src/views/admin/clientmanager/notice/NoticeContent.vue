<template>
  <div class="notice-content-container">
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
      <el-button type="primary" :disabled="!btnDisabled">保存并发布</el-button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
  name: 'NoticeContent',
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
      content: ''
    };
  },
  computed: {
    btnDisabled() {
      return this.titleAvailable && this.content;
    }
  }
};
</script>

<style lang="scss">
.notice-content-container {
  height: 100%;
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
  margin-bottom: 20px;
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

.ql-container {
  height: auto !important;
}

.ql-editor {
  height: 300px !important;
}

.btn-group {
  margin-top: 20px;
}
</style>
