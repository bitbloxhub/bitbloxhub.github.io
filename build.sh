#!/bin/bash
tailwindcss -i input.css -o output.css
ejs index.ejs -o index.html
esbuild --bundle index.ts --outfile=index.js --minify-whitespace --minify-syntax --allow-overwrite --target=es2018 --format=esm --sourcemap
tsc --noEmit --target es2018 index.ts