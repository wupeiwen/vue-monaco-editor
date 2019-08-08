// custom-completion.js
/* eslint-disable no-template-curly-in-string */
export default [
    /**   * 内置函数   */
    {
        label: 'contains',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'contains(${1:s1},${2:s2})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '判断 s1 是否包含 s2,返回 Boolean'
    }, {
        label: 'length',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'legth(${1:s})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '求字符串长度,返回 Long'
    }, {
        label: 'startsWith(s1,s2)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'startsWith(${1:s1},${2:s2})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 's1 是否以 s2 开始,返回 Boolean'
    }, {
        label: 'endsWith',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'endsWith(${1:s1},${2:s2})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 's1 是否以 s2 结尾,返回 Boolean'
    }, {
        label: 'substring',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'substring(${1:s},begin[,end])',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '截取字符串 s,从 begin 到 end,如果忽略 end 的话,将从 begin 到结尾,与 java.util.String.substring 一样。'
    }, {
        label: 'indexOf',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'indexOf(${1:s1},${2:s2})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'java 中的 s1.indexOf(s2),求 s2 在 s1 中 的起始索引位置,如果不存在为-1'
    }, {
        label: 'split',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'split(${1:target),regex,[limit])',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'Java 里的 String.split 方法一致,2.1.1 新增函数'
    }, {
        label: 'join',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'join(${1:seq},${2:seperator})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '将集合 seq 里的元素以 seperator 为间隔 连接起来形成字符串,2.1.1 新增函数'
    }, {
        label: 'replace_first',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'replace_first(${1:s},${2:regex},${3:replacement})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'Java 里的 String.replaceFirst 方法, 2.1.1 新增'
    }, {
        label: 'replace_all',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'replace_all(${1:s},${2:regex},${3:replacement})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'Java 里的 String.replaceAll 方法 , 2.1.1 新增'
    }
]