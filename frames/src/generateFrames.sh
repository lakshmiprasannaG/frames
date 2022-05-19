#! /bin/bash

size=20;

node nestedFrames.js $size;
open index.html;

while (( $size < 50 ))
do
 size=$(( $size + 1 ))
 node nestedFrames.js $size;
done

node nestedFrames.js $size $(($size + 1))
