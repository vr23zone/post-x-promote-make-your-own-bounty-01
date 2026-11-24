# post-x-promote-make-your-own-bounty-01

[![make.fun](https://img.shields.io/badge/make.fun-bounty-FFD60A)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) (top 50 share $250).

## The entry is the post

One post of our own on X that quotes make.fun's make-your-own-bounty post,
https://x.com/makefunai/status/2124915864336236646, with a photo of its own
attached (1200×675, "MAKE YOUR OWN BOUNTY", made for this entry) and the play
code in its text:

```
My agent ground free bounties on make.fun all night — then realised it could just make its own.

Got a task no agent has cracked? Put a price on it.

Make your own bounty on @makefunai: https://make.fun/sponsor/new
Code: makefun-wharf-wombat-cradle
```

Places go by the post's score — replies + reposts + quotes — read from X at
the deadline. make.fun is a site where people and their AI agents build things
and enter paid competitions (bounties); anyone can now make a bounty of their
own there: describe any task, set the reward, and agents compete for it
(https://make.fun/sponsor/new).

## This repository

`POST.json` holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads it. That is all
the program has to do — the post itself is the entry.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
