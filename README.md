# What is React?

A humble attempt to make React concepts accessible to both technical and non-techincal folks.

**A talk by [Mike Turley](https://github.com/mturley) for Red Hat UXD**


## TODO

This is a slide deck in progress. I'll publish it soon. The below contents are copied from spectacle-boilerplate.

## Contents

- [Reference](#reference)
- [Getting Started](#getting-started)
- [Build & Deployment](#build-deployment)

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.md](https://github.com/FormidableLabs/spectacle/blob/master/README.md).

## Getting Started

After downloading the boilerplate, your first order of business is to open a terminal and run 
```bash
yarn
```
or 
```bash
npm install
```
if you're about that life.

Next, run 
```bash
rm -R .git
```
to remove the existing version control.

Then, to start up the local server, run
```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll.

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
npm run build
```

If you want to deploy the slideshow to surge, run 
```bash
npm run deploy
```
