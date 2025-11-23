# Build both Next.js app and CLI
build:
	bun run build
	bun run build:cli

# Clean build artifacts
clean:
	rm -rf .next
	rm -rf build
	rm -rf node_modules/.cache

# Start development server
deploy:
	bun biome check . --fix --unsafe
	bun test
	bun check
	bun run build
	bun run build:cli
	bun publish

# Update packages
update-packages:
	bunx --bun shadcn@latest add -a -o -y
	bunx --bun shadcn@latest migrate radix -y
	bunx npm-check-updates -u
	bun i
	rm components/ui/chart.tsx
	bun biome check . --fix --unsafe
