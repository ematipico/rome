# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/markdown-parser/index.test.ts --update-snapshots` to update.

## `smoke`

### `ast`

```javascript
MarkdownRoot {
	body: [
		MarkdownHeadingBlock {
			value: "Title"
			level: 1
			loc: SourceLocation smoke/input.md 1:0-1:7
		}
		MarkdownHeadingBlock {
			value: "Title"
			level: 2
			loc: SourceLocation smoke/input.md 2:0-2:8
		}
		MarkdownHeadingBlock {
			value: "Title"
			level: 3
			loc: SourceLocation smoke/input.md 3:0-3:9
		}
		MarkdownHeadingBlock {
			value: "Title"
			level: 4
			loc: SourceLocation smoke/input.md 4:0-4:10
		}
		MarkdownHeadingBlock {
			value: "Title"
			level: 5
			loc: SourceLocation smoke/input.md 5:0-5:11
		}
		MarkdownHeadingBlock {
			value: "Title"
			level: 6
			loc: SourceLocation smoke/input.md 6:0-6:12
		}
		MarkdownParagraph {
			children: [
				MarkdownText {
					value: "####### this will be a paragraph"
					loc: SourceLocation smoke/input.md 7:0-7:32
				}
			]
			loc: SourceLocation smoke/input.md 7:0-7:32
		}
		MarkdownHeadingBlock {
			value: "Another title"
			level: 3
			loc: SourceLocation smoke/input.md 13:0-13:17
		}
		MarkdownDividerBlock {
			value: "___"
			loc: SourceLocation smoke/input.md 14:3-14:3
		}
		MarkdownListBlock {
			children: [
				MarkdownListItem {
					children: [
						MarkdownParagraph {
							children: [
								MarkdownText {
									value: "first item"
									loc: SourceLocation smoke/input.md 15:3-15:13
								}
							]
							loc: SourceLocation smoke/input.md 15:3-15:13
						}
					]
					loc: SourceLocation smoke/input.md 15:3-15:13
				}
			]
			ordered: true
			loc: SourceLocation smoke/input.md 15:0-15:13
		}
		MarkdownListBlock {
			children: [
				MarkdownListItem {
					children: [
						MarkdownParagraph {
							children: [
								MarkdownText {
									value: "second item"
									loc: SourceLocation smoke/input.md 16:3-16:14
								}
							]
							loc: SourceLocation smoke/input.md 16:3-16:14
						}
					]
					loc: SourceLocation smoke/input.md 16:3-16:14
				}
			]
			ordered: true
			loc: SourceLocation smoke/input.md 16:0-16:14
		}
		MarkdownListBlock {
			children: [
				MarkdownListItem {
					value: "-"
					children: [
						MarkdownParagraph {
							children: [
								MarkdownText {
									value: "first item"
									loc: SourceLocation smoke/input.md 17:2-17:12
								}
							]
							loc: SourceLocation smoke/input.md 17:2-17:12
						}
					]
					loc: SourceLocation smoke/input.md 17:2-17:12
				}
			]
			ordered: false
			loc: SourceLocation smoke/input.md 17:0-17:12
		}
		MarkdownListBlock {
			children: [
				MarkdownListItem {
					value: "-"
					children: [
						MarkdownParagraph {
							children: [
								MarkdownText {
									value: "second item"
									loc: SourceLocation smoke/input.md 18:2-18:13
								}
							]
							loc: SourceLocation smoke/input.md 18:2-18:13
						}
					]
					loc: SourceLocation smoke/input.md 18:2-18:13
				}
			]
			ordered: false
			loc: SourceLocation smoke/input.md 18:0-18:13
		}
		MarkdownListBlock {
			children: [
				MarkdownListItem {
					value: "*"
					children: [
						MarkdownParagraph {
							children: [
								MarkdownText {
									value: "first item"
									loc: SourceLocation smoke/input.md 19:2-19:12
								}
							]
							loc: SourceLocation smoke/input.md 19:2-19:12
						}
					]
					loc: SourceLocation smoke/input.md 19:2-19:12
				}
			]
			ordered: false
			loc: SourceLocation smoke/input.md 19:0-19:12
		}
		MarkdownListBlock {
			children: [
				MarkdownListItem {
					value: "*"
					children: [
						MarkdownParagraph {
							children: [
								MarkdownText {
									value: "second item"
									loc: SourceLocation smoke/input.md 20:2-20:13
								}
							]
							loc: SourceLocation smoke/input.md 20:2-20:13
						}
					]
					loc: SourceLocation smoke/input.md 20:2-20:13
				}
			]
			ordered: false
			loc: SourceLocation smoke/input.md 20:0-20:13
		}
		MarkdownParagraph {
			children: [
				MarkdownText {
					value: "*"
					loc: SourceLocation smoke/input.md 21:0-21:1
				}
				MarkdownText {
					value: "paragraph"
					loc: SourceLocation smoke/input.md 21:1-21:10
				}
			]
			loc: SourceLocation smoke/input.md 21:0-21:10
		}
		MarkdownDividerBlock {
			value: "---"
			loc: SourceLocation smoke/input.md 22:3-22:3
		}
		MarkdownParagraph {
			children: [
				MarkdownText {
					value: "Paragraph"
					loc: SourceLocation smoke/input.md 23:0-23:9
				}
			]
			loc: SourceLocation smoke/input.md 23:0-23:9
		}
		MarkdownDividerBlock {
			value: "***"
			loc: SourceLocation smoke/input.md 24:3-24:3
		}
		MarkdownParagraph {
			children: [
				MarkdownText {
					value: "Lorem "
					loc: SourceLocation smoke/input.md 26:0-26:6
				}
				MarkdownEmphasisInline {
					value: [
						MarkdownText {
							value: "ipsum dolor sit"
							loc: SourceLocation smoke/input.md 26:7-26:22
						}
					]
					loc: SourceLocation smoke/input.md 26:6-26:23
				}
				MarkdownText {
					value: " amet, "
					loc: SourceLocation smoke/input.md 26:23-26:30
				}
				MarkdownEmphasisInline {
					value: [
						MarkdownText {
							value: "consectetur adipiscing elit"
							loc: SourceLocation smoke/input.md 26:31-26:58
						}
					]
					loc: SourceLocation smoke/input.md 26:30-26:59
				}
				MarkdownText {
					value: "."
					loc: SourceLocation smoke/input.md 26:59-26:60
				}
			]
			loc: SourceLocation smoke/input.md 26:0-26:60
		}
		MarkdownParagraph {
			children: [
				MarkdownText {
					value: "Lorem "
					loc: SourceLocation smoke/input.md 28:0-28:6
				}
				MarkdownEmphasisInline {
					value: [
						MarkdownText {
							value: "ipsum dolor"
							loc: SourceLocation smoke/input.md 28:8-28:19
						}
					]
					loc: SourceLocation smoke/input.md 28:6-28:21
				}
				MarkdownText {
					value: " sit amet, "
					loc: SourceLocation smoke/input.md 28:21-28:32
				}
				MarkdownEmphasisInline {
					value: [
						MarkdownText {
							value: "consectetur adipiscing"
							loc: SourceLocation smoke/input.md 28:34-28:56
						}
					]
					loc: SourceLocation smoke/input.md 28:32-28:58
				}
				MarkdownText {
					value: " elit."
					loc: SourceLocation smoke/input.md 28:58-28:64
				}
			]
			loc: SourceLocation smoke/input.md 28:0-28:64
		}
		MarkdownParagraph {
			children: [
				MarkdownText {
					value: "Lorem ipsum "
					loc: SourceLocation smoke/input.md 30:0-30:12
				}
				MarkdownEmphasisInline {
					value: []
					loc: SourceLocation smoke/input.md 30:12-30:14
				}
				MarkdownEmphasisInline {
					value: [
						MarkdownText {
							value: "dolor sit amet, consectetur"
							loc: SourceLocation smoke/input.md 30:16-30:43
						}
					]
					loc: SourceLocation smoke/input.md 30:14-30:45
				}
				MarkdownText {
					value: "__"
					loc: SourceLocation smoke/input.md 30:45-30:47
				}
				MarkdownText {
					value: " adipiscing elit."
					loc: SourceLocation smoke/input.md 30:47-30:64
				}
			]
			loc: SourceLocation smoke/input.md 30:0-30:64
		}
		MarkdownParagraph {
			children: [
				MarkdownText {
					value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					loc: SourceLocation smoke/input.md 32:0-32:56
				}
				MarkdownText {
					value: "\n"
					loc: SourceLocation smoke/input.md 32:56-33:0
				}
				MarkdownText {
					value: "Lorem "
					loc: SourceLocation smoke/input.md 33:0-33:6
				}
				MarkdownEmphasisInline {
					value: [
						MarkdownText {
							value: "ipsum"
							loc: SourceLocation smoke/input.md 33:8-33:13
						}
					]
					loc: SourceLocation smoke/input.md 33:6-33:15
				}
				MarkdownText {
					value: " dolor sit amet, consectetur adipiscing elit."
					loc: SourceLocation smoke/input.md 33:15-33:60
				}
			]
			loc: SourceLocation smoke/input.md 32:0-33:60
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	path: UIDPath<smoke/input.md>
	loc: SourceLocation smoke/input.md 1:0-33:60
}
```

### `diagnostics`

```

```
