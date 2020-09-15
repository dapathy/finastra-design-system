const name = 'multiselect-tags';
const suiteName = 'MultiselectTagsComponentModule';

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  name,
  preset: '../../../../jest.config.js',
  coverageDirectory: `../../../../coverage/libs/${name}`,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './testresults/',
        outputName: `junit-${name}.xml`,
        suiteName,
        classNameTemplate: '{classname}',
        titleTemplate: `${suiteName} › {classname} › {title}`,
        ancestorSeparator: ' › '
      }
    ]
  ]
};
