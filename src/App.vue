<template>
  <div id="app">
    <!--调用子组件-->
    <monacoEditor ref="monaco"  @change="changeValue" :opts="opts" :height="300" :width="800"></monacoEditor>
  </div>
</template>

<script>
import monacoEditor from './components/monacoEditor.vue'

export default {
  name: 'app',
  components: {
    monacoEditor
  },
  data () {
    return {
        //配置项
         opts: {
          value: '',//编辑器初始化输入内容
          autoIndent:true,//启用自动缩进调整。默认为false。
          roundedSelection: true, // 右侧不显示编辑器预览框
          autoIndent: true, // 自动缩进
        }

    }
  },
      methods: {
      // 手动获取编辑内容
      getValue() {
        this.$message.info(this.$refs.monaco.getVal())
      },
      // 编辑内容
      changeValue(val) {
        // console.log(val)
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
