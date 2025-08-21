import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add API call or validation logic here
    console.log(formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-20 md:px-5 md:py-10">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-2xl p-20 md:p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-black text-center mb-6">
          Create Account
        </h1>
        <p className="text-brand text-center mb-8">
          Start boosting your productivity with Taskio Dashboard
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-black font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="text-black placeholder-black rounded-lg p-3 focus:outline-none border border-black focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-black font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="text-black placeholder-black rounded-lg p-3 focus:outline-none border border-black focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-black font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="text-black placeholder-black rounded-lg p-3 focus:outline-none border border-black focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-black font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="text-black placeholder-black rounded-lg p-3 focus:outline-none border border-black focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="button-gr mt-4 w-full py-3 rounded-full"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-brand mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};
