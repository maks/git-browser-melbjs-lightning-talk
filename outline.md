Git in the Browser
Then and Now
Maksim Lin <maks@manichord.com>

Then...

git.js

* Daniel Lucraft starts git.js in Oct 2010
* Daniel keeps working on it through to Jun 2011
* Chris Dickinson does some work on it Aug 2011
* I did a tiny bit of hacking on git.js Dec 2011
* then nothing...

##  chrisdickinson/git-*

* Chris publishes a bunch of small modules around Mar-Apr 2013
* Chris modules are "node-style" using browserify for browser support
* Chris is spurred on to publish his work by a Kickstarter project...

## js-git and crowd-funding

* Mar 2013 Tim Caswell (creationix) announces kickstarter prj
* kickstarter raises $19,587 - delivery due Jul 2013, but no...
* Jul 2013 Tim announces 2nd round via BountySource raises $34,956
* but again not enough, Today: still no easy lib to use
* Chris's work not re-used and only able to contribute a little

## git-html 

* Ryan Ackley announces git-html5 on Brackets ML on 25/7/2013
* along with usage in Tailor - Brackets port to Chrome Packaged App
* Importantly works O-O-T-B: clone, branch, pull, push !
* Well documented and simple API
* only supports Chromes FS API !
* bundled quickly by Google Chrome Text editor Packaged App
* nothing since then...

## sj-tig

* I finally have time to work on this few weeks ago
* wanted to do useful tool for myself 
* a homage to tig - ncurses UI git tool
* tried js-git but not reaady/too hard
* so... using git-html5

## Now...

* sj-tig release 0.1 published in chrome store
* submitting PRs upstream to git-html5, 
* features: clone, open local repo, show log, show commit diffs

## (sj-tig) Coming Soon...

Bugfixes!! and git ...
* diff, patch apply/export
* branch
* pull, push
* clone --recursive
* rebase
* show tree
* MERGING <- aka Holy Grail !!

## Jump in ...
 
* https://github.com/maks/sj-tig
* https://github.com/ryanackley/git-html5.js
* https://github.com/creationix/js-git
* #js-git on freenode irc
* @mklin

** THANK YOU **