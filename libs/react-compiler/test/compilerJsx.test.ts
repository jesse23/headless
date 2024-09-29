/* eslint-env jest */
import { compiler } from '../src/compiler';
import { parseView } from '@headless/core';

describe( 'Test view compiler to JSX', () => {
    it( 'Test DOM element to JSX', () => {
        const output = compiler.compileView( parseView( '<div></div>' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div className={props.className ? props.className : ""} style={props.style || {}}>',
            '</div>'
        ].join( '\n' ) );
    } );

    it( 'Test custom element to JSX', () => {
        const output = compiler.compileView( parseView( '<simple-button></simple-button>' ), {
            viewDeps: {
                SimpleButton: true
            }
        }, true );
        expect( output.contents ).toEqual( [
            '<SimpleButton className={props.className ? props.className : ""} style={props.style || {}}>',
            '</SimpleButton>'
        ].join( '\n' ) );
    } );

    it( 'Test sub element to JSX', () => {
        const output = compiler.compileView( parseView( '<div><code></code><p></p></div>' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div className={props.className ? props.className : ""} style={props.style || {}}>',
            '  <code>',
            '  </code>',
            '  <p>',
            '  </p>',
            '</div>'
        ].join( '\n' ) );
    } );

    it( 'Test text node to JSX', () => {
        const output = compiler.compileView( parseView( 'Ouch' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div className={props.className ? props.className : ""} style={props.style || {}}>',
            '  Ouch',
            '</div>'
        ].join( '\n' ) );
    } );

    it( 'Test variable text node to JSX', () => {
        const output = compiler.compileView( parseView( '{{ a + b }}' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div className={props.className ? props.className : ""} style={props.style || {}}>',
            '  { a + b }',
            '</div>'
        ].join( '\n' ) );
    } );

    // NOTE: the \\n will write the \n as sting in target JS code and react will consume it back to CR in rendering
    it( 'Test mix text node to JSX', () => {
        const output = compiler.compileView( parseView( 'a \n{{b }}  c\n  {{  d  }}f' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div className={props.className ? props.className : ""} style={props.style || {}}>',
            '  a \n{b }  c\n  {  d  }f',
            '</div>'
        ].join( '\n' ) );
    } );

    it( 'Test element node with text to JSX', () => {
        const output = compiler.compileView( parseView( 'a<div></div>{{b}}c<p></p>d' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div className={props.className ? props.className : ""} style={props.style || {}}>',
            '  a',
            '  <div>',
            '  </div>',
            '  {b}c',
            '  <p>',
            '  </p>',
            '  d',
            '</div>'
        ].join( '\n' ) );
    } );

    it( 'Test element with comment to JSX', () => {
        const output = compiler.compileView( parseView( '<!--comment1--><div><!--comment2--></div><!--comment3-->' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div className={props.className ? props.className : ""} style={props.style || {}}>',
            '</div>'
        ].join( '\n' ) );
    } );

    it( 'Test element with attribute to JSX', () => {
        const output = compiler.compileView( parseView( '<div title="aaa">Ouch</div>' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div title="aaa" className={props.className ? props.className : ""} style={props.style || {}}>',
            '  Ouch',
            '</div>'
        ].join( '\n' ) );
    } );

    it( 'Test element with attribute variable to JSX', () => {
        const output = compiler.compileView( parseView( '<div title="{{aaa}}">Ouch</div>' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div title={aaa} className={props.className ? props.className : ""} style={props.style || {}}>',
            '  Ouch',
            '</div>'
        ].join( '\n' ) );
    } );

    // Note: input tag is not correct in HTML but react supports it
    it( 'Test element with attribute in react attribute map to JSX', () => {
        const output = compiler.compileView( parseView( '<input autocomplete="on">' ), {}, true );
        expect( output.contents ).toEqual( [
            '<input autoComplete="on" className={props.className ? props.className : ""} style={props.style || {}}>',
            '</input>'
        ].join( '\n' ) );
    } );

    it( 'Test element with custom attribute mapper to JSX', () => {
        const output = compiler.compileView( parseView( '<simple-button action="{{actions.update}}">Test Button</simple-button>' ), {
            viewDeps: {
                SimpleButton: {
                    props: {
                        action: {
                            type: 'Action'
                        }
                    }
                }
            }
        }, true );
        expect( output.contents ).toEqual( [
            '<SimpleButton action={actions.update} className={props.className ? props.className : ""} style={props.style || {}}>',
            '  Test Button',
            '</SimpleButton>'
        ].join( '\n' ) );
    } );

    it( 'Test aw-include to JSX', () => {
        const output = compiler.compileView( parseView( '<aw-include src="occMgmtTable">' ), {}, true );
        expect( output.contents ).toEqual( [
            '<OccMgmtTable />'
        ].join( '\n' ) );
        expect( Object.values( output.viewDeps ) ).toEqual( [
            'viewmodel/occMgmtTableViewModel'
        ] );
    } );

    it( 'Test exist-when to JSX', () => {
        const output = compiler.compileView( parseView( '<div exist-when="item.count > 0"></div>' ), {}, true );
        expect( output.contents ).toEqual( [
            '( item.count > 0 ) ? (',
            '  <div className={props.className ? props.className : ""} style={props.style || {}}>',
            '  </div>',
            ') : null'
        ].join( '\n' ) );
    } );

    it( 'Test visible-when to JSX', () => {
        const output = compiler.compileView( parseView( '<div visible-when="item.count > 0"></div>' ), {}, true );
        expect( output.contents ).toEqual( [
            '<div className={props.className ? props.className : ""} style={(item.count > 0) ? {} : { display: \'none\' }}>',
            '</div>'
        ].join( '\n' ) );
    } );

    it( 'Test aw-repeat to JSX', () => {
        const output = compiler.compileView( parseView( '<div aw-repeat="item in data.items">{{item.name}}</div>' ), {}, true );
        expect( output.contents ).toEqual( [
            'processRepeat(data.items, key => {',
            // eslint-disable-next-line no-template-curly-in-string
            '  return vm.getDispatch( `data.items[\'${key}\']` );',
            '}, ( item, index ) => {',
            '  const updateItem = item.dispatch;',
            '  slotScope.item = item;',
            '  return (',
            '    <div style={props.style || {}} key={index}>',
            '      {item.name}',
            '    </div>',
            '  );',
            '} )'
        ].join( '\n' ) );
    } );

    it( 'Test transclude to JSX', () => {
        const output = compiler.compileView( parseView( '<div transclude><div>{{var}}</div></div>' ), {}, true );
        expect( output.contents ).toEqual( [
            '( props.children ) ? (',
            '  <div className={props.className ? props.className : ""} style={props.style || {}}>',
            '    {props.children}',
            '  </div>',
            ') : (',
            '  <div className={props.className ? props.className : ""} style={props.style || {}}>',
            '    <div>',
            '      {var}',
            '    </div>',
            '  </div>',
            ')'
        ].join( '\n' ) );
    } );
} );
