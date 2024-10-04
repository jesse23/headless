import { access, readFile } from 'node:fs/promises';
import { Data, ViewModelDefinition, generateComponentContent } from '@headless/core';
import { Window } from 'happy-dom';

export const placeHolder = (a: string) => a;

const parseView = (input: string): HTMLElement => {
  const window = new Window();
  const document = window.document;
  const parser = new window.DOMParser();
  const fragment = document.createDocumentFragment();
  fragment.appendChild(
    parser.parseFromString(`<div>${input}</div>`, 'text/html').body
      .firstChild || document.createElement('div')
  );
  return (fragment.firstChild ||
    document.createElement('div')) as unknown as HTMLElement;
};

/**
 * convert sting like 'my-button' to 'MyButton'
 *
 * @param str input string as 'my-button'
 * @returns output string as 'MyButton'
 */
export const hyphenToCamelCase = (str: string): string => {
  return str
    .replace(/^./, str[0].toUpperCase())
    .replace(/-(.)/g, (_, firstMatch) => firstMatch.toUpperCase());
};

/**
 * Transpile viewmodel json file to js code
 *
 * @param jsonPath path of viewmodel json file
 * @returns transpiled js code of viewmodel
 */
export const transpileViewModelJson = async (
  jsonPath: string
): Promise<string> => {
  const htmlPath = jsonPath
    .replace('ViewModel.json', 'View.html')
    .replace('/viewmodel/', '/view/');
  const cssPath = jsonPath
    .replace('ViewModel.json', '.module.scss')
    .replace('/viewmodel/', '/css/');
  const cssRelPath = jsonPath
    .replace('ViewModel.json', '.module.scss')
    .replace(/^.*\/viewmodel\//, '../css/');
  const componentName = hyphenToCamelCase(
    jsonPath.replace(/^.*\/viewmodel\//, '').replace('ViewModel.json', '')
  );
  const [jsonContent, htmlContent, cssExists] = await Promise.all([
    readFile(jsonPath, 'utf-8'),
    readFile(htmlPath, 'utf-8'),
    access(cssPath)
      .then(() => true)
      .catch(() => false),
  ]);

  const output = [] as string[];
  if (cssExists) {
    output.push(`import styles from '${cssRelPath}';`);
    output.push('');
  }
  output.push(`export default ${jsonContent.trim()}`.replace(/}$/, ','));
  output.push(`    view: \`\n${htmlContent.trim()}\n    \`,`);
  if (cssExists) {
    output.push('    styles: styles,');
  }
  output.push(`    name: '${componentName}'`);
  output.push('};');
  return output.join('\n');
};

export const transpileViewModel = async (
  jsonPath: string,
  resolvedMap = {} as Record<string, string>,
): Promise<string> => {
  const htmlPath = jsonPath
    .replace('ViewModel.json', 'View.html')
    .replace('/viewmodel/', '/view/');
  const cssPath = jsonPath
    .replace('ViewModel.json', '.module.scss')
    .replace('/viewmodel/', '/css/');
  const cssRelPath = jsonPath
    .replace('ViewModel.json', '.module.scss')
    .replace(/^.*\/viewmodel\//, '../css/');
  const [jsonContent, htmlContent, cssExists] = await Promise.all([
    readFile(jsonPath, 'utf-8'),
    readFile(htmlPath, 'utf-8'),
    access(cssPath)
      .then(() => true)
      .catch(() => false),
  ]);

  const output = [] as string[];
  if (cssExists) {
    output.push(`import styles from '${cssRelPath}';`);
    output.push('');
  }

  const vmDef = JSON.parse(jsonContent) as ViewModelDefinition;
  vmDef.view = htmlContent;

  // TODO: remove react later
  output.push(
    `import { registerLibDeps, defineComponentDecl } from '@headless/core';`
  );
  output.push('');

  if (vmDef.actions) {
    // TODO: only support js in the same module for now
    output.push(
      ...(await Promise.all(Object.entries(vmDef.actions).map(async ([_, { deps }]: [string, Data]) => {
        if ((deps as string).startsWith('js/')) {
          // TODO: vite cannot support import('../js/loadPanelService') when it is in mono repo
          // need to resolve later. For now use js and mention js in import explicitly
          return `registerLibDeps('${deps}', import('../${deps}.js'));`;
        }
        return '';
      })
    )));
  }

  let content = generateComponentContent(vmDef, parseView(htmlContent)).join(
    '\n'
  );

  if (cssExists) {
    content = content.replace('// styles placeholder', 'viewDef.styles = styles;');
  }

  output.push(content);
  return Object.entries(resolvedMap).reduce((prev, [key, val]) => {
    return prev.replace(key, val);
  }, output.join('\n'));
};

/**
 * transpile command view model json file to js code
 * @param jsonPath json path
 * @returns transpiled js code of command view model
 */
export const transpileJson = async (jsonPath: string): Promise<string> => {
  const jsonContent = await readFile(jsonPath, 'utf-8');
  return `export default ${jsonContent}`;
};
