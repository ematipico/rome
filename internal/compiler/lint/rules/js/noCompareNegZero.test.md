# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `js/noCompareNegZero`

### `0`

```

 lint/js/noCompareNegZero/reject/1/file.ts:1:1 lint/js/noCompareNegZero ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not use the >= operator to compare against -0.

    (1 >= -0)
     ^^^^^^^


```

### `0: formatted`

```ts
1 >= -0;

```

### `1`

```

```

### `1: formatted`

```ts
1 >= 0;

```
