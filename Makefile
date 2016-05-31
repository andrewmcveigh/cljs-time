# .PHONY: deps build test clean

SHELL       := /usr/bin/env bash
export PATH := bin:$(PATH)

clean:
	(rm -Rfv bin)
	(rm -Rfv target)

mkdirs:
	mkdir -p bin

bin/boot: mkdirs
	curl -fsSLo bin/boot https://github.com/boot-clj/boot-bin/releases/download/latest/boot.sh
	chmod 755 bin/boot

deps: bin/boot
	export BOOT_EMIT_TARGET=no && ./bin/boot -V

build: bin/boot
	export BOOT_EMIT_TARGET=no && ./bin/boot build

test: bin/boot
	./bin/boot test-all
