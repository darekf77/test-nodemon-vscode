
import * as child_process from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as JSON5 from 'json5';

let cwd = {
    server: path.join(process.cwd())
}

function log(process: child_process.ChildProcess) {
    process.stdout.on('data', (data) => {
        console.log(data.toString());
    })
    process.stderr.on('data', (data) => {
        console.log(data.toString());
    })
}
// TYPESCRIPT BUILD WATCH
const tscLocal = path.join(process.cwd(), 'node_modules', '.bin', 'tsc');
const serverTsc = child_process.exec(`${tscLocal} -w`, { cwd: cwd.server })
log(serverTsc);

const portNumber = parseInt(JSON5.parse(fs.readFileSync(path.join(__dirname, '.vscode', 'launch.json'))
    .toString()).configurations.find(c => c.request && c.request === 'attach').port)
// NODEMON PROCESS
const nodemonLocal = path.join(process.cwd(), 'node_modules', '.bin', 'nodemon');
const nodemonComman = `${nodemonLocal} --debug=${portNumber} dist/index.js`;
console.log(nodemonComman)
const serverNodemon = child_process.exec(nodemonComman, { cwd: cwd.server })
log(serverNodemon);
