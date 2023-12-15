import {style} from "./style";
export const Login = () => {
    return (
        <div container style={{backgroundColor: 'dimgray',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width:'100%'}}>
            <from style={style.fromHandler}>
                <h3 style={{textAlign:'center', marginBottom:'30px'}}>
                    Login
                </h3>

                <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <input style={{border:'1px solid',  boarderRadius:'5px', margin: "10px 0px", padding:'10px'}}
                    type="email"
                    placeholder="Email or Phone Number"
                    name="email"
                    required/>

                    <input style={{border:'1px solid', boarderRadius:'5px', margin: "10px 0px ", padding:'10px'}}
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    />

                    <button style={buttonStyle}>
                        Log In
                    </button>

                    <spam style={{textAlign:'center', marginBottom:'20px'}}>
                        already have an account?
                        <a href="#" style={Styles.signUpStyle}> Signup </a>
                    </spam>
                    
                </div>
            </from>
        </div>


    )
}
const buttonStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "10px",
    border: "none",
    boarderRadius: "5px",
    margin: "15px 0px 25px 0px",
    cursor: "pointer"
}