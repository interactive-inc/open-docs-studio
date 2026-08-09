# Build both Next.js app and CLI
build:
	vp run build
	vp run build:cli

# Clean build artifacts
clean:
	rm -rf .next
	rm -rf build
	rm -rf node_modules/.cache

# Start development server
deploy:
	vp fmt --write
	vp lint
	vp test
	vp run check
	vp run build
	vp run build:cli
	bun publish

# Update packages
update-packages:
	bunx --bun shadcn@latest add -a -o -y
	bunx --bun shadcn@latest migrate radix -y
	bunx npm-check-updates -u
	vp install
	rm components/ui/chart.tsx
	vp fmt --write
	vp lint --fix
