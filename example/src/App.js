
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import SonicxWeb from 'sonicxweb'

const HttpProvider = SonicxWeb.providers.HttpProvider;

const fullNode = new HttpProvider('http://165.22.52.91:9190');
const solidityNode = new HttpProvider('http://165.22.52.91:9191/');
const eventServer = 'http://178.128.215.209';
const privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0';

export default class App extends Component {
    constructor() {
        super() 
        this.state = {
            repos: [],
            btnPressed: false,
        }
    }    async execSonicxWeb() {

        const sonicxWeb = new SonicxWeb(
               fullNode,
               solidityNode,
               eventServer,
               privateKey
            );

            const nodeInfo = await sonicxWeb.trx.getNodeInfo();
            console.log(nodeInfo);


            const nodes = await sonicxWeb.isConnected();
            const connected = !Object.entries(nodes).map(([name, connected]) => {
                if (!connected)
                    console.error(`Error: ${name} is not connected`);

            return connected;
        }).includes(false);
        if (!connected)
            return;

}

     displayApp() {
         return <button onClick={this.execSonicxWeb.bind(this)}>Get Info</button>
   
    }    

render() {
    return (
        <div>
            <h1>Push Get Info and see console.log()</h1>
    {this.displayApp()}
    </div>
    )
   }
}