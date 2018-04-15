import React from 'react';
import '../bootstrap.css';
import './landingPage.css';

let d = new Date();
let year = d.getFullYear();

const logIn = () => {
    alert('Log In');
}
const signUp = () => {
    alert('Sign Up');
}

const styleOne = {width: '80%', height: '300px', borderRadius: '21px 21px 0 0'};
const landingPage = () => {
    return(
        <div classNameName = 'LandingPageMain'>
            <nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <a  href="#" className='mobile-btn-hdr-title' style={{fontSize: '24px', padding: '10px 0px'}}>
                    TaskPad
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg> */}
                    </a>
                    <a className="py-2 mobile-btn-hdr-login d-md-inline-block btn btn-outline-secondary" onClick={logIn} href="#" style={{color: 'white', position: 'absolute', right: '400px', margin: '5px 0px'}}>Log In</a>
                    <a className="py-2 mobile-btn-hdr-signup d-md-inline-block btn btn-success" onClick={signUp} href="#" style={{color: 'white', position: 'absolute', right: '300px', margin: '5px 0px'}}>Sign Up</a>
                </div>
            </nav>

            <div className="BackGroundHere position-relative overflow-hidden p-3 p-md-5 text-center">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">TaskPad</h1>
                    <p className="lead font-weight-normal">The ultimate personal productivity app!</p>
                    <p className="lead font-weight-normal">Increase yout productivity now, just click the button bellow.</p>
                    <a className="btn btn-lg btn-success" href="#">Get Started</a>
                </div>
                {/* <div className="product-device box-shadow d-none d-md-block"></div>
                <div className="product-device product-device-2 box-shadow d-none d-md-block"></div> */}
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                    <h2 className="display-5">Create Multiple Pads</h2>
                    <p className="lead">Each Pad can hold as many tasks as you need!</p>
                    </div>
                    <div className="bg-light box-shadow mx-auto" style={styleOne}></div>
                </div>
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                    <h2 className="display-5">Prioritize Tasks</h2>
                    <p className="lead">By prioritizing the critical tasks first you will be much more productive!</p>
                    </div>
                    <div className="bg-dark box-shadow mx-auto" style={styleOne}></div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                    <h2 className="display-5">Don't Second Guess Your Actions</h2>
                    <p className="lead">With the built-in task maps you will always know what to do next.</p>
                    </div>
                    <div className="bg-dark box-shadow mx-auto" style={styleOne}></div>
                </div>
                <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                    <h2 className="display-5">Mobile Friendly</h2>
                    <p className="lead">Check tasks off on the go!</p>
                    </div>
                    <div className="bg-light box-shadow mx-auto" style={styleOne}></div>
                </div>
            </div>

            <div className='productDescriptionContainer'>
                <div className='pDContent'>
                    <h2 className='font-weight-normal'>Plan, Prioritize and Take Action!</h2>
                </div>
            </div>

            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg> */}
                    TaskPad
                    <small className="d-block mb-3 text-muted">Copyright {year} Nicolas K. Sartor</small>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Coming Soon!</a></li>

                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Coming Soon!</a></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Business</a></li>
                        <li><a className="text-muted" href="#">Coming Soon!</a></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Locations</a></li>
                        <li><a className="text-muted" href="#">Privacy</a></li>
                        <li><a className="text-muted" href="#">Terms</a></li>
                    </ul>
                    </div>
                </div>
                <p className='text-muted' style={{fontSize: '10px'}}>Planned, Designed and Developed by <a href='http://www.nicolaskaosartor.com/'>Nicolas K. Sartor</a></p>
            </footer>
        </div>
    )
}


export default landingPage