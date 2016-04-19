# Building a CLI with yargs

> Notes for a lightning talk

This tool contains the notes or "slides" (if you want to call them that) for a lightning talk I gave at the [Atlanta JavaScript meetup on April 18, 2016](http://www.meetup.com/AtlantaJavaScript/events/229966890/).

The content is brief since the talk was supposed to be 10 minutes or less.

Instead of using a traditional presentation format, I thought it would be neat to use a CLI built with yargs to "present" content on how to build a CLI using yargs, so I took my notes and hacked them into this crude tool.

I'm not sure if I want to publish this to npm, since it's not a super useful package in and of itself, but I'm considering extracting the "presentation-as-a-CLI" into its own package.

That being said, if you want to install and play with this, you can.

For more info on yargs, check out the website at http://yargs.js.org.

## Installation

```
$ git clone https://github.com/nexdrew/yargs-lightning.git
$ cd yargs-lightning && npm i
$ ./cli.js --help
```

## Usage

To start the presentation:

```
$ ./cli.js start
```

To view the next "slide":

```
$ ./cli.js next
```

To view the previous "slide":

```
$ ./cli.js prev
```

For a better presentation, consider clearing the console before each slide:

```
$ clear && ./cli.js next
```

## How it works

The title and notes for each "slide" are defined in `notes.json` (btw, writing presentation content in JSON format is ugly).

The content of `notes.json` is an array of objects. Each object contains a `"title"` and `"desc"`.

The title is an object defining `"text"` with optional `"style"` (`chalk` style) and `"font"` (`figlet` font).

The description/note is just a string.

The code examples displayed are looked up under the `code` directory per slide index. If a file exists for the index (e.g. `code/1.js`), it is read and output with syntax highlighting to the console using `hl`.

To keep track of which slide you're on between executions, the CLI increments or decrements an integer in a local text file called `step`.

## Ideas for improvement

- Would be cool if slide content could be markdown. Writing content in JSON is the worst. One text file per slide would probably be better, even.

- The content for each slide should allow for a mix of text and code samples instead of just one block of text and one code sample underneath.

- Code samples/snippets should support more than js. (This is a self-imposed limitation right now.)

- Would be nice to somehow expose the file name to the code sample/snippet. Maybe allow for a placeholder in the code that is replaced before rendering/output.
