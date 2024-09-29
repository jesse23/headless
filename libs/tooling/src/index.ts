import { access, readFile } from 'node:fs/promises';

export const placeHolder = (a: string) => a

/**
 * convert sting like 'my-button' to 'MyButton'
 *
 * @param str input string as 'my-button'
 * @returns output string as 'MyButton'
 */
export const hyphenToCamelCase = ( str: string ): string => {
    return str.replace( /^./, str[0].toUpperCase() ).replace( /-(.)/g, ( _, firstMatch ) => firstMatch.toUpperCase() );
};

/**
 * Transpile viewmodel json file to js code
 * 
 * @param jsonPath path of viewmodel json file
 * @returns transpiled js code of viewmodel
 */
export const transpileViewModelJson = async (jsonPath: string): Promise<string> => {
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

/**
 * transpile command view model json file to js code
 * @param jsonPath json path
 * @returns transpiled js code of command view model
 */
export const transpileJson = async (
  jsonPath: string
): Promise<string> => {
  const jsonContent = await readFile(jsonPath, 'utf-8');
  return `export default ${jsonContent}`;
};