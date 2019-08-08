// custom-completion.js
/* eslint-disable no-template-curly-in-string */
import * as monaco from 'monaco-editor'
export default [
    /**   * 内置函数   */
    {
        label: 'sysdate',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'sysdate()',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回当前日期对象 java.util.Date'
    }, {
        label: 'rand',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'rand()',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回一个介于 0-1 的随机数,double 类型'
    }, {
        label: 'rand(n)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'rand(${1:n})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回一个介于 0- n 的随机数,long 类型'
    }, {
        label: 'print',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'print([out],${1:obj})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '打印对象,如果指定 out,向 out 打印, 否则输出到控制台'
    }, {
        label: 'println',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'println([out],${1:obj})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '打印对象,如果指定 out,向 out 打印, 否则输出到控制台,在输出后换行'
    }, {
        label: 'isEqual',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'isEqual(${1:str1}, ${2: str2})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '判断str是否为空'
    }, {
        label: 'now',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'now()',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回 System.currentTimeMillis'
    }, {
        label: 'long',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'long(${1:v})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '将值转换为long类型'
    }, {
        label: 'double',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'double(${1:v})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '将值的类型转为 double'
    }, {
        label: 'boolean',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'boolean(${1:v})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '将值的类型转为 boolean，除了 nil 和 false，其他都值都将转为布尔值 true。'
    }, {
        label: 'str',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'str(${1:v})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '将值的类型转为 string'
    },{
        label: 'identity',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'identity(${1:v})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回参数 v 自身，用于跟 seq 库的高阶函数配合使用。'
    },
    {
        label: 'max',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'max(${1:v1},${2:v2},${3:v3},...)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回参数列表中的最大值，比较规则遵循 aviator 规则。'
    },
    {
        label: 'min',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'min(${1:v1},${2:v2},${3:v3},...)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回参数列表中的最小值，比较规则遵循 aviator 规则。'
    },
    {
        label: 'date_to_string',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'date_to_string(${1:date},${2:format})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '将 Date 对象转化化特定格式的字符串,2.1.1 新增'
    },
    {
        label: 'string_to_date',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'string_to_date(${1:source},${2:format})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '将特定格式的字符串转化为 Date 对 象,2.1.1 新增。'
    },
    {
        label: 'map',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: [
            '${1:seq}.forEach(item => {',
            '\t$0',
            '})'
        ].join('\n'),
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '将函数 fun 作用到集合 seq 每个元素上, 返回新元素组成的集合'
    },
    {
        label: 'filter',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText:'filter(${1:seq},${2:predicate})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '将谓词 predicate 作用在集合的每个元素 上,返回谓词为 true 的元素组成的集合'
    },
    {
        label: 'count',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText:'count(${1:seq})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回集合大小'
    },
    {
        label: 'count',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText:'count(${1:seq})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回集合大小'
    },
    {
        label: 'include',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText:'include(${1:seq},${2:element})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '判断 element 是否在集合 seq 中,返回 boolean 值'
    },
    {
        label: 'sort',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText:'sort(${1:seq})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '排序集合,仅对数组和 List 有效,返回排 序后的新集合'
    },
    {
        label: 'reduce',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText:'reduce(${1:seq},fun,${2:init})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'fun 接收两个参数,第一个是集合元素, 第二个是累积的函数,本函数用于将 fun 作用在结果值（初始值为 init 指定)和集合的每个元素上面，返回新的结果值；函数返回最终的结果值'
    },
    /**对象 */ 
    {
        label: 'math',
        kind: monaco.languages.CompletionItemKind.Class,
        insertText: 'math',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: ''
    },
    {
        label: 'string',
        kind: monaco.languages.CompletionItemKind.Class,
        insertText: 'string',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: ''
    },
    {
        label: 'seq',
        kind: monaco.languages.CompletionItemKind.Class,
        insertText: 'seq',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: ''
    },
    // /**   * 语句   */
    // {
    //     label: 'IF-ELSE',
    //     kind: monaco.languages.CompletionItemKind.Snippet,
    //     insertText: [
    //         'IF ${1:condition} THEN',
    //         '\t$0',
    //         'ELSE',
    //         '\t$0',
    //         'END'
    //     ].join('\n'),
    //     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //     documentation: 'If-Else Statement'
    // }, {
    //     label: 'WHILE-DO',
    //     kind: monaco.languages.CompletionItemKind.Snippet,
    //     insertText: [
    //         'WHILE ${1:condition} DO',
    //         '\t$0',
    //         'END'
    //     ].join('\n'),
    //     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //     documentation: 'WHILE-DO Statement'
    // }
]