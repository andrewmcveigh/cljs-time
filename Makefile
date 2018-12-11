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

test: test-sydney test-adelaide test-brisbane test-utc test-amsterdam test-auckland test-colombo test-kathmandu test-midway

test-sydney: bin/boot
	export TZ=Australia/Sydney && ./bin/boot test-all

test-adelaide: bin/boot
	export TZ=Australia/Adelaide && ./bin/boot test-all

test-brisbane: bin/boot
	export TZ=Australia/Brisbane && ./bin/boot test-all

test-utc: bin/boot
	export TZ=Etc/Utc && ./bin/boot test-all

test-amsterdam: bin/boot
	export TZ=Europe/Amsterdam && ./bin/boot test-all

test-auckland: bin/boot
	export TZ=Pacific/Auckland && ./bin/boot test-all

test-colombo: bin/boot
	export TZ=Asia/Colombo && ./bin/boot test-all

test-kathmandu: bin/boot
	export TZ=Asia/Kathmandu && ./bin/boot test-all

test-midway: bin/boot
	export TZ=Pacific/Midway && ./bin/boot test-all
