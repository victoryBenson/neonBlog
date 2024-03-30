import React from 'react'
import LOGO from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import {MdKeyboardDoubleArrowLeft} from 'react-icons/md'
import {auth} from './Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const location = useLocation()
  const {search} = location;

  const [email, setEmail] = useState('');

  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [infoMsg, setInfoMsg] = useState('');

  const [initialLoading, setInitialLoading] = useState(false);
  const [initialError, setInitialError] = useState('');

  useEffect(()=>{
    if(user){
      // user is already signed in
      navigate('/');
    }
    else{
      // user is not signed in but the link is valid
      if(isSignInWithEmailLink(auth, window.location.href)){
        // now in case user clicks the email link on a different device, we will ask for email confirmation
        let email = localStorage.getItem('email');
        if(!email){
          email = window.prompt('Please provide your email');
        }
        // after that we will complete the signIn process
        setInitialLoading(true);
        signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
        .then((result)=>{
          // we can get the user from result.user but no need in this case
          console.log(result.user);
          localStorage.removeItem('email');
          setInitialLoading(false);
          setInitialError('');
          navigate('/');
        }).catch((err)=>{
          setInitialLoading(false);
          setInitialError(err.message);
          navigate('/signin');
        })
      }
      else{
        console.log('enter email and sign in');
      }
    }
  },[user, search, navigate]);

  const handleLogin=(e)=>{
    e.preventDefault();
    setLoginLoading(true);
    sendSignInLinkToEmail(auth, email, {
      // this is the URL that we will redirect back to after clicking on the link in mailbox
      url: 'http://127.0.0.1:5173/signin',
      
      handleCodeInApp: true,
    }).then(()=>{
      localStorage.setItem('email', email);
      setLoginLoading(false);
      setLoginError('');
      setInfoMsg('We have sent you an email with a link to sign in');
    }).catch(err=>{
      setLoginLoading(false);
      setLoginError(err.message);
    })
  }

  return (
    <div className='flex flex-col justify-center items-center w-auto h-[100vh]' >
      <div className='md:w-1/3 sm:w-2/3 w-[90%] mx-1/2 '>
        <Link to= '/' className='flex justify-center items-center p-2'>
          <button 
            className='p-2 px-3 border bg-white flex items-center justify-center font-semibold rounded-full hover:scale-95 ease-out duration-500'>
            <MdKeyboardDoubleArrowLeft size={20}/>
            <span>back to home</span>
          </button>
        </Link>
        <div className='bg-white rounded-xl w-full text-center shadow-xl border flex flex-col flex-wrap'>
          <p className='p-5 flex justify-center'><img src={LOGO} alt="logo" /></p>
          <h1 className='font-bold text-3xl p-5 text-cente'>Welcome Back!</h1>
          <h4 className='sign text-lg p-2 text-center '>Sign in into your account for full access</h4>
            {
              (initialLoading)? (
                <p>Loading...</p>
              ) : (
                <>
                  {
                    (initialError !== '')? (
                      <p>{initialError}</p>
                    ) : (
                      <>
                        {/* We are checking user because for a split second, we will not have user  */}
                        {
                          (user)? (
                            // so instead of seeing form, I am using this please wait msg
                            <p>Please wait...</p>
                          ) : (
                            <div className='mx-5'>
                              <form action="" method="post" onSubmit={handleLogin} >
                                <div className='p-2'>
                                  <input 
                                    type="email" 
                                    name="email"
                                    required 
                                    className='w-full border p-3 rounded-full outline-none '
                                    autoFocus 
                                    placeholder='Your email address'
                                    value={email||''}
                                    onChange={(e)=> setEmail(e.target.value)}
                                     />
                                </div>
                                <div className='p-2 py-4 flex justify-center  '>
                                  <button
                                    type="submit" 
                                    value='submit' 
                                    className='submit w-full p-3 font-semibold rounded-full hover:scale-95 ease-out duration-500'>
                                    {loginLoading? (
                                      <span>Logging you in</span>
                                    ) : (
                                      <span>Send login link</span>
                                    )}
                                  </button>
                                  {/* show error message */}
                                  {loginError !== '' && (
                                    <span>{loginError}</span>
                                  )}

                                  {/*show info msg*/}
                                  {infoMsg !== '' && (
                                    <span>{infoMsg}</span>
                                  )}
                                </div>
                              </form>
                            </div>
                          )
                        }
                      </>
                    )
                  }
                </>
              )
            }
          <p className='p-5'>
            Don't have an account yet? <Link to='/signup' style={{color: 'var(--button-bg)'}}>signUp</Link>
          </p>
        </div>
      </div>
    </div>
  )
}


  
  // for a split second we will see this form
  <form className='form-group custom-form' onSubmit={handleLogin}>
  <label>Email</label>
  <input 
   type={'email'} 
   required 
   placeholder='Enter Email'
   className='form-control'
   value={email||''}
   onChange={(e)=>setEmail(e.target.value)}/>
  <button type='submit' className='btn btn-success btn-md'>
    {loginLoading?(<span>Logging you in</span>):(<span>Login</span>)}
  </button>
  {/* show login error msg */}
  {loginError!==''&&(<div className='error-msg'>{loginError}</div>)}

  {/* show info msg */}
  {infoMsg!==''&&(<div className='info-msg'>{infoMsg}</div>)}
</form>

