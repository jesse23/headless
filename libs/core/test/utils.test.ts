/* eslint-env jest */
import { printDomNode, parseView, applyValues } from '../src/utils';

describe('Test compile specific core/utils', () => {
  it('Verify printDomNode works as expected for pure element node case', () => {
    expect(
      printDomNode(parseView('<div><code></code></div><pre></pre>'))
    ).toEqual(
      [
        '<div>',
        '  <div>',
        '    <code></code>',
        '  </div>',
        '  <pre></pre>',
        '</div>',
      ].join('\n')
    );
  });

  it('Verify printDomNode works as expected', () => {
    expect(
      printDomNode(parseView('<div>text1<div>test11</div>text2</div>'))
    ).toEqual(
      [
        '<div>',
        '  <div>',
        '    text1',
        '    <div>',
        '      test11',
        '    </div>',
        '    text2',
        '  </div>',
        '</div>',
      ].join('\n')
    );
  });

  it('Verify applyValues works as expected', () => {
    expect(
      applyValues(
        { a: 3, b: { ba: 3 } },
        {
          'a.aa.aaa': 3,
          'b.ba.baa': 4,
          'c.ca': 5,
          d: 6,
        }
      )
    ).toEqual({
      a: {
        aa: {
          aaa: 3,
        },
      },
      b: {
        ba: {
          baa: 4,
        },
      },
      c: {
        ca: 5,
      },
      d: 6,
    });
  });
});
