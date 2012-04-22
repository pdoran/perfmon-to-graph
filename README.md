perfmon-to-graph
================

Usage:
Install node.js
http://nodejs.org/dist/v0.6.15/node-v0.6.15.msi

save your perfmon csv file to the same direcory readfile.js is in
open up a command prompt
browse to location of readfile.js
Run 
node readfile.js [csvfile] [hours] > dataout.js
ex:
node readfile.js Perfmon_0000004.csv 4 > dataout.js
## This example will read in Perfmon_0000004.csv use 4 hours as the viewing window and pipe the output to dataout.js

As of now the graph.html file assumes you are in the same directory as the dataout.js
Open graph.html in Firefox or Chrome (Chrome seems to be a lot faster for bigger data sets)
