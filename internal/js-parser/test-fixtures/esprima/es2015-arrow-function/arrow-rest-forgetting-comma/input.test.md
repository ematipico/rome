# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-arrow-function > arrow-rest-forgetting-comma`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "a"
				loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:1-1:2 (a)
			}
			loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:0-1:2
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:3-1:6
			}
			loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:3-1:6
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "b"
				loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:6-1:7 (b)
			}
			loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:6-1:7
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:7-1:8
			}
			loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:7-1:8
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:9-1:11
			}
			loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:9-1:11
		}
		JSExpressionStatement {
			expression: JSNumericLiteral {
				value: 0
				loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:12-1:13
			}
			loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:12-1:13
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
				message: [RAW_MARKUP {value: "Unexpected character <emphasis>"}, ".", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js>
				end: Position 1:6
				start: Position 1:3
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js>
	loc: SourceLocation esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/es2015-arrow-function/arrow-rest-forgetting-comma/input.js:1:3 parse(js) ━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character .

    (a ...b) => 0
       ^^^

  ℹ Expected character ,


```
