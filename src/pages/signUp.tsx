import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [displayName, setDisplayName] = useState("")
  const [displayNameError, setDisplayNameError] = useState("")

  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const [securityQuestion, setSecurityQuestion] = useState(0)
  const [securityQuestionError, setSecurityQuestionError] = useState("")

  const [question, setQuestion] = useState([])

  const [signupData, SetSignupData] = useState([])

  const [answer, setAnswer] = useState("")
  const [answerError, setAnswerError] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(false)

  const handleLoginValidate = () => {
    let invalid = true;
    if (!email) {
      setEmailError("email required");
      invalid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      invalid = false;
      //   }
    } else {
      setEmailError("")
      invalid = true;
    }
    if (!password) {
      setPasswordError("password required");
      //  setPasswordError(true)
      invalid = false
    } else if (!/^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/.test(password)) {
      //  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
      //  if (!passwordRegex.test(password)) {

      setPasswordError("Enter a valid password (must be at least 6 characters and include one special character)");
      invalid = false;
      //  }
    } else {
      setPasswordError(""); // Clear error if valid
      invalid = true;
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password required");
      invalid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      invalid = false;
    } else if (password !== confirmPassword) {
      invalid = true;
    } else {
      setConfirmPasswordError("");
    }
    if (!displayName) {
      setDisplayNameError("displayName required")
      invalid = false
    }
    if (!answer) {
      setAnswerError("answer required")
      invalid = false
    }
    return invalid
  }

  const signUpApiCall = async (e: React.FormEvent) => {
    e.preventDefault();

    if (handleLoginValidate()) {
      console.log("Calling API with:", { email, password });
      try {
        setIsLoading(true);
        const payload = {
          email: email,
          displayname: displayName,
          questionNo: securityQuestion,
          answer: answer,
          password: password
        }

        const response = await fetch("http://192.168.0.55:5000/" + "signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload)
        })
        const responseData = await response.json()

        if (responseData.status === 1) {

          console.log("responseData", responseData)

          toast.success(responseData.data, {
            position: 'center',
            // autoClose: 1000,
          })

          // toast.success(responseData.data, {
          //   position: toast.POSITION.TOP_CENTER,
          //   autoClose: 1000,
          // })



          setIsLoading(false);
        }
        else {
          toast.error(responseData.data, {
            position: 'top-center',
            autoClose: 1000,
          })
          console.log("responseData", responseData)
        }
      } catch (error) {
        console.log(error);

      }
    } else {
      console.log("Validation failed:", { emailError, passwordError });
    }
  };

  const fetchAllQuestionsData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://192.168.0.55:5000/" + "getAllQuestion", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      const responseData = await response.json()
      if (responseData.status === 1) {

        console.log("responseData", responseData)
        setQuestion(responseData?.data)

      }
      else {
        console.log("responseData", responseData)
      }
    } catch (error) {
      console.log(error);

    }

  }



  useEffect(() => {
    fetchAllQuestionsData()
  }, [])

  return (

    <div className="flex justify-center items-center ">

      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-[450px]  max-h-[80vh] flex flex-col mt-20">
        <ToastContainer />
        <h2 className="text-2xl font-bold text-center text-white ">SignUp</h2>
        <div className="overflow-y-auto scrollbar-hide flex-1 p-6">
          <form className="space-y-4">

            <div>
              <label className="block text-sm text-gray-200 text-left">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-200 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                title="Enter a valid email address (e.g., user@example.com)"
                onFocus={() => setEmailError("")}
              />
              {/* <span>{emailError}</span> */}
              {emailError && (<span className="text-red-500 text-sm mt-1 block text-left">{emailError}  </span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-200 text-left">
                Display name
              </label>
              <input
                type="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-200 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your display name"
                title="Enter your display name"
                //   onFocus ={()=>setEmailError("")}
                onFocus={() => setDisplayNameError("")}
              />
              {displayNameError && (<span className="text-red-500 text-sm mt-1 block text-left">{displayNameError}  </span>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-200 text-left">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-200 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                title="Enter the valid password"
                onFocus={() => setPasswordError("")}
              />{passwordError && <span className="text-red-500 text-sm mt-1 block text-left">{passwordError}</span>}
            </div>
            <div>
              <label className="block text-sm text-gray-200 text-left">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-200 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                title="Re-enter your password"
                onFocus={() => setConfirmPasswordError("")}
              />{confirmPasswordError && <span className="text-red-500 text-sm mt-1 block text-left">{confirmPasswordError}</span>}
            </div>
            <div>
              <label className="block text-sm text-gray-200 text-left">
                Security Question
              </label>
              {/* <input */}
              <select
                //   type=" securityQuestion"   
                value={securityQuestion}
                onChange={(e) => setSecurityQuestion(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-200 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                title="Select a question"
                onFocus={() => setSecurityQuestionError("")}


              >
                <option>Select value</option>
                {question.map((q) => (
                  <option key={q.questionNo} value={q.questionNo}>{q.question}</option>
                ))}
              </select>{securityQuestionError && <span className="text-red-500 text-sm mt-1 block">{securityQuestionError}</span>}
            </div>
            <div>
              <label className="block text-sm text-gray-200 text-left">
                Answer
              </label>
              <input
                type=" answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-200 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your answer"
                title="Enter your answer"
                onFocus={() => setAnswerError("")}
              />{answerError && <span className="text-red-500 text-sm mt-1 block text-left">Answer required</span>}
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded w-full"

              onClick={signUpApiCall}
            >
              Sign Up
            </button>

          </form>
          <div className="text-center mt-4">
            <div className="text-sm text-gray-200 hover:underline">
              Forgot password?
            </div>
          </div>
          <div className="text-center mt-2 text-sm text-gray-200">
            Already have an account{" "}
            <div onClick={() => navigate("/")} className="text-blue-400 font-medium hover:from-blue-600 hover:underline">
              login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp