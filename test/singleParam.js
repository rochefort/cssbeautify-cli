var CssbeautifyCli = require('../lib/cssbeautify-cli'),
    options;

exports.help = function (test) {
    process.argv = ['node', 'lol', '-h'];

    cssbeautifyCli = CssbeautifyCli()
        .parse()
        .process();
    options = cssbeautifyCli.options;

    test.strictEqual(options, null, 'bad options ' + JSON.stringify(options));

    test.strictEqual(cssbeautifyCli.filename, null, 'bad filename');

    test.strictEqual(typeof cssbeautifyCli.exit, 'object', 'bad exit');
    test.strictEqual(cssbeautifyCli.exit.code, 0, 'bad exit code');

    test.done();
};

exports.version = function (test) {
    process.argv = ['node', 'lol', '-v'];

    cssbeautifyCli = CssbeautifyCli()
        .parse()
        .process();

    options = cssbeautifyCli.options;

    test.strictEqual(options, null, 'bad options ' + JSON.stringify(options));

    test.strictEqual(cssbeautifyCli.filename, null, 'bad filename');

    test.strictEqual(typeof cssbeautifyCli.exit, 'object', 'bad exit');
    test.strictEqual(cssbeautifyCli.exit.code, 0, 'bad exit code');

    test.done();
};