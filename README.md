# @interactive-inc/docs

Markdown ドキュメントを閲覧・編集する Next.js アプリと CLI。

## Installation

```bash
vp add -D @interactive-inc/docs
```

## Usage

```bash
vp exec docs ./docs --port 4242
```

## Development

```bash
vp install
vp run dev -- ../open-docs-client/docs
```

### CLI

```bash
vp exec node ./bin/docs.js ../open-docs-client/docs --port 4242
```

## Verification

```bash
vp lint
vp fmt
vp test
vp run check
vp run build
```
