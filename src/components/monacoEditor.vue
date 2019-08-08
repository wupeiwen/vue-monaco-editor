<template>
    <div ref="container" class="monaco-editor" :style="`height:${height}px;width:${width}px`" >
    </div>
</template>

<script>
// 导入
    import * as monaco from 'monaco-editor'
    import vLang from '@/util/aviator-language'
    import vCompletion from '@/util/custom-completion'
    import vMath from '@/util/math-completion'
    import vString from '@/util/string-completion'    
    import vSeq from '@/util/seq-completion'
    import myCoolTheme from "@/util/myCoolTheme";
    export default {
        props: {
            height:{
                type:Number,
                default:300
            },
            width:{
                type:Number,
                default:500
            },
            opts:{
                type:Object,
                default(){
                    return {
                    }
                }
            }
        },
        name: 'monacoEditor',
        data () {
            return {
                editorValue:'',//编辑器内容
                editor:null,//编辑器对象实例
                editorOptions:null,  //编辑器配置项
               // 主要配置
                defaultOpts: {
                    language:'Aviator',//语言
                    theme:'myCoolTheme',//主题
                }                
            }
        },
        watch: {
          opts:{
              handler(val,oldVal){
                  this.initEditor()
              },
              deep:true
          }  
        },
        methods: {
            initConfig(){
                // 注册自定义语言
                monaco.languages.register({
                    id: 'Aviator'
                })
                // 为该自定义语言基本的Token
                monaco.languages.setMonarchTokensProvider('Aviator', vLang)
                
                // 定义一个仅包含与该语言匹配的规则的新主题
                monaco.editor.defineTheme('myCoolTheme', myCoolTheme);

                // 为该语言注册一个语言提示器--联想(提示)

                monaco.languages.registerCompletionItemProvider('Aviator',{
                    provideCompletionItems: function (model,position,context,token) { 

                        // 获取当前行数
                        const line = position.lineNumber
                        
                        // 获取当前列数
                        const column = position.column
                        
                        // 获取当前输入行的所有内容
                        const contentLine = model.getLineContent(line) 

                        // 获取全部内容 
                        const content = model.getValue()

                        // 通过下标来获取当前光标后一个内容，即为刚输入的内容   
                        const sym = content[column - 2]                        
                        console.log();
                        
                        // 当前输入的都是.
                        if( sym === '.'){                            
                            return _this.checkPoint(contentLine)
                        }                        
                        return {
                            suggestions: vCompletion
                        }
                        
                    },
                    // 触发联想关键符号
                    triggerCharacters:['.']
                })
            },
            initEditor() {
                var _this =  this
                // 在methods中定义的编辑器初始化方法
                this.MonacoEnvironment = {
                    getWorkerUrl: function(moduleId, label) {
                        return './editor.worker.bundle.js'
                    }
                } 
                this.initConfig()                              
                 // 初始化container的内容，销毁之前生成的编辑器
                this.$refs.container.innerHTML = ''
                
                this.editorOptions = Object.assign(this.defaultOpts, this.opts)

                // 创建编辑器
                this.editor = monaco.editor.create(this.$refs.container,this.editorOptions)
                // 编辑器内容发生改变时触发
                this.editor.onDidChangeModelContent(() => {
                    this.$emit('change', this.editor.getValue())                    
                    this.editorValue = this.editor.getValue()                         
                })     
            },
            checkPoint(contentLine){
                if(contentLine.substring(0,contentLine.length-1) === 'math')
                {
                    return {
                        suggestions: vMath
                    }
                }else if(contentLine.substring(0,contentLine.length-1) === 'seq'){
                    return {
                        suggestions: vSeq
                    }
                }
                else {
                    return {
                        suggestions: vString
                    }
                }
            },
            getVal() {
                return this.editor.getValue()
            }
        },
        mounted() {
            this.initEditor()
        },
        destroyed(){
            this.editor.dispose(); // 使用完后销毁
        }
    }
</script>

<style scoped>

</style>
