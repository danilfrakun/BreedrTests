exports.config = {
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://app2-staging.breedr.co/',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'tst',
  
  helpers: {
    WebDriver: {
      url: 'https://myapp.com',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      windowSize: false,
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
      }
    },
  }
}