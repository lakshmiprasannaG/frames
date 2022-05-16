#! /bin/bash

x=5;
while (( $x < 60 ))
do
 node nestedFrames.js $x;
 open index.html;
 x=$(( $x + 5 ))
done
