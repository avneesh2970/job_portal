import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

function ForgetPassword({ close }) {
  const [hideEmail, setHideEmail] = useState(true);

  return (
    <section className="fixed inset-0 top-28 lg:top-0 bg-neutral-800/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white max-w-xl w-full py-8 px-6 rounded relative">
        <div className="flex justify-end">
          <button onClick={close} className="text-gray-600 hover:text-black cursor-pointer">
            <IoClose size={25} />
          </button>
        </div>

        <div className="pb-8">
          {hideEmail ? (
            <>
              <h1 className="font-semibold text-[20px] text-[#1C2638] pb-3">
                Forget your password
              </h1>
              <p className="text-[14px] text-[#A0A0A0]">
                Enter email address to receive password reset link.
              </p>
            </>
          ) : (
            <h1 className="font-semibold text-[20px] text-[#1C2638] pb-3">Forget Password</h1>
          )}
        </div>

        <form className="space-y-6">
          {hideEmail ? (
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[14px] text-[#1C2638] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border rounded-[8px] p-4 border-[#DEE0E4]"
                placeholder="Enter your email address"
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col">
                <label className="text-[14px] text-[#1C2638] mb-2">Old Password</label>
                <input
                  type="password"
                  className="border rounded-[8px] p-4 border-[#DEE0E4]"
                  placeholder="Enter your current password"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[14px] text-[#1C2638] mb-2">New Password</label>
                <input
                  type="password"
                  className="border rounded-[8px] p-4 border-[#DEE0E4]"
                  placeholder="Enter your new password"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[14px] text-[#1C2638] mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="border rounded-[8px] p-4 border-[#DEE0E4]"
                  placeholder="Re-enter new password"
                />
              </div>
            </>
          )}

          {hideEmail ? (
            <button
              type="button"
              onClick={() => setHideEmail(false)}
              className="px-6 py-3 bg-[#4640DE] text-white rounded-xl font-medium text-[18px] w-full cursor-pointer"
            >
              Send Code
            </button>
          ) : (
            <div className="space-y-4">
              <button
                type="submit"
                className="px-6 py-3 bg-[#4640DE] text-white rounded-xl font-medium text-[18px] w-full cursor-pointer"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setHideEmail(true)}
                className="cursor-pointer px-6 py-3 border border-[#4640DE] text-[#F04438] font-medium text-[18px] w-full rounded-xl"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ForgetPassword;
