# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 27`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "const"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "foo"
							loc: SourceLocation es2017/async-functions/27/input.js 1:6-1:9 (foo)
						}
						init: JSAssignmentExpression {
							operator: "="
							left: JSAssignmentObjectPattern {
								properties: [
									JSAssignmentObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "async"
												loc: SourceLocation es2017/async-functions/27/input.js 1:15-1:20 (async)
											}
											loc: SourceLocation es2017/async-functions/27/input.js 1:15-1:20 (async)
										}
										value: JSAssignmentIdentifier {
											name: "async"
											loc: SourceLocation es2017/async-functions/27/input.js 1:15-1:20 (async)
										}
										loc: SourceLocation es2017/async-functions/27/input.js 1:15-1:20
									}
								]
								loc: SourceLocation es2017/async-functions/27/input.js 1:13-1:20
							}
							right: JSBooleanLiteral {
								value: true
								loc: SourceLocation es2017/async-functions/27/input.js 1:23-1:27
							}
							loc: SourceLocation es2017/async-functions/27/input.js 1:13-1:27
						}
						loc: SourceLocation es2017/async-functions/27/input.js 1:6-1:27
					}
				]
				loc: SourceLocation es2017/async-functions/27/input.js 1:0-1:27
			}
			loc: SourceLocation es2017/async-functions/27/input.js 1:0-1:27
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2017/async-functions/27/input.js 1:28-1:29
			}
			loc: SourceLocation es2017/async-functions/27/input.js 1:28-1:29
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2017/async-functions/27/input.js 1:29-1:30
			}
			loc: SourceLocation es2017/async-functions/27/input.js 1:29-1:30
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2017/async-functions/27/input.js 1:31-1:33
			}
			loc: SourceLocation es2017/async-functions/27/input.js 1:31-1:33
		}
		JSBlockStatement {
			body: []
			directives: []
			loc: SourceLocation es2017/async-functions/27/input.js 1:34-1:36
		}
		JSEmptyStatement {
			loc: SourceLocation es2017/async-functions/27/input.js 1:36-1:37
		}
	]
	comments: []
	corrupt: true
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [log {category: "info", text: [RAW_MARKUP {value: "Expected character <emphasis>"}, ",", RAW_MARKUP {value: "</emphasis>"}]}]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Unexpected character <emphasis>"}, "=", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<es2017/async-functions/27/input.js>
				end: Position 1:22
				start: Position 1:21
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2017/async-functions/27/input.js>
	loc: SourceLocation es2017/async-functions/27/input.js 1:0-2:0
}
```

### `diagnostics`

```

 es2017/async-functions/27/input.js:1:21 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character =

    const foo = ({ async = true }) => {};
                         ^

  ℹ Expected character ,


```
