SHELL := /bin/bash

init:
	git submodule init
	git submodule update
	cp -r patch/themes .