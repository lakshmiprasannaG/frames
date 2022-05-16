#! /bin/bash

x=5;
while (( $x < 60 ))
do
 node nestedFrames.js $x;
 open frames.html;
 x=$(( $x + 5 ))
done
