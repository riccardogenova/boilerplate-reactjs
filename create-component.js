#!/usr/bin/env node
/** @format */

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { exec } = require('child_process');

const COMPONENT_TYPES = {
  'components-ui': 'UI component',
  'components-shared': 'Shared component',
  pages: 'Pages',
  utils: 'Utility function',
  hooks: 'Hook function',
};

function createComponent() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'componentType',
        message: 'Select file type:',
        choices: Object.values(COMPONENT_TYPES),
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter file name:',
        validate: (input, answers) => {
          switch (answers.componentType) {
            case 'UI component':
              if (/^UI([A-Z][a-z]*)+$/.test(input)) return true;
              else
                return 'UI component must begin with "UI" and the next letter in UPPERCASE and may only include letters, numbers, underscores and hashes.';

            case 'Shared component':
              if (/^([A-Z][a-z]*)+$/.test(input)) return true;
              else
                return 'shared component must begin with UPPERCASE letter and may only include letters, numbers, underscores and hashes.';

            case 'Pages':
              if (/^([A-Z][a-z]*)+$/.test(input)) return true;
              else
                return 'Pages must begin with UPPERCASE letter and may only include letters, numbers, underscores and hashes.';

            case 'Utility function':
              if (/^utility([A-Z][a-z]*)+$/.test(input)) return true;
              else
                return 'utility function must begin with "utility" and the next letter in UPPERCASE and may only include letters, numbers, underscores and hashes.';

            case 'Hook function':
              if (/^use([A-Z][a-z]*)+$/.test(input)) return true;
              else
                return 'hook function must begin with "use" and the next letter in UPPERCASE and may only include letters, numbers, underscores and hashes.';

            default:
              return 'Invalid component type';
          }
        },
      },
      {
        type: 'confirm',
        name: 'hasTest',
        message: 'Would you like to add this component to unit test?',
        when: answers => answers.componentType === 'UI component' || answers.componentType === 'Shared component',
      },
      {
        type: 'confirm',
        name: 'hasStory',
        message: 'Would you like to add this component to stories?',
        when: answers => answers.componentType === 'UI component' || answers.componentType === 'Shared component',
      },
    ])
    .then(({ componentName, componentType, hasTest, hasStory }) => {
      const componentTypeKey = Object.keys(COMPONENT_TYPES).find(key => COMPONENT_TYPES[key] === componentType);
      const dirPath = path.join(
        process.cwd(),
        componentTypeKey === 'components-ui'
          ? `src/components-ui/${componentName.slice(2)}`
          : componentTypeKey === 'components-shared'
          ? `src/components-shared/${componentName}`
          : componentTypeKey === 'pages'
          ? `src/pages/${componentName.toLowerCase()}/`
          : componentTypeKey === 'utils'
          ? 'src/utils'
          : 'src/hooks',
      );

      const fileName = componentTypeKey === 'utils' || componentTypeKey === 'hooks' ? componentName : 'index';
      const componentFilePath = path.join(
        dirPath,
        `${componentTypeKey === 'utils' || componentTypeKey === 'hooks' ? fileName + '.ts' : fileName + '.tsx'}`,
      );

      if (fs.existsSync(componentFilePath)) {
        console.error(`Component "${componentName}" already exists!`);
        process.exit(1);
      }

      fs.mkdirSync(dirPath, { recursive: true });

      let componentContent = '';

      switch (componentTypeKey) {
        case 'components-ui':
          componentContent = `
import { memo } from 'react';

import styled from '@emotion/styled';

import { useAppTranslation } from '../../i18n/hooks';
import { TTranslationsGeneral } from '../../i18n/translations/general';

// #region ::: STYLED
const Styled${componentName.slice(2)}Container = styled.div\({
  /* Add your styles here */
\});
// #endregion  

export interface Props {
  label?: TTranslationsGeneral;
  /* Add your props here */
}
                    
export const ${componentName} = memo(({ label= 'default' }: Props) => {
  const { t } = useAppTranslation();

  return <Styled${componentName.slice(2)}Container>{t(label)}</Styled${componentName.slice(2)}Container>
});`;
          break;

        case 'components-shared':
          componentContent = `
import { memo } from 'react';

import styled from '@emotion/styled';

import { useAppTranslation } from '../../i18n/hooks';
import { TTranslationsGeneral } from '../../i18n/translations/general';

// #region ::: STYLED
const Styled${componentName}Container = styled.div\({
  /* Add your styles here */
\});
// #endregion  

export interface Props {
  label?: TTranslationsGeneral;
  /* Add your props here */
}
                    
export const ${componentName} = memo(({ label= 'default' }: Props) => {
  const { t } = useAppTranslation();

  return <Styled${componentName}Container>{t(label)}</Styled${componentName}Container>
});
`;
          break;

        case 'pages':
          componentContent = `
import styled from '@emotion/styled';

import { useAppTranslation } from '../../i18n/hooks';

// #region ::: STYLED
const Styled${componentName}Container = styled.div\({
  /* Add your styles here */
\});
// #endregion  

export const ${componentName} = () => {
  const { t } = useAppTranslation();

  return <Styled${componentName}Container>{t('default')}</Styled${componentName}Container>
};`;
          break;

        case 'utils':
          componentContent = `
export const ${componentName} = () => {
  // Add your utility function here
};`;
          break;
        case 'hooks':
          componentContent = `
export const ${componentName} = () => {
  // Add your hook function here
  const count = 0;
  return {
    // Add your return here
    count
  }
};
`;

        default:
          componentContent = '';
      }

      fs.writeFileSync(componentFilePath, componentContent);

      if (hasTest) {
        componentContent = `
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { ${componentName} } from '../${componentTypeKey}/${
          componentTypeKey === 'components-ui' ? componentName.slice(2) : componentName
        }';
import { store } from '../redux/createStore';
        
describe('${componentTypeKey === 'components-ui' ? componentName.slice(2) : componentName}', () => {
  test('renders without errors', () => {
   render(
    <Provider store={store}>
    <${componentName} />
    </Provider>,
    );
    expect(screen.getByText('Insert your text')).toBeInTheDocument();
  });
});         
`;
        const componentFilePath = path.join(
          'src/__tests__',
          `${
            componentTypeKey === 'components-ui' ? componentName.slice(2).toLowerCase() : componentName.toLowerCase()
          }.test.tsx`,
        );
        fs.writeFileSync(componentFilePath, componentContent);
      }
      if (hasStory) {
        componentContent = `
import { Provider } from 'react-redux';

import { Props, ${componentName} } from '.';
import { store } from '../../redux/createStore';

const story = {
  title: "${componentTypeKey === 'components-ui' ? componentName.slice(2) : componentName}",
  component: ${componentName},
  argTypes: {},
}
export const Component = (props:Props) => (
  <Provider store={store}>
    <${componentName} {...props}/>
  </Provider>
);

Component.argTypes = {
  label: 'default',
};

export default story;
        `;

        const componentFilePath = path.join(
          `src/${componentTypeKey}/${componentTypeKey === 'components-ui' ? componentName.slice(2) : componentName}/`,
          'index.stories.tsx',
        );
        fs.writeFileSync(componentFilePath, componentContent);
      }

      if (componentType === 'Pages') {
        const filePath = './src/App.tsx';
        const strFindOne = "from 'react';";
        const strFindTwo = '<Route path="/" element={<Home />} />';

        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) throw err;

          const insertionPoint1 = data.indexOf(strFindOne) + strFindOne.length;

          const insertionPoint2 = data.indexOf(strFindTwo) + strFindTwo.length;

          const code1 = `\nimport { ${componentName} } from './pages/${componentName.toLowerCase()}';`;
          const newData1 = data.slice(0, insertionPoint1) + code1 + data.slice(insertionPoint1);

          const code2 = `\n<Route path="/${componentName.toLowerCase()}" element={<${componentName} />} />\n`;
          const newData2 = newData1.slice(0, insertionPoint2) + code2 + newData1.slice(insertionPoint2);

          fs.writeFile(filePath, newData2, 'utf8', err => {
            if (err) throw err;

            console.log('File modificato con successo!');
          });
        });

        exec('eslint --fix ./src/App.tsx && prettier src/App.tsx --write', (error, stdout, stderr) => {
          if (error) {
            console.error(`Error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
          }
          console.log(`Output: ${stdout}`);
        });
      }

      console.log(`Component "${componentName}" created successfully as "${componentType}" files!`);
    });
}

createComponent();
