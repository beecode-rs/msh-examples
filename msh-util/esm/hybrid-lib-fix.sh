#!/bin/bash

mkdir -p "./dist/cjs"
cat >"./dist/cjs/package.json" <<!EOF
{
	"type": "commonjs"
}
!EOF
