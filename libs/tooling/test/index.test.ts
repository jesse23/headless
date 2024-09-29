/* eslint-env jest */
import {
    placeHolder
} from '../src';

describe( 'Test place holder', () => {
    it( 'placeholder', () => {
        expect( placeHolder('a') ).toEqual( 'a' );
    } );
}); 
