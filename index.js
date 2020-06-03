#!/usr/bin/env node
const qrcode = require('qrcode');
const ip = require('ip');

console.log(process.argv);
let port = process.argv[2] || '';

a = `${ip.address()}${port ? ':' : ''}${port}`
qrcode.toString(a).then(console.log);
