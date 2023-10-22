import {ethers} from "ethers";
import "./Buy.css"
const Buy=({state})=>{

    const buychai=async(event)=>{
        event.preventDefault();
        const{contract} = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
       // const amount = document.querySelector("#amount");
        const amount = {value: ethers.parseEther("0.001")}
        const transaction = await contract.buychai(name,message,amount)
        await transaction.wait();
        alert("transaction is succesful");
        window.location.reload();
    }
    return <form onSubmit={buychai} className="form-container">
    <input id="name" type="text" placeholder="Your Name" className="input-field" />
    <input id="message" type="text" placeholder="Your message" className="input-field" />
    <button className="submit-button">Order Now</button>
</form>

  
  // You can adjust these styles to match your coffee shop's branding and design preferences.
  

}
export default Buy;