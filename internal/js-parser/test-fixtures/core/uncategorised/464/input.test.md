# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 464`

### `ast`

```javascript
JSRoot {
	body: [
		JSLabeledStatement {
			body: JSWhileStatement {
				body: JSBlockStatement {
					body: [
						JSExpressionStatement {
							expression: JSFunctionExpression {
								body: JSBlockStatement {
									body: [
										JSContinueStatement {
											loc: SourceLocation core/uncategorised/464/input.js 1:33-1:42
										}
									]
									directives: []
									loc: SourceLocation core/uncategorised/464/input.js 1:31-1:44
								}
								head: JSFunctionHead {
									async: false
									generator: false
									hasHoistedVars: false
									params: []
									loc: SourceLocation core/uncategorised/464/input.js 1:28-1:30
								}
								loc: SourceLocation core/uncategorised/464/input.js 1:19-1:44
							}
							loc: SourceLocation core/uncategorised/464/input.js 1:18-1:46
						}
					]
					directives: []
					loc: SourceLocation core/uncategorised/464/input.js 1:16-1:48
				}
				test: JSBooleanLiteral {
					value: true
					loc: SourceLocation core/uncategorised/464/input.js 1:10-1:14
				}
				loc: SourceLocation core/uncategorised/464/input.js 1:3-1:48
			}
			label: JSIdentifier {
				name: "x"
				loc: SourceLocation core/uncategorised/464/input.js 1:0-1:1 (x)
			}
			loc: SourceLocation core/uncategorised/464/input.js 1:0-1:48
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
				message: RAW_MARKUP {value: "No loop label found"}
			}
			location: {
				language: "js"
				path: UIDPath<core/uncategorised/464/input.js>
				end: Position 1:33
				start: Position 1:33
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/464/input.js>
	loc: SourceLocation core/uncategorised/464/input.js 1:0-1:48
}
```

### `diagnostics`

```

 core/uncategorised/464/input.js:1:33 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ No loop label found

    x: while (true) { (function () { continue; }); }
                                     ^


```
