# openmrs-owa-platformui

[![Build Status](https://travis-ci.org/openmrs/openmrs-owa-platformui.svg?branch=master)](https://travis-ci.org/openmrs/openmrs-owa-platformui)


A very simple UI for the OpenMRS Platform to give access to the Addon Manager, User Manager, and other tools.

### Prerequisits
- NodeJS
- Npm
- An instance of the OpenMRS platform or the reference application running

### Installation and set up

1: Clone the repo from Github. Navigate to the directory you want to set up the application in and run:
```
$ git clone https://github.com/openmrs/openmrs-owa-platformui.git
```

2. Install the dependencies using:
```
$ npm install
```

3. Set up a webpack.config file that points to your server instance

4. Created the zipped file of the application build using:
```
$ npm run build
```
5. Upload the zipped file using the OpenMRS instance GUI or run `npm run build:deploy` if the output folder path is set correctly in the webpack.config file set up.

6. Start the application by double clicking `openmrs-owa-platformui` application among the available installed OpenMRS Open Web Applications.


### Running tests
```
To run tests 
 $ npm run test
 
To run coverage
 $ npm run coverage
```

## How to contribute to this project?
 - Please read [OpenMRS wiki](https://wiki.openmrs.org/) for awareness on the code of conduct used in OpenMRS organization

## Support

Talk to us on [OpenMRS Talk](https://talk.openmrs.org/)
