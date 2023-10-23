import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-center py-16">
      <h2 className="text-black font-bold text-3xl py-4">Login in With</h2>
      <Link className="text-center mx-auto flex justify-between items-center border rounded-lg border-gray-500 p-4 w-72 my-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
        >
          <g>
            <path
              d="M30.9999 16.2334C30.9999 15.1547 30.9128 14.0702 30.7268 13.0089H15.8108V19.1198H24.3525C23.9981 21.0907 22.8592 22.8341 21.1915 23.942V27.9071H26.2875C29.28 25.1432 30.9999 21.0615 30.9999 16.2334Z"
              fill="#4285F4"
            />
            <path
              d="M15.811 31.738C20.076 31.738 23.6728 30.3328 26.2934 27.9071L21.1975 23.942C19.7797 24.9099 17.9493 25.4581 15.8168 25.4581C11.6912 25.4581 8.19316 22.665 6.93805 18.9099H1.67938V22.9974C4.36392 28.3561 9.83177 31.738 15.811 31.738Z"
              fill="#34A853"
            />
            <path
              d="M6.93224 18.9099C6.26983 16.9391 6.26983 14.8049 6.93224 12.834V8.74652H1.67939C-0.563539 13.2306 -0.563539 18.5134 1.67939 22.9975L6.93224 18.9099Z"
              fill="#FBBC04"
            />
            <path
              d="M15.811 6.28001C18.0655 6.24503 20.2445 7.09635 21.8773 8.65906L26.3922 4.12838C23.5334 1.43446 19.739 -0.0466162 15.811 3.17992e-05C9.83177 3.17992e-05 4.36392 3.38201 1.67938 8.74652L6.93224 12.8341C8.18154 9.07306 11.6854 6.28001 15.811 6.28001Z"
              fill="#EA4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_11">
              <rect width="31" height="31.7381" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="font-semibold text-lg ml-10">
          Continue with Google
        </span>
      </Link>
      <p>
        Do not have an account ?
        <Link className="ml-2 text-sky-400" to="/register">
          Create a New Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
