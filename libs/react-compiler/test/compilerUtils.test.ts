/* eslint-env jest */
import { hyphenToCamelCase } from '../src/compileUtils';

describe( 'Test compile specific core/utils', () => {
    it( 'Verify hyphenToCamelCase works fine for "aa-bb"', () => {
        expect( hyphenToCamelCase( 'aa-bb' ) ).toEqual( 'AaBb' );
    } );

    it( 'Verify hyphenToCamelCase works fine for "aa-bb-cc"', () => {
        expect( hyphenToCamelCase( 'aa-bb-cc' ) ).toEqual( 'AaBbCc' );
    } );
});
