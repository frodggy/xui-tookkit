#!/bin/bash
TEST_DIR="/home/samsara/Documents/projects/frameworks/xui/packages/xBase/tests"


tsc
npx webpack -c "$TEST_DIR/webpack.config.js" --mode development