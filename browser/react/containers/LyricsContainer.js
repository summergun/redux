import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyrics} from '../action-creators/lyrics';

export default class LyricsContainer extends React.Component{
    constructor( ){
        super()
    }
    componentDidMount(){
        store.subscribe (()=>{console.log('test', store.getState())});
        const inTheAirTonightAction = setLyrics('I can feel it coming in the air tonight ... hold on ...');
        store.dispatch(inTheAirTonightAction);
    }
    render(){
        return (<div>
            <Lyrics />
            </div>
        )
    }
}