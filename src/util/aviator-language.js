// custom-language.js
  /* eslint-disable no-useless-escape */
  export default {
	// Set defaultToken to invalid to see what you do not tokenize yet
	// defaultToken: 'invalid',
	// tokenPostfix: '.js',

	keywords: [
        'math','seq'
	],
	objType:['math','seq'],
	function : ['sysdate','rand','print','println','now','long','double','boolean','str',
				'identity','max','min','date_to_string','string_to_date','contains','length',
				'startsWith','endsWith','substring','indexOf','split','join','replace_first','replace_all',
				'abs','sqrt','pow','log','log10','sin','cos','tan','map','filter','count','include',
				'sort','reduce','every','not_any','some','eq','neq','gt','lt','le','nil','exists','and',
				'or','list','set','map','add','remove','get','contains_key'],

	typeKeywords: [
		'jacky'
	],

	operators: [
		'<=', '>=', '==', '!=', '===', '!==', '=>', '+', '-', '**',
		'*', '/', '%', '++', '--', '<<', '</', '>>', '>>>', '&',
		'|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=',
		'*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=',
		'^=', '@',
	],

	//常见的正则表达式
	symbols: /[=><!~?:&|+\-*\/\^%]+/,
	escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
	digits: /\d+(_+\d+)*/,
	octaldigits: /[0-7]+(_+[0-7]+)*/,
	binarydigits: /[0-1]+(_+[0-1]+)*/,
	hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,

	regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
	regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,

	// 语言的主要标记器
	tokenizer: {
		root: [
			[/[{}]/, 'delimiter.bracket'],
			{ include: 'common' }
		],

		common: [
			// 标识符和关键字
			[/[a-z_$][\w$]*/, {
				cases: {
					'@typeKeywords': 'keyword',
					'@keywords': 'keyword',
					'@function': 'custom-function',
					'@objType': 'custom-objType',
                    '@default': 'identifier',

				}
			}],
			[/[A-Z][\w\$]*/, 'type.identifier'],  // to show class names nicely
			// [/[A-Z][\w\$]*/, 'identifier'],

			// whitespace
			{ include: '@whitespace' },

			// 正则表达式：确保它在开始之前被终止（否则它是一个运算符）
			[/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|\/|,|\)|\]|\}|$))/, { token: 'regexp', bracket: '@open', next: '@regexp' }],

			// 分隔符和运算符
			[/[()\[\]]/, '@brackets'],
			[/[<>](?!@symbols)/, '@brackets'],
			[/@symbols/, {
				cases: {
					'@operators': 'delimiter',
					'@default': ''
				}
			}],

			// 数字
			[/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
			[/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
			[/0[xX](@hexdigits)/, 'number.hex'],
			[/0[oO]?(@octaldigits)/, 'number.octal'],
			[/0[bB](@binarydigits)/, 'number.binary'],
			[/(@digits)/, 'number'],

			// 分隔符：数字因为。\ d浮点数
			[/[;,.]/, 'delimiter'],

			// strings
			[/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
			[/'([^'\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
			[/"/, 'string', '@string_double'],
			[/'/, 'string', '@string_single'],
			[/`/, 'string', '@string_backtick'],
		],

		whitespace: [
			[/[ \t\r\n]+/, ''],
			[/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
			[/\/\*/, 'comment', '@comment'],
			[/\/\/.*$/, 'comment'],
		],

		comment: [
			[/[^\/*]+/, 'comment'],
			[/\*\//, 'comment', '@pop'],
			[/[\/*]/, 'comment']
		],

		jsdoc: [
			[/[^\/*]+/, 'comment.doc'],
			[/\*\//, 'comment.doc', '@pop'],
			[/[\/*]/, 'comment.doc']
		],

		// We match regular expression quite precisely
		regexp: [
			[/(\{)(\d+(?:,\d*)?)(\})/, ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']],
			[/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/, ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]],
			[/(\()(\?:|\?=|\?!)/, ['regexp.escape.control', 'regexp.escape.control']],
			[/[()]/, 'regexp.escape.control'],
			[/@regexpctl/, 'regexp.escape.control'],
			[/[^\\\/]/, 'regexp'],
			[/@regexpesc/, 'regexp.escape'],
			[/\\\./, 'regexp.invalid'],
			[/(\/)([gimsuy]*)/, [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']],
		],

		regexrange: [
			[/-/, 'regexp.escape.control'],
			[/\^/, 'regexp.invalid'],
			[/@regexpesc/, 'regexp.escape'],
			[/[^\]]/, 'regexp'],
			[/\]/, { token: 'regexp.escape.control', next: '@pop', bracket: '@close' }],
		],

		string_double: [
			[/[^\\"]+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/"/, 'string', '@pop']
		],

		string_single: [
			[/[^\\']+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/'/, 'string', '@pop']
		],

		string_backtick: [
			[/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
			[/[^\\`$]+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/`/, 'string', '@pop']
		],

		bracketCounting: [
			[/\{/, 'delimiter.bracket', '@bracketCounting'],
			[/\}/, 'delimiter.bracket', '@pop'],
			{ include: 'common' }
		],
	},
};