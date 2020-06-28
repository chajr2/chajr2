const { Command } = require("commander");

const program = new Command();
program.version("0.0.1");

program.option("-d, --debug", "Show debugging logs");
program.option("-V, --version", "Show the current version");

program.command("help").action(() => program.help());

program.parse(process.argv);

if (!program.args.length) program.help();
