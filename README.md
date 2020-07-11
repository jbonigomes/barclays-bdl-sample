# Barclays BDL Sample

This is a sample of a few hand-picked components from the Barclays Design
Language (BDL)

# Getting started

`
$ npm install
$ npm run storybook
`

# Notes

- Those examples were built to work on Google Chrome, Firefox, Opera and Safari
running on Mac OSX; Safari on iOS and Chrome on Android

- Designs take a mobile first approach, for illustration and simplicity, a
breakpoint of 768px has been created, any screen narrower than that will be
considered a mobile, anything wider will be considered a desktop.

- Actions plugin

- Explain docs plugin

- Explain viewport plugin

# Structural testing

Structural testing was achieved with Jest snapshots, every component was
carefully to be completely stateless, hence, snapshots alone can cover all
posible alternatives.

# Test coverage

Jest's built in Istanbul test coverage was used to achieve 100% test coverage on
this project. They are mostly structural tests written in the format of
snapshots, with the exception of one unit test and one spy test, both sitting on
the entry point of this application.

# Accessibility (A11y) testing

Accessibility tests were covered using
[https://accessibilityinsights.io/en/](accessibilityinsights). The report can be
found in the root of this project
[./accessibility-report.pdf](accessibility-report.pdf)

A11y was carried out separated from Storybook, this page can be viewed using
`$ npm start`

# Visual regression

Happo was chosen for the visual regression tests, it uses a separate page (from
Storybook) to take all snapshots, this page can be accessed with `$ npm start`
