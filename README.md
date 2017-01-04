# navigationExperimentalDemo

## Usage

This is one of the simpliest react-native setup, so just make sure you have
everything  you need listed
[here](https://facebook.github.io/react-native/docs/getting-started.html), and
you're good to go with a simple:
```bash
# Clone the app
git clone http://192.168.1.90:10080/brick__/navigationExperimentalDemo.git
# Build it
react-native run-android
# And start the local server
react-native start
```
You should now see the app running on your emulator.

## Why

This is the same code as the one present on the
[facebook's react-native UIExplorer demo](https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/js/NavigationExperimental/NavigationCardStack-example.js)
for the simple "Card Stack Example" except it has the new ES6 syntax. It even
has the exact same NavigationExampleRow.js file.  This exists because the
example showed is in a single file, and when i tried to actually make use of
it and use the new syntax, it didn't work; I kept getting a pretty cryptic
error which turned out to be caused by an import statement missused, due to the
new ES6 syntax which I apparently don't fully understand.
```bash
Invariant Violation:
  Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
```
The error doesn't appear anymore on the actual app, but the basic test to check
if the app renders correctly still outputs it as a warning, and the test fails.

You're welcome to open an issue if you have or had the same error and managed
to get rid of it one way or another, either from jest or the app itself.

## Todo

I may add some more use cases from NavigationExperimental in here to toy with it.
