# badge-it ![GitHub](<https://img.shields.io/github/license/RocktimSaikia/badge-it?style=flat-square>) ![GitHub](<https://img.shields.io/github/package-json/v/RocktimSaikia/badge-it?style=flat-square>) ![GitHub](<https://img.shields.io/github/stars/RocktimSaikia/badge-it?style=flat-square>)

> Github action to automatically add [shield badges](<https://shields.io/>) to your README.md :zap:

A Github action to add badges in your `README.md` without any hassle. We love badges but generially it's a tedious job to copy paste badges from [shield.io](<https://shields.io/>) to your `README.md` .So this Action helps to add badges without you having to do all the copy pasting and configuration.

#### [DEMO REPO](<https://github.com/RocktimSaikia/badge-it-demo>)

## Usage

- **Badges** - To add your preffered badge, check it's correspoding `key` in the ***`Availabe Badges`*** section below and add the key in the `badges` input seperated by `commas (,)`.

- **Badge Style** - To specifiy style for your badges .Add your preffered badge style in the `badge-style` input. Default is `flat`.

```yml
- name: Add Badges
  uses: rocktimsaikia/badge-it@master
  with:
    GITHUB_TOKEN: ${{ secrets.MY_TOKEN }}
    badges: 'gh_license, gh_version, gh_stars'
    badge-style: 'flat-square'
```

## Inputs

- **GITHUB\_TOKEN** - A personal Github token.
- **badges** - Name of the badges to add to your README.
- **badge-style** - The style type for your badges.

<!-- -->

## Available Badges

> ***Keys*** are enclosed in `brackets ()`

* ![GitHub](https://img.shields.io/github/license/RocktimSaikia/badge-it) - Github license `(gh_license)`
* ![GitHub](https://img.shields.io/github/package-json/v/rocktimsaikia/badge-it) - Package.json version `(gh_version)`
* ![GitHub](https://img.shields.io/github/stars/RocktimSaikia/badge-it) - Stars `(gh_stars)`
* ![GitHub](https://img.shields.io/github/forks/RocktimSaikia/badge-it?label=Fork) - Fork counts `(gh_fork)`
* ![GitHub](https://img.shields.io/github/followers/RocktimSaikia?label=Followers) - Followers counts `(gh_followers)`
* ![GitHub](https://img.shields.io/github/issues-raw/RocktimSaikia/badge-it) - Open issues `(gh_open_issues)`
* ![GitHub](https://img.shields.io/github/issues-closed-raw/RocktimSaikia/badge-it) - Closed issues `(gh_closed_issues)`
* ![GitHub](https://img.shields.io/github/issues-pr/RocktimSaikia/badge-it) - open pull requests `(gh_open_pr)`
* ![GitHub](https://img.shields.io/david/RocktimSaikia/badge-it) - All dependecnies `(gh_dependencies)`
* ![GitHub](https://img.shields.io/github/repo-size/RocktimSaikia/badge-it) - Repo Size `(gh_repo_size)`
* ![GitHub](https://img.shields.io/github/languages/code-size/RocktimSaikia/badge-it) - Code Size `(gh_code_size)`
* ![GitHub](https://travis-ci.com/RocktimSaikia/badge-it.svg?branch=master) - TravisCI.com `(travis_com)`
* ![GitHub](https://travis-ci.org/RocktimSaikia/badge-it.svg?branch=master) - TravisCI.org key`(travis_org)`
<!-- -->

## Todo

There are many more badges that can be added here. If you want to contribute [open a issue](https://github.com/RocktimSaikia/badge-it/issues/new) to discuss before hand. Currenly this action accepts only specifically `Github` related badges. But badges for `CI` services can also be added here. Thats could a be seperate issue on itself.

## Related

- [node-encoder](<https://github.com/rocktimsaikia/node-encoder>) - Encode and decode `base64` based strings.

<!-- -->

