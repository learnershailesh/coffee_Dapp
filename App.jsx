import { useState,useEffect } from 'react'
import abi from "./contractjson/cafe.json"
import {ethers} from "ethers"
import Buy from './components/Buy'
import Memos from './components/Memos'
import wood from "./wood.jpg";
import coco from "./coco.png"
import './App.css'

function App() {
  const [state, setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAcount] = useState('not connected');
  useEffect(()=>{
    const template=async()=>{
      const contractAddress="0xF29B3D98cdD1B3a91862A25B4a06CCF5f1635EBb";
      const contractABI=abi.abi;
      //metamask part
      //1. in irder do transctions on sepolia testnet
      //2. metamask consists of Infura api which actually help in connecting to the blockchain network

      const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
        setAcount(account);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer =  await provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      console.log(contract);
      setState({provider,signer,contract});
    }
    template();
  },[])
  return (
    <div className='bg'>
    <img src={wood} className="img-fluid wood-image" alt=".." width="100%" height="750px" />
<img src={coco} className="img-fr" alt=".." width="500px" height="700px" />
<p className="connected-account">Connected Account - {account}</p>
<div className='highlight'>Transactions</div>

   
      <Buy state={state} />
      <Memos state={state} />
   
  </div>
  )
}

export default App
