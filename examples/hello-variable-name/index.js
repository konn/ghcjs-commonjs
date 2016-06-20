const ghcjsRequire = require('ghcjs-require');
const HelloWorld = ghcjsRequire(module, 'ghcjs-commonjs-hello-world');

HelloWorld(({wrapped}) => {
  wrapped.sayHello('John').then(() => {
    console.log('I\'m JavaScript');
    process.exit(0);
  });
});
