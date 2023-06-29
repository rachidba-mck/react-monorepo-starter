'use strict';

const webClient = require('..');
const assert = require('assert').strict;

assert.strictEqual(webClient(), 'Hello from webClient');
console.info('webClient tests passed');
