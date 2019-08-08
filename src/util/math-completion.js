// custom-completion.js
/* eslint-disable no-template-curly-in-string */
import * as monaco from 'monaco-editor'
export default [
    /**   * math内置函数   */
    {
        label: 'abs',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'abs(${1:d})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '求 d 的绝对值'
    }, {
        label: 'sqrt',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'sqrt(${1:d})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '求 d 的平方根'
    }, {
        label: 'pow',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'pow(${1:d1},${2::d2})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '求 d1 的 d2 次方'
    }, {
        label: 'log',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'log(${1:d})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '求 d 的自然对数'
    }, {
        label: 'sin',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'sin(${1:d})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '正弦函数'
    }, {
        label: 'cos',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'cos(${1:d})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '余弦函数'
    }, {
        label: 'tan',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'tan(${1:d})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '正切函数'
    }
]