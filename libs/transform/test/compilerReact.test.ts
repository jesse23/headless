import { parseView } from '@headless/utils';
import { createCompiler } from '../src/view/compiler';

const compiler = createCompiler();

describe( 'Test view compiler to React', () => {
    it( 'Test DOM element to React', () => {
        const output = compiler.compileView( parseView( '<div></div>' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '} )'
        ].join( '\n' ) );
    } );

    it( 'Test custom element to React', () => {
        const output = compiler.compileView( parseView( '<simple-button></simple-button>' ), {
            viewDesc: {
                SimpleButton: {
                    props: {
                        action: 'Action'
                    }
                }
            }
        } );
        expect( output.contents ).toEqual( [
            'SimpleButton && createElement( SimpleButton, {',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '} )'
        ].join( '\n' ) );
    } );

    it( 'Test sub element to React', () => {
        const output = compiler.compileView( parseView( '<div><code></code><p></p></div>' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '}, ',
            '  createElement( "code", {',
            '  } ),',
            '  createElement( "p", {',
            '  } )',
            ' )'
        ].join( '\n' ) );
    } );

    it( 'Test text node to React', () => {
        const output = compiler.compileView( parseView( 'Ouch' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '}, ',
            '  "Ouch"',
            ' )'
        ].join( '\n' ) );
    } );

    it( 'Test variable text node to React', () => {
        const output = compiler.compileView( parseView( '{{ a + b }}' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '}, ',
            '  a + b',
            ' )'
        ].join( '\n' ) );
    } );

    // NOTE: the \\n will write the \n as sting in target JS code and react will consume it back to CR in rendering
    it( 'Test mix text node to React', () => {
        const output = compiler.compileView( parseView( 'a \n{{b }}  c\n  {{  d  }}f' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '}, ',
            '  "a \\n",',
            '  b,',
            '  "  c\\n  ",',
            '  d,',
            '  "f"',
            ' )'
        ].join( '\n' ) );
    } );

    it( 'Test element node with text to React', () => {
        const output = compiler.compileView( parseView( 'a<div></div>{{b}}c<p></p>d' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '}, ',
            '  "a",',
            '  createElement( "div", {',
            '  } ),',
            '  b,',
            '  "c",',
            '  createElement( "p", {',
            '  } ),',
            '  "d"',
            ' )'
        ].join( '\n' ) );
    } );

    it( 'Test element with comment to React', () => {
        const output = compiler.compileView( parseView( '<!--comment1--><div><!--comment2--></div><!--comment3-->' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '} )'
        ].join( '\n' ) );
    } );

    it( 'Test element with attribute to React', () => {
        const output = compiler.compileView( parseView( '<div title="aaa">Ouch</div>' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "title": "aaa",',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '}, ',
            '  "Ouch"',
            ' )'
        ].join( '\n' ) );
    } );

    it( 'Test element with attribute variable to React', () => {
        const output = compiler.compileView( parseView( '<div title="{{aaa}}">Ouch</div>' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "title": aaa,',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '}, ',
            '  "Ouch"',
            ' )'
        ].join( '\n' ) );
    } );

    it( 'Test element with attribute in react attribute map to React', () => {
        const output = compiler.compileView( parseView( '<input autocomplete="on">' ) );
        expect( output.contents ).toEqual( [
            'createElement( "input", {',
            '  "autoComplete": "on",',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '} )'
        ].join( '\n' ) );
    } );

    it( 'Test ng-include to React', () => {
        const output = compiler.compileView( parseView( '<ng-include src="myTable">' ) );
        expect( output.contents ).toEqual( [
            'createElement( MyTable, {',
            '} )'
        ].join( '\n' ) );
        expect( Object.values( output.viewDeps ) ).toEqual( [
            'viewmodel/myTableViewModel'
        ] );
    } );

    it( 'Test exist-when to React', () => {
        const output = compiler.compileView( parseView( '<div exist-when="item.count > 0"></div>' ) );
        expect( output.contents ).toEqual( [
            '( ( item.count > 0 ) ?',
            '  createElement( "div", {',
            '    "className": props.className ? props.className : "",',
            '    "style": props.style || {}',
            '  } ) : null',
            ')'
        ].join( '\n' ) );
    } );

    it( 'Test visible-when to React', () => {
        const output = compiler.compileView( parseView( '<div visible-when="item.count > 0"></div>' ) );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "className": props.className ? props.className : "",',
            '  "style": (item.count > 0) ? {} : { display: \'none\' }',
            '} )'
        ].join( '\n' ) );
    } );

    it( 'Test transclude to React', () => {
        const output = compiler.compileView( parseView( '<div transclude><div>{{var}}</div></div>' ) );
        expect( output.contents ).toEqual( [
            '( ( props.children ) ?',
            '  createElement( "div", {',
            '    "className": props.className ? props.className : "",',
            '    "style": props.style || {}',
            '  }, ',
            '    props.children',
            '   ) :',
            '  createElement( "div", {',
            '    "className": props.className ? props.className : "",',
            '    "style": props.style || {}',
            '  }, ',
            '    createElement( "div", {',
            '    }, ',
            '      var',
            '     )',
            '   )',
            ')'
        ].join( '\n' ) );
    } );

    it( 'Test view model option useDomNode in React', () => {
        const output = compiler.compileView( parseView( '<div></div>' ), {
            options: {
                useDomNode: true
            }
        } );
        expect( output.contents ).toEqual( [
            'createElement( "div", {',
            '  "ref": vm.ref,',
            '  "className": props.className ? props.className : "",',
            '  "style": props.style || {}',
            '} )'
        ].join( '\n' ) );
    } );
} );
