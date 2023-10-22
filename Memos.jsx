import { useEffect, useState } from "react";
import "./Memos.css";

const Memos=({state})=>{
    const [memos,setMemos]= useState([]);
    const {contract} =state;

    useEffect(()=>{
        const memosmessage = async()=>{
            const memos = await contract.getMemos();
            setMemos(memos)
            //console.log(memos)
        }
        contract && memosmessage();
    },[contract])
    return <>
    {memos.map((memo,index)=>{
        return <div key={index} className="memo-container">
            <p className="memo-name">{memo.name}</p>
            <p className="memo-date">{new Date(Number(memo.timestamp) * 1000).toLocaleString()}</p>
            <p className="memo-message">{memo.message}</p>
            <p className="memo-from">{memo.from}</p>
        </div>
    })}
    </>
}
export default Memos;