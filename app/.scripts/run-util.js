const path = require("node:path");
const fs = require("node:fs");
const cp = require("node:child_process");
const { arch, exit, argv } = require("node:process");

const PARENT_DIR = path.resolve(__dirname, '..');
const PROTOS_DIR = path.resolve(PARENT_DIR, 'protocol');
const CODEGEN_DIR = path.resolve(PARENT_DIR, 'generated');
const UTIL_DIR = path.resolve(__dirname, './util');

const IMAGE_NAME = "ku-eater/frontend-util";
const IMAGE_TAG = "latest";
const BUILD_ARGS = {
    "PROTOC_VERSION": "30.0",
    "PROTOBUF_JS_VERSION": "3.21.4",
    "GRPCWEB_VERSION": "1.5.0"
};

/** @type {cp.CommonExecOptions} */
const EXEC_OPTS = {
    encoding: "utf-8",
    windowsHide: true
}

/**
 * Performs architecture string conversion to Docker names
 * @returns {string} Arch
 */
function __arch() {
    switch (arch) {
        case "arm64": return "arm64";
        case "x64": return "amd64";
        default: {
            console.error("Unsupported architecture, exiting...");
            exit(1);
        }
    }
}

/**
 * Constructs a command string invoking docker
 * @param {string} args Arguments
 * @returns {string} Command
 */
function __docker(args) {
    return `docker ${args}`
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)
        .join(' ');
}

/**
 * Returns if Docker is found on machine
 * @returns {boolean} True if found
 */
function __dockerExists() {
    try {
        cp.execSync(
            __docker("--version"),
            { stdio: "ignore", ...EXEC_OPTS }
        );
        return true;
    } catch (error) {
        console.error(
            `Error while finding Docker on your machine
Make sure that Docker is on your PATH variable.`
        );
        return false;
    }
}

/**
 * Returns if Docker image exists
 * @returns {boolean} True if exists
 */
function __dockerImageExists() {
    if (!__dockerExists()) {
        exit(1);
    }

    /**
     * @type {string}
     */
    const out = cp.execSync(
        __docker("images --format={{.Repository}}:{{.Tag}}"),
        EXEC_OPTS
    );
    const images = out.split("\n");
    return images.find(image => image.trim() === `${IMAGE_NAME}:${IMAGE_TAG}`) ? true : false;
}

const __dockerBuildArgs = Object
    .entries(BUILD_ARGS)
    .map(([k,v]) => `--build-arg ${k}=${v}`)
    .join('\n');

function __dockerBuildUtilImage() {
    if (__dockerImageExists()) {
        return;
    }
    const image = `${IMAGE_NAME}:${IMAGE_TAG}`;
    console.log(`Building Docker image '${image}' on your machine...`);
    try {
        // Build image in UTIL_DIR
        const command = __docker(`build
${__dockerBuildArgs}
-t ${image}
-f ${__arch()}.Dockerfile .`);
        console.log(command);
        cp.execSync(
            command,
            {
                cwd: UTIL_DIR,
                stdio: "inherit",
                ...EXEC_OPTS
            }
        );
    } catch {
        console.error("An error occurred while building the image, exiting...")
        exit(1);
    }
}

function __fnGenerateProtocol() {
    const binaryName = "generate-protocol";
    const image = `${IMAGE_NAME}:${IMAGE_TAG}`;
    const command = __docker(`run --rm
--mount type=bind,src=${path.resolve(UTIL_DIR, binaryName)},dst=/script
--mount type=bind,src=${PROTOS_DIR},dst=/protocol
--mount type=bind,src=${CODEGEN_DIR},dst=/generated
${image}
`);
    console.log("Generating protocol files...");
    try {
        cp.execSync(
            command,
            { stdio: "inherit", ...EXEC_OPTS }
        );
    } catch {
        console.error("Generation failed!");
        exit(1);
    }
}

const functions = {
    "generate-protocol": {
        fn: __fnGenerateProtocol,
        description: "Generate protocol source files from protocol specification"
    }
}

function cli() {
    const args = argv.slice(2);

    // Check the name of function to use
    if (args.length === 0 || args[0].toLowerCase() === "help") {
        console.log("Usage: run-util.js <function>");
        Object.entries(functions).forEach(([k,v]) => {
            console.log(`${k} - ${v.description}`)
        });
        exit(0);
    } else if (Object.keys(functions).includes(args[0].toLowerCase())) {
        console.log("Bootstrapping the utility command line...");
        __dockerBuildUtilImage();
        functions[args[0]].fn();
        exit(0);
    } else {
        console.error("No such function found, exiting...");
        exit(1);
    }
}

cli();