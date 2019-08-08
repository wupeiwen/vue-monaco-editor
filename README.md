# vue-monaco-editor 编辑器组件使用

## 安装

### monaco-editor和monaco-editor-webpack-plugin安装

*  yarn add monaco-editor
*  yarn add monaco-editor-webpack-plugin

### 配置vue.config.js(vue-cli3.0需在根目录中新建)

	const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
	module.exports = {
	    configureWebpack: {
	        plugins: [
	            new MonacoWebpackPlugin()
	        ]
	    }
	}

## 组件

* monacoEditor
   * opts 配置项
      
		    value: '',//编辑器初始化输入内容
		    autoIndent:true,//启用自动缩进调整。默认为false。
		    roundedSelection: true, // 右侧不显示编辑器预览框
		    autoIndent: true, // 自动缩进
            language:'Aviator',//语言
            theme:'myCoolTheme',//主题
  *  getValue() 手动获取编辑内容
  *  changeValue(val) 编辑器内容发生改变时触发，val为当前编辑器内容 
  
* 自义定语言 

   * 语言高亮token
     1. monaco.languages.setMonarchTokensProvider(languageId, tokenOpt)
     2. 配置项参考 @/util/aviator-language
     
   * 语言提示器
   	 1. monaco.registerCompletionItemProvider(languageId, {provideCompletionItems:function}) 
   	 2. provideCompletionItems 函数返回项 配置参考 @/util/custom-completion	
      
* 自定义主题 
	
	* monaco.editor.defineTheme('themeId', themeOption);
	* 配置项参考 @/util/myCoolTheme