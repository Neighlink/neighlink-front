// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */

exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    './src/specs/*.feature' // accepts a glob
  ],
  baseUrl: 'http://localhost:4200/auth',
  // seleniumAddress: 'http://localhost:4444/wd/hub/',
  cucumberOpts: {
    // require step definitions
    require: [
      './src/steps/*.steps.ts' // accepts a glob
    ]
  }
};
// exports.config = {
//   allScriptsTimeout: 11000,
//   specs: [
//     './src/**/*.e2e-spec.ts'
//   ],
//   capabilities: {
//     'browserName': 'chrome'
//   },
//   directConnect: true,
//   baseUrl: 'http://localhost:4200/',
//   framework: 'jasmine',
//   jasmineNodeOpts: {
//     showColors: true,
//     defaultTimeoutInterval: 30000,
//     print: function() {}
//   },
//   onPrepare() {
//     require('ts-node').register({
//       project: require('path').join(__dirname, './tsconfig.json')
//     });
//     jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
//   }
// };
