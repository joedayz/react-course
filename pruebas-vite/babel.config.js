import { transform } from "@babel/core";

export const presets = [['@babel/preset-env', { targets: { node: 'current' } }]];