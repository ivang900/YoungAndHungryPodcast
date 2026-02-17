import React, { useState } from "react";
import { Mic2, X, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setShowSignup(false);
    }, 2500);
  };

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1652127691413-6cb8c0304aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBmdXR1cmUlMjBlZHVjYXRpb258ZW58MXx8fHwxNzcwNjg2NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center">
        <div
          className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"
          role="status"
          aria-label="Badge"
        >
          <Mic2 className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm font-medium">
            Sign Up Now!
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Sample Podcast Info{" "}
          <span className="text-blue-600">Coming</span> Soon{" "}
          <span className="text-purple-600">TBD</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          This is where we will be displaying podcast logo, snippets etc.
        </p>

        {!showSignup ? (
          <button
            onClick={() => setShowSignup(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Sign up for mailing list"
          >
            Sign Up Now
          </button>
        ) : (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl p-6 mt-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Join Our Mailing List
              </h2>
              <button
                onClick={() => setShowSignup(false)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
                aria-label="Close signup form"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="email-signup"
                  className="block text-sm font-medium text-gray-700 mb-2 text-left"
                >
                  Email Address
                </label>
                <input
                  id="email-signup"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 mb-4 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
                  aria-label="Enter your email address"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div
                className="flex items-center justify-center gap-3 py-4"
                role="status"
                aria-live="polite"
              >
                <CheckCircle
                  className="w-6 h-6 text-green-600"
                  aria-hidden="true"
                />
                <p className="text-gray-900 font-medium">
                  Successfully subscribed!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}