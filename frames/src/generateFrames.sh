#! /bin/bash

x=10;

node nestedFrames.js $x;
open index.html;

while (( $x < 60 ))
do
 x=$(( $x + 1 ))
 node nestedFrames.js $x;
done

node nestedFrames.js $x $(($x + 1))
