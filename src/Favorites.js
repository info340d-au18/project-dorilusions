import React, { Component } from 'react';
import firebase from 'firebase';
import { object } from 'prop-types';

import './w3.css';
import './App.css';

export class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false
        }

        this.myRef = firebase.database().ref('Favorites/');
        this.myRef.on("value", (snapshot) => {
            if(!this.state.loading){
                this.setState({loading:true})   
            }

            this.setState({ favorites: snapshot.val()})
        })
    }

    remove(name){
        let id = firebase.auth().currentUser.uid;
        let myRef = firebase.database().ref('Favorites/' + id);
        
        myRef.child(name).remove();
    }

    render() {
        let faves = [];
        let data = this.state.favorites;
        let currentid = firebase.auth().currentUser.uid;

        if(data != null){
            let keys = Object.keys(data);

            for(let i=0; i < keys.length; i++){
                if(keys[i] == currentid){
                    let iDkey = keys[i];
                    let allFaves = data[iDkey];
                    let faveKey = Object.keys(allFaves);

                    for(let j=0; j < faveKey.length; j++){
                        let oneFave = allFaves[faveKey[j]].newFavorite;
                        let oneFaveKey = Object.keys(oneFave);
                        let frame = {};
                        console.log(oneFave);

                        for(let k = 0; k < oneFaveKey.length; k++){
                            frame[[oneFaveKey[k]]] = oneFave[oneFaveKey[k]];   
                        }

                        frame["key"] = faveKey[j];
                        faves.push(frame);
                    }
                }
            }                        
        };          
        
        console.log(faves);
                
        if(!this.state.loading){
            return<p class="w3-center" style={{marginTop:100}}>{"Please Refresh your page"}</p>
        }

        return (
            <div class="w3-container w3-content w3-padding-64" style={{maxWidth:800,marginTop:46}}>
                <h2 class="w3-center">FAVORITES</h2>
                <div id="requests" class="w3-row-padding w3-padding-32" style={{margin: 16}}>
                    {faves.map((f) =>{
                        return(
                            <div id="pending-booking" class="w3-margin-bottom">
                                <div class="w3-center block-example border border-dark" style={{border: "white",border:"Solid",border:1}}>
                                    <p><b>{f.name}</b></p>
                                    <p>{"Location: " + f.loc}</p>
                                    <p>{"Time: " + f.time}</p>                          
                                    <button class="basicButton" onClick={this.remove.bind(this,f.key)}>Remove</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> 
        )
    }
}

