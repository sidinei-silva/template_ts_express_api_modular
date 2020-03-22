module.exports = {
    preset: 'ts-jest',
    testEnvironment: "node",
    collectCoverage: true,
    collectCoverageFrom: ["/src/**/*.{ts,js}", "/!src/**/*.d.ts"],
}