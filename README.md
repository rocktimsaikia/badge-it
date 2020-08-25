# badge-it ![Build Status](<https://github.com/rocktimsaikia/badge-it/workflows/build/badge.svg>)

> Github action to automatically add [sheild badges](<https://shields.io/>) to your README.md :zap:

A Github action to add badges in your `README.md` without any hassle. We love badges but generially it's a tedious job to copy paste badges from [shield.io](<https://shields.io/>) to your `README.md` .So this Action helps to add badges without you having to do all the copy pasting and configuration.

#### [DEMO REPO](<https://github.com/RocktimSaikia/badge-it-demo>)

Currently It only supports github based badges for specfic restrictions of Github actions. [This action is a submission to [dev.to actionshackathon](<https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn>) event. But feel free this action to use it in any of your projects.]

## Usage

```yml
- name: Add Badges
        uses: rocktimsaikia/badge-it@master
        with:
          GITHUB_TOKEN: ${{ secrets.MY_TOKEN }}
          badges: 'license,version,github_stars'
          badge-style: 'flat-sqaure'
```

## Inputs

- **GITHUB\_TOKEN** - A personal Github token.
- **badges** - Name of the badges to add to your README.
- **badge-style** - The style type for your badges.

<!-- -->

## Available Badges

- ![GitHub](<https://img.shields.io/github/license/RocktimSaikia/badge-it>) \- License
- ![GitHub](<https://img.shields.io/github/package-json/v/rocktimsaikia/badge-it>) \- Version
- ![GitHub](<https://img.shields.io/github/stars/RocktimSaikia/badge-it>) \- Stars
- ![GitHub](<https://img.shields.io/github/forks/RocktimSaikia/badge-it?label=Fork?>) \- Fork counts
- ![GitHub](<https://img.shields.io/github/followers/RocktimSaikia?label=Followers>) \- Followers counts
- ![GitHub](<https://img.shields.io/github/issues-raw/RocktimSaikia/badge-it?>) \- Open issues
- ![GitHub](<https://img.shields.io/github/issues-closed-raw/RocktimSaikia/badge-it?>) \- Closed issues
- ![GitHub](<https://img.shields.io/github/issues-pr/RocktimSaikia/badge-it?>) \- Closed issues

<!-- -->

## Todo

There are many more badges that can be added here. If you want to contribute open a [issue][] to discuss before hand. Currenly this action accepts only specifically `Github` related badges. But badges for `CI` services can also be added here. Thats could a be seperate issue on itself.

## Related

- [node-encoder](<https://github.com/rocktimsaikia/node-encoder>) \- Encode and decode `base64` based strings.

<!-- -->

