module.exports = {
    verbose: true,
    roots: ["<rootDir>/src/"],
    moduleFileExtensions: ['js', 'vue'],
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "vue-jest"
    },
    snapshotSerializers: [
        "<rootDir>/node_modules/jest-serializer-vue"
    ],
    testMatch: [
        '**/src/**/*.spec.js'
    ]
};
