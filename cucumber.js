module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require tests/shared/step-definitions/**/*.ts',
    '--require tests/web/step-definitions/**/*.ts',
    '--require tests/mobile/step-definitions/**/*.ts',
    '--require tests/support/**/*.ts',
    '--format @cucumber/html-formatter',
    '--format-options {"output":"reports/default-report.html"}',
    '--publish-quiet'
  ].join(' '),

  web: [
    '--require-module ts-node/register',
    '--require tests/shared/step-definitions/**/*.ts',
    '--require tests/web/step-definitions/**/*.ts',
    '--require tests/support/**/*.ts',
    'tests/web/features/**/*.feature',
    '--format @cucumber/html-formatter',
    '--format-options {"output":"reports/web-report.html"}',
    '--publish-quiet'
  ].join(' '),

  mobile: [
    '--require-module ts-node/register',
    '--require tests/shared/step-definitions/**/*.ts',
    '--require tests/mobile/step-definitions/**/*.ts',
    '--require tests/support/**/*.ts',
    'tests/mobile/features/**/*.feature',
    // '--format @cucumber/html-formatter',
    // '--format-options {"output":"reports/mobile-report.html"}',
    '--publish-quiet'
  ].join(' '),

  all: [
    '--require-module ts-node/register',
    '--require tests/shared/step-definitions/**/*.ts',
    '--require tests/web/step-definitions/**/*.ts',
    '--require tests/mobile/step-definitions/**/*.ts',
    '--require tests/support/**/*.ts',
    'tests/web/features/**/*.feature',
    'tests/mobile/features/**/*.feature',
    '--format @cucumber/html-formatter',
    '--format-options {"output":"reports/all-report.html"}',
    '--publish-quiet'
  ].join(' ')
};
