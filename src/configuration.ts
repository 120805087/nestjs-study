// export default () => ({
//   port: 3000,
//   database: {
//     host: 'localhost',
//     port: 5432,
//   },
// });

// 使用 yaml 管理
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as _ from 'lodash';

const YAML_CONFIG_FILENAME = 'config.yaml';
const configPath = join(__dirname, '../config', YAML_CONFIG_FILENAME);
const defaultConfig = yaml.load(readFileSync(configPath, 'utf8'));

const YAML_ENV_CONFIG_FILENAME = `config.${process.env.NODE_ENV}.yaml`;
const envConfigPath = join(__dirname, '../config', YAML_ENV_CONFIG_FILENAME);
const envConfig = yaml.load(readFileSync(envConfigPath, 'utf8'));

export default () => {
  return _.merge(defaultConfig, envConfig);
};
