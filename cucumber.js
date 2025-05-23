module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require tests/shared/step-definitions/**/*.ts',
    '--require tests/web/step-definitions/**/*.ts',
    '--require tests/mobile/step-definitions/**/*.ts',
    '--require support/**/*.ts',
    '--format',
    'json:reports/json/default-report.json',
  ].join(' '),

  web: [
    '--require-module ts-node/register',
    '--require tests/shared/step-definitions/**/*.ts',
    '--require tests/web/step-definitions/**/*.ts',
    '--require support/**/*.ts',
    'tests/web/features/**/*.feature',
    '--format',
    'json:reports/json/web-report.json',
  ].join(' '),

  mobile: [
    '--require-module ts-node/register',
    '--require tests/shared/step-definitions/**/*.ts',
    '--require tests/mobile/step-definitions/**/*.ts',
    '--require support/**/*.ts',
    'tests/mobile/features/**/*.feature',
    '--format',
    'json:reports/json/mobile-report.json',
  ].join(' '),

  all: [
    '--require-module ts-node/register',
    '--require tests/shared/step-definitions/**/*.ts',
    '--require tests/web/step-definitions/**/*.ts',
    '--require tests/mobile/step-definitions/**/*.ts',
    '--require support/**/*.ts',
    'tests/web/features/**/*.feature',
    'tests/mobile/features/**/*.feature',
    '--format',
    'json:reports/json/all-report.json',
  ].join(' ')
};
