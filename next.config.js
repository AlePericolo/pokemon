const path = require("path");
const _ = require("lodash");
const webpack = require("webpack");

const { i18n } = require('./next-i18next.config');

const API_ENDPOINT = process.env.API_ENDPOINT;

const isDev = process.env.NODE_ENV != "production";
const timestamp = Date.now();

module.exports = (phase, { defaultConfig }) => {

	const devConfig = {
		assetPrefix: "/",
		distDir: "build/dev",
	};

	const prodConfig = {
		distDir: "build/prod",
	};

	return _.merge(
		{},
		defaultConfig,
		{
			poweredByHeader: false,
			i18n,
			images: {
				inlineImageLimit: -1,
				domains: ['raw.githubusercontent.com']
			},
			sassOptions: {
				includePaths: [path.join(__dirname, "sass")],
			},
			assetPrefix: "/",
			generateBuildId: async () => {
				return `build_${timestamp}`;
			},
			webpack: (config, options) => {
				config.resolve.alias['@sass'] = path.resolve(__dirname, 'src/sass/');
				config.resolve.alias['@src'] = path.resolve(__dirname, 'src/');
				config.plugins.push(
					new webpack.DefinePlugin({
						API_ENDPOINT: JSON.stringify(API_ENDPOINT)
					})
				);
				return config;
			}
		},
		isDev ? devConfig : prodConfig
	);
};
