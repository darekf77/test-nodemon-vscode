"use strict";
exports.__esModule = true;
var child_process = require("child_process");
var path = require("path");
var fs = require("fs");
var JSON5 = require("json5");
var cwd = {
    server: path.join(process.cwd())
};
function log(process) {
    process.stdout.on('data', function (data) {
        console.log(data.toString());
    });
    process.stderr.on('data', function (data) {
        console.log(data.toString());
    });
}
// TYPESCRIPT BUILD WATCH
var tscLocal = path.join(process.cwd(), 'node_modules', '.bin', 'tsc');
var serverTsc = child_process.exec(tscLocal + " -w", { cwd: cwd.server });
log(serverTsc);
var portNumber = parseInt(JSON5.parse(fs.readFileSync(path.join(__dirname, '.vscode', 'launch.json'))
    .toString()).configurations.find(function (c) { return c.request && c.request === 'attach'; }).port);
// NODEMON PROCESS
var nodemonLocal = path.join(process.cwd(), 'node_modules', '.bin', 'nodemon');
var nodemonComman = nodemonLocal + " --debug=" + portNumber + " dist/index.js";
console.log(nodemonComman);
var serverNodemon = child_process.exec(nodemonComman, { cwd: cwd.server });
log(serverNodemon);
//# sourceMappingURL=run.js.map