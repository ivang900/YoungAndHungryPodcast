import React from "react";
import { Users, Target, BookOpen } from "lucide-react";

export function CompactInfo() {
  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
      aria-labelledby="info-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="info-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
        >
          Hands On AI Misconception Lab
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Target
                className="w-6 h-6 text-white"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Task One
            </h3>
            <p className="text-gray-700">
              This is where sample example 1 will go
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <BookOpen
                className="w-6 h-6 text-white"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Task Two
            </h3>
            <p className="text-gray-700">
              This is where sample example 2 will go
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Users
                className="w-6 h-6 text-white"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Task Three
            </h3>
            <p className="text-gray-700">
              This is where sample example 3 will go
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}