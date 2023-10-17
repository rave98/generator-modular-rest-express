'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the super ${chalk.red('generator-modular-rest-express')} generator! We will guide you through the creation of a REST API written in NodeJS`
      )
    );

    this.answers = await this.prompt([
      {
        type: `input`,
        name: `appName`,
        message: `Your app name:`
      },
      {
        type: `input`,
        name: `version`,
        message: `App version:`
      },
      {
        type: `input`,
        name: `apiRoot`,
        message: `Path of the API root:`
      },
      {
        type: `select`,
        name: `scaffoldingStructure`,
        message: `Which scaffolding would you like?`,
        choices: [
          {
            'name': 'Complete',
            'value': 'complete',
            'description': 'Dedicated folder for routes, middlewares, services (business logic), repositories (data access)'
          },
          {
            'name': 'Standard',
            'value': 'standard',
            'description': 'Dedicated folder for routes, services (business logic), repositories (data access)'
          },
          {
            'name': 'Two layers',
            'value': 'twolayers',
            'description': 'Dedicated folder for routes, services (business logic)'
          },
          {
            'name': 'Interface only',
            'value': 'interface',
            'description': 'Dedicated folder for routes, middlewares'
          },
        ]
      },
      {
        type: `confirm`,
        name: `typescript`,
        message: `Would you like typescript?`
      },
      {
        type: `confirm`,
        name: `passport`,
        message: `Would you like PassportJS, for authentication?`
      },
      {
        type: `select`,
        name: `logging`,
        message: `Which type of loggin would you like?`,
        choices: [
          {
            'name': `No logging`,
            'value': `nologging`,
            'description': `I will handle the logging`
          },
          {
            'name': `Morgan`,
            'value': `morgan`,
            'description': `Add MorganJS (only for HTTP requests logging)`
          },
          {
            'name': `Winston`,
            'value': `winston`,
            'description': `Add WinstonJS (all purpose structured logging) (recommended)`
          },

        ]
      },
    ]);
  }

  writing() {
  }

  install() {
    this.installDependencies();
  }
};
