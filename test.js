#!/usr/bin/env node
var fs       = require('fs')

var text = fs.readFileSync('./outline.md');
var slides = text.toString().split(/---+\n/)

if(slides.length <= 1) {
  console.error('markdown should be split into slides by --- (hdiv)')
  process.exit(1)
}

console.log("slides:"+slides.length)

slides.forEach(function(x) {console.log("===SLIDE===\n"+x) })
