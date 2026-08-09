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
	vp fmt
	vp lint
	vp test
	vp run check
	vp run build
	vp run build:cli
	vp pm publish

# Update packages
update-packages:
	vp update
	vp install
