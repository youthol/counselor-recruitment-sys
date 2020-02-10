<template>
  <div class="notice-content-container">
    <div>
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
    </div>

    <!-- 富文本编辑器 -->
    <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />

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

<style lang="scss" scoped>
.notice-content-container {
  height: 100%;
  display: flex;
  flex-direction: column;
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

.quill-editor {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 300px;
}

.btn-group {
  margin-top: 20px;
}
</style>
