# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > parameter-name-generator-method`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSObjectExpression {
				properties: [
					JSObjectMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "method"
								loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:4-1:10 (method)
							}
							loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:4-1:10
						}
						body: JSBlockStatement {
							body: []
							directives: []
							loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:18-1:20
						}
						head: JSFunctionHead {
							async: false
							generator: true
							hasHoistedVars: false
							params: [
								JSBindingIdentifier {
									name: "yield"
									meta: JSPatternMeta {
										loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:11-1:16
									}
									loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:11-1:16 (yield)
								}
							]
							loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:10-1:17
						}
						loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:3-1:20
					}
				]
				loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:1-1:22
			}
			loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:0-1:24
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: RAW_MARKUP {value: "Can not use 'yield' as identifier inside a generator"}
			}
			location: {
				language: "js"
				path: UIDPath<es2015/yield/parameter-name-generator-method/input.js>
				end: Position 1:16
				start: Position 1:11
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/yield/parameter-name-generator-method/input.js>
	loc: SourceLocation es2015/yield/parameter-name-generator-method/input.js 1:0-1:24
}
```

### `diagnostics`

```

 es2015/yield/parameter-name-generator-method/input.js:1:11 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Can not use 'yield' as identifier inside a generator

    ({ *method(yield) {} });
               ^^^^^


```
