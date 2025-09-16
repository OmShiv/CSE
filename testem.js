/* eslint-env node */
module.exports = {
  framework: 'qunit',
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,

  launch_in_dev: ['chrome'],
  launch_in_ci: ['headless chrome'],

  browser_args: {
    Chrome: {
      args: [
        '--allow-insecure-localhost',
        '--autoplay-policy=no-user-gesture-required',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--remote-debugging-port=9222',
        '--window-size=1280,800'
      ]
    },
    ChromeHeadless: {
      args: [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        '--remote-debugging-port=9222',
        '--window-size=1280,800'
      ]
    }
  }
};
