const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/assets/js/**/*.js`,
      `!${srcPath}/assets/css/*`,
      `!${srcPath}/assets/css/**/*.scss`,
      `!${srcPath}/assets/css/**/*.sass`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
    ],
    ejsSrc: [
      `${srcPath}/**/*.ejs`,
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/assets/css/**/*.scss`,
      `${srcPath}/assets/css/**/*.sass`,
    ],
    outputStyle: 'expanded',
    includePaths: [
      `${nodePath}/bootstrap/scss`,
    ],
    path: `${distPath}/assets/css`,
  },
  javascript: {
    src: [
      `${srcPath}/assets/js/**/*.js`
    ],
    concat: 'all.js',
    path: `${distPath}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.slim.min.js`,
      `${nodePath}/bootstrap/dist/js/**/bootstrap.bundle.min.js`, // 已包含 popper.js
    ],
    concat: 'vendors.js',
    path: `${distPath}/assets/js`,
  },
  img: {
    src: [
      `${srcPath}/assets/images/**/*`,
    ],
  },
  clean: {
    src: distPath,
  },
  browserSetting: {
    dir: distPath,
    port: 8080,
  },
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
