import React from "react";
import Navbar from "../NavbarComponent";
function AdminFormPage() {
    return (
        <div>
            <Navbar></Navbar>
            <br />
            <div class="container-fluid">
                <form class="mx-auto">
                    <h1 class="text-center text-white mb-4" style={{fontFamily:"Avegas Royale",fontWeight:400,fontSize:"64px"}}> Login</h1>
                    <div class="mb-10 mt-5">
                        {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                        {/* <input placeholder="User name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                        <input placeholder="User name" type="email" class="form-input-control" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3 mt-5">
                        {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                        <input placeholder="PAsword" type="password" class="form-input-control" id="exampleInputPassword1" />
                        {/* <div id="emailHelp" class="form-text">Forget Password</div> */}

                    </div>
                    {/* <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                   <div style={{paddingLeft:"71px",paddingTop:'60px'}}>
                   <button style={{width: "200px", height: "39px",backgroundColor:'#CCBB8E',fontFamily:"Poppins"}} type="submit">Login</button>
                   </div>
                </form>
            </div>
        </div>
    )
}
export default AdminFormPage;