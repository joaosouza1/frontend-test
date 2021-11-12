// This file gets loaded before every ".test" file.
// See the "jest" key in package.json

// Enable using async/await in test files.
// https://stackoverflow.com/a/57439821
import 'regenerator-runtime/runtime'

// Provides custom DOM element matchers for Jest.
// https://testing-library.com/docs/ecosystem-jest-dom/
import '@testing-library/jest-dom'
