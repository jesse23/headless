/* eslint-env jest */
import {
    placeHolder
} from '../utils';

describe( 'Test place holder', () => {
    it( 'placeholder', () => {
        expect( placeHolder('a') ).toEqual( 'a' );
    } );
}); 
