# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-named-export-destructuring13`

### `ast`

```javascript
JSRoot {
	body: [
		JSExportLocalDeclaration {
			exportKind: "value"
			declaration: JSFunctionDeclaration {
				id: JSBindingIdentifier {
					name: "foo4"
					loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 1:16-1:20 (foo4)
				}
				body: JSBlockStatement {
					body: []
					directives: []
					loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 1:23-1:25
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: []
					loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 1:20-1:22
				}
				loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 1:7-1:25
			}
			loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 1:0-1:25
		}
		JSEmptyStatement {
			loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 1:25-1:26
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			declaration: JSVariableDeclarationStatement {
				declaration: JSVariableDeclaration {
					kind: "const"
					declarations: [
						JSVariableDeclarator {
							id: JSBindingObjectPattern {
								properties: [
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "a"
												loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:15-2:16 (a)
											}
											loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:15-2:16
										}
										value: JSBindingArrayPattern {
											elements: [
												JSBindingObjectPattern {
													properties: [
														JSBindingObjectPatternProperty {
															key: JSStaticPropertyKey {
																value: JSIdentifier {
																	name: "foo4"
																	loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:21-2:25 (foo4)
																}
																loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:21-2:25
															}
															value: JSBindingIdentifier {
																name: "foo"
																loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:27-2:30 (foo)
															}
															loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:21-2:30
														}
													]
													meta: JSPatternMeta {
														loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:19-2:32
													}
													loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:19-2:32
												}
											]
											loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:18-2:33
										}
										loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:15-2:33
									}
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "b"
												loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:35-2:36 (b)
											}
											loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:35-2:36
										}
										value: JSBindingIdentifier {
											name: "b"
											loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:35-2:36 (b)
										}
										loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:35-2:36
									}
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "c"
												loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:38-2:39 (c)
											}
											loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:38-2:39
										}
										value: JSBindingObjectPattern {
											properties: [
												JSBindingObjectPatternProperty {
													key: JSStaticPropertyKey {
														value: JSIdentifier {
															name: "foo2"
															loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:43-2:47 (foo2)
														}
														loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:43-2:47
													}
													value: JSBindingArrayPattern {
														elements: [
															JSBindingObjectPattern {
																properties: [
																	JSBindingObjectPatternProperty {
																		key: JSStaticPropertyKey {
																			value: JSIdentifier {
																				name: "foo3"
																				loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:52-2:56 (foo3)
																			}
																			loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:52-2:56
																		}
																		value: JSBindingIdentifier {
																			name: "foo4"
																			loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:58-2:62 (foo4)
																		}
																		loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:52-2:62
																	}
																]
																meta: JSPatternMeta {
																	loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:50-2:64
																}
																loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:50-2:64
															}
														]
														loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:49-2:65
													}
													loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:43-2:65
												}
											]
											loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:41-2:67
										}
										loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:38-2:67
									}
								]
								loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:13-2:69
							}
							init: JSReferenceIdentifier {
								name: "bar"
								loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:72-2:75 (bar)
							}
							loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:13-2:75
						}
					]
					loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:7-2:76
				}
				loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:7-2:76
			}
			loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 2:0-2:76
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: []
	path: UIDPath<es2015/modules/duplicate-named-export-destructuring13/input.js>
	loc: SourceLocation es2015/modules/duplicate-named-export-destructuring13/input.js 1:0-3:0
}
```

### `diagnostics`

```

```
