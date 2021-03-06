module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        files: ['src/**/*.ts', 'test/**/*.ts'],
        preprocessors: {
            'src/**/*.ts': 'coverage',
            '**/*.ts': 'karma-typescript',
        },
        karmaTypescriptConfig: {
            compilerOptions: {
                target: 'es2015',
                allowJs: true,
            },
        },
        reporters: ['progress', 'karma-typescript', 'coverage'],
        port: 9876, // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        // singleRun: false, // Karma captures browsers, runs the tests and exits
        concurrency: Infinity,
        coverageReporter: {
            reporters: [
                {
                    type: 'text',
                },
                { type: 'lcov', dir: 'coverage' },
            ],
        },
    });
};
