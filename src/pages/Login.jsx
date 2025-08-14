import '../css/Login.css'
function Login () {
    return <div className="Login-page">

        <div className='packet-background'>
            {
                Array.from({length:20}).map((_,i)=>(
                    <span key={i} className='packet'></span>
                ))
            }
        </div>

        <div className="login-hero">
            <h2>Packet <span>Vision</span></h2>
            <p>Visualize networks, simulate traffic, and detect threats in real-time.</p>
        </div>
        <div className="login-form">
            <h2>login</h2>
            <form>
                <span><label htmlFor="form-email">Username </label></span>
                <input type="text" className="form-email" id="form-email"/>
                <span><label htmlFor="form-password">Password</label></span>
                <input type="password" className="form-password" id='form-password'/>
                <a href="/">forget password</a>
                <button type="submit">login</button>
            </form>
            </div>
    </div>
}
export default Login;