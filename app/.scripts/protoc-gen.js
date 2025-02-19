const { env, argv, exit, platform } = require("node:process");
const { spawnSync } = require("node:child_process");

const cwd = __dirname.replace("\\", "/").split("/").slice(0, -2).join("");

const protoc = env.PROTOC_PATH || "protoc";
let protoc_gen_ts_path = cwd + "/node_modules/.bin/protoc-gen-ts";
const out_dir = env.OUT_DIR || cwd + "/generated";

if (platform == 'win32') protoc_gen_ts_path = protoc_gen_ts_path + ".cmd";

const args = process.argv.slice(2);
if (args.length < 2) {
    console.error("Not enough params! Arg format: [IMPORT_FOLDER] [PROTOS...]");
    exit(1);
}

const {stdout, stderr} = spawnSync(
    protoc,
    [
        `--plugin="protoc-gen-ts=${protoc_gen_ts_path}"`,
        `--js_out="import_style=commonjs,binary:${out_dir}"`,
        `--ts_out="service=grpc-web:${out_dir}"`,
        `-I${args[0]}`,
        ...args.slice(1)
    ]
);

console.log(stdout.toString());
if (stderr) console.error(stderr.toString());