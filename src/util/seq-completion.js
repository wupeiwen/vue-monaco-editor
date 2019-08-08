// custom-completion.js
/* eslint-disable no-template-curly-in-string */
export default [
    /**   * math内置函数   */
    {
        label: 'every',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'every(${1:seq}, fun)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'fun 接收集合的每个元素作为唯一参数，返回 true 或 false。当集合里的每个元素调用 fun 后都返回 true 的时候，整个调用结果为 true，否则为 false。',
        detail: 'fun 接收集合的每个元素作为唯一参数，返回 true 或 false。当集合里的每个元素调用 fun 后都返回 true 的时候，整个调用结果为 true，否则为 false。',
    }, {
        label: 'not_any',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText:  'not_any(${1:seq}, fun)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'fun 接收集合的每个元素作为唯一参数，返回 true 或 false。当集合里的每个元素调用 fun 后都返回 false 的时候，整个调用结果为 true，否则为 false。',
        detail: 'fun 接收集合的每个元素作为唯一参数，返回 true 或 false。当集合里的每个元素调用 fun 后都返回 false 的时候，整个调用结果为 true，否则为 false。',
    }, {
        label: 'some',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'some(${1:seq}, fun)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '求 d1 的 d2 次方',
        detail: '求 d1 的 d2 次方',
    }, {
        label: 'eq',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'eq(${1:value})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回一个谓词,用来判断传入的参数是否跟 value 相等,用于 filter 函数,如filter(seq,seq.eq(3)) 过滤返回等于3 的元素组成的集合',
        detail: '返回一个谓词,用来判断传入的参数是否跟 value 相等,用于 filter 函数,如filter(seq,seq.eq(3)) 过滤返回等于3 的元素组成的集合',
    }, {
        label: 'neq',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'neq(${1:value})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '与 seq.eq 类似,返回判断不等于的谓词',
        detail: '与 seq.eq 类似,返回判断不等于的谓词',
    },{
        label: 'gt',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'gt(${1:value})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回判断大于 value 的谓词',
        detail: '返回判断大于 value 的谓词',
    },{
        label: 'ge',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'ge(${1:value})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回判断大于等于 value 的谓词',
        detail: '返回判断大于等于 value 的谓词',
    },{
        label: 'lt',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'lt(${1:value})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回判断小于 value 的谓词',
        detail: '返回判断小于 value 的谓词'
    },{
        label: 'le',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'le(${1:value})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回判断小于等于 value 的谓词',
        detail:'返回判断小于等于 value 的谓词',
    },{
        label: 'nil',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'nil(${1:value})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回判断是否为 nil 的谓词'
    },{
        label: 'exists',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'exists(${1:value})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '返回判断不为 nil 的谓词',
        detail: '返回判断不为 nil 的谓词'
    },{
        label: 'and',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'and(${1:p1},${2:p2},${3:p3},...)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '组合多个谓词函数，返回一个新的谓词函数，当今仅当 p1、p2、p3 ...等所有函数都返回 true 的时候，新函数返回 true',
        detail: '组合多个谓词函数，返回一个新的谓词函数，当今仅当 p1、p2、p3 ...等所有函数都返回 true 的时候，新函数返回 true'
    },{
        label: 'or',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'or(${1:p1},${2:p2},${3:p3},...)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '组合多个谓词函数，返回一个新的谓词函数，当 p1, p2, p3... 其中一个返回 true 的时候，新函数立即返回 true，否则返回 false。',
        detail: '组合多个谓词函数，返回一个新的谓词函数，当 p1, p2, p3... 其中一个返回 true 的时候，新函数立即返回 true，否则返回 false。'
    },{
        label: 'list',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'list(${1:p1},${2:p2},${3:p3},...)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '创建一个 java.util.ArrayList 实例，添加参数到这个集合并返回。',
        detail: '创建一个 java.util.ArrayList 实例，添加参数到这个集合并返回。'
    },{
        label: 'set',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'set(${1:p1},${2:p2},${3:p3},...)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '创建一个 java.util.HashSet 实例，添加参数到这个集合并返回。',
        detail: '创建一个 java.util.HashSet 实例，添加参数到这个集合并返回。'
    },{
        label: 'map',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'map(${1:k1},${2:v2},${3:k2},${4:v2},...)',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '创建一个 java.util.HashMap 实例，参数要求偶数个，类似 k1,v1 这样成对作为 key-value 存入 map，返回集合。',
        detail: '创建一个 java.util.HashMap 实例，参数要求偶数个，类似 k1,v1 这样成对作为 key-value 存入 map，返回集合。'
    },{
        label: 'add',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'add(${1:coll},${2:element})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '往集合 coll 添加元素，集合可以是 java.util.Collection，也可以是 java.util.Map（三参数版本)',
        detail: '往集合 coll 添加元素，集合可以是 java.util.Collection，也可以是 java.util.Map（三参数版本)'
    },{
        label: 'remove',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'remove(${1:coll},${2:element})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '从集合或者 hash map 中删除元素或者 key',
        detail: '从集合或者 hash map 中删除元素或者 key'
    },{
        label: 'get',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'get(${1:coll},${2:element})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: '从 list、数组或者 hash-map 获取对应的元素值，对于 list 和数组， element 为元素的索引位置（从 0 开始），对于 hash map 来说， element 为 key。',
        detail: '从 list、数组或者 hash-map 获取对应的元素值，对于 list 和数组， element 为元素的索引位置（从 0 开始），对于 hash map 来说， element 为 key。'
    },{
        label: 'min',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'min(${1:coll})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation:'返回集合中的最小元素，要求集合元素可比较（实现 Comprable 接口），比较规则遵循 aviator 规则。' ,
        detail: '返回集合中的最小元素，要求集合元素可比较（实现 Comprable 接口），比较规则遵循 aviator 规则。'
    },{
        label: 'max',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'max(${1:coll})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation:'返回集合中的最大元素，要求集合元素可比较（实现 Comprable 接口），比较规则遵循 aviator 规则。' ,
        detail: '返回集合中的最大元素，要求集合元素可比较（实现 Comprable 接口），比较规则遵循 aviator 规则。'
    },{
        label: 'contains_key',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'contains_key(${1:map},${2:key})',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation:'当 map 中存在 key 的时候（可能为 null），返回 true。' ,
        detail: '当 map 中存在 key 的时候（可能为 null），返回 true。'
    }
]