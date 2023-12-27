/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [
		'next',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'arrow-parens': ['error', 'always'],
		'@next/next/no-img-element': 'off',
		'import/no-anonymous-default-export': 'off',
		'@next/next/no-html-link-for-pages': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'react/display-name': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ prefer: 'type-imports', fixStyle: 'inline-type-imports' },
		],
	},
	overrides: [
		{
			files: ['**/*.js', '**/*.cjs'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
	ignorePatterns: [
		'**/node_modules/**',
		'**/.eslintrc.js',
		'**/*.config.js',
		'**/*.config.cjs',
		'packages/config/**',
		'**/migrations/**',
		'**/build/**',
		'**/dist/**',
		'**/.next/**',
		'**/generated/**',
		'**/public/**',
	],
	reportUnusedDisableDirectives: true,
	parserOptions: {
		project: ['./website/tsconfig.json', './scripts/tsconfig.json', './admin/tsconfig.json', './api/tsconfig.json'],
	},
	settings: {
		next: {
			rootDir: ['website'],
		},
	},
}