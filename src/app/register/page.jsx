import React from 'react';

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Registration Form
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-5">
            <label
              htmlFor="floating_first_name"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              First name
            </label>
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block w-full mt-1 p-2.5 text-sm text-gray-900 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              placeholder="Your first name"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="floating_last_name"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Last name
            </label>
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block w-full mt-1 p-2.5 text-sm text-gray-900 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              placeholder="Your last name"
              required
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="floating_username"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            User name
          </label>
          <input
            type="text"
            name="floating_username"
            id="floating_username"
            className="block w-full mt-1 p-2.5 text-sm text-gray-900 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            placeholder="Your username"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="floating_email"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block w-full mt-1 p-2.5 text-sm text-gray-900 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            placeholder="Your email"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="floating_password"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block w-full mt-1 p-2.5 text-sm text-gray-900 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            placeholder="Your password"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="floating_phone"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Phone number
          </label>
          <input
            type="tel"
            // pattern=""
            name="floating_phone"
            id="floating_phone"
            className="block w-full mt-1 p-2.5 text-sm text-gray-900 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            placeholder="Your phone number (123-456-7890)"
            required
          />
        </div>

        {/* Repeat the pattern for other input fields */}

        <button
          type="submit"
          className="w-full mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-white py-2.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;