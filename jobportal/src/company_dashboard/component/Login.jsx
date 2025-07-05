import React, { useState, useEffect, useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { useAuth } from './AuthContext';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { setUser } = useContext(AuthContext);
  const { login, error } = useAuth();
  const [pwd, setpwd] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [user_email, setuser_email] = useState('')

  useEffect(() => {
    window.addEventListener("message", (event) => {
      // Security check — make sure the message is from your main app
      if (event.origin === "http://localhost:5173") {
        const { userinfo } = event.data;
        console.log("Received userInfo:", userinfo);
        setuser_email(userinfo.user_email)
        setpwd(userinfo.pwd)

        
        
        
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user_email,  
          password: pwd
        }),
        credentials: "include"
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Check if the user type matches the active tab
      const userType = "Recruiter";
      const activeTab = 'Recruiter';
      if (data.user.userType !== activeTab) {
        throw new Error(`This account is registered as a ${data.user.userType}. Please use the ${data.user.userType} tab to login.`);
      }


      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userType", data.user.userType);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        setUser(data.user);
        ` `
      }
      setIsLoading(false);
      navigate('/');

    }catch(err){
      console.log(err);
    }

   

   

    
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={user_email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={pwd}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
          <div className="text-center text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;