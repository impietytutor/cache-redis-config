const fs = require('fs');
const path = require('path');

class Parser {
  constructor(configFile) {
    this.configFile = configFile;
  }

  parse() {
    try {
      const configFileContent = fs.readFileSync(this.configFile, 'utf8');
      const parsedConfig = JSON.parse(configFileContent);
      return parsedConfig;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`Config file not found: ${this.configFile}`);
      } else if (error instanceof SyntaxError) {
        throw new Error(`Invalid config file format: ${this.configFile}`);
      } else {
        throw error;
      }
    }
  }
}

module.exports = Parser;