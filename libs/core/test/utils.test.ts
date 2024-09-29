/* eslint-env jest */
import {
    printDomNode,
    parseView
} from '../src/utils';

describe( 'Test compile specific core/utils', () => {
    it( 'Verify printDomNode works as expected for pure element node case', () => {
        expect( printDomNode( parseView( '<div><code></code></div><pre></pre>' ) ) ).toEqual( [
            '<div>',
            '  <div>',
            '    <code></code>',
            '  </div>',
            '  <pre></pre>',
            '</div>'
        ].join( '\n' ) );
    } );

    it( 'Verify printDomNode works as expected', () => {
        expect( printDomNode( parseView( '<div>text1<div>test11</div>text2</div>' ) ) ).toEqual( [
            '<div>',
            '  <div>',
            '    text1',
            '    <div>',
            '      test11',
            '    </div>',
            '    text2',
            '  </div>',
            '</div>'
        ].join( '\n' ) );
    } );
} );
