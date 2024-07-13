'use client';
export default function Pricing() {


  return (
      <section className="bg-white dark:bg-gray-900 w-full py-12 md:py-24 lg:py-32 xl:py-48">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for <span>writers</span> like you</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">No matter your blogging needs, we have a plan that suits you. Sign up today and start your blogging journey with us!</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Starter Plan</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Perfect for beginner bloggers, and startups</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$1.99</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Single Blog</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upto 10,000 views</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upto 20 Paid Subscribers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>24/7 Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> 1GB storage, unlimited bandwidth and more</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span><sub>(additional storage at $0.70/GB)</sub></span>
                  </li>
              </ul>
              <a href="/sign-up" onClick={(e)=>{e.preventDefault(); localStorage.setItem('subscription','starter');location.href="/sign-up"}} className="text-white bg-black hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Blogger Plus</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Ideal for aspirational and growing blogs.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$9.99</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Multiple Blogs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upto 50,000 visitors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> No-restrictions on no. of subscribers. </span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>24/7 Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> 10GB storage, unlimited bandwidth and more</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span><sub>(additional storage at $0.70/GB)</sub></span>
                  </li>
              </ul>
              <a href="/sign-up" onClick={(e)=>{e.preventDefault();localStorage.setItem('subscription','plus');location.href="/sign-up"}} className="text-white bg-black hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Content Manager Pro</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Designed for advanced bloggers and news outlets</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$49.9</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Multiple Blogs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upto 100,000 visitors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> No-restrictions on no. of subscribers. </span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>24/7 Premium Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upto 50GB storage, including everything in Plus</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 bg-green-500 rounded-3xl p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span><sub>(additional storage at $0.50/GB)</sub></span>
                  </li>
              </ul>
              <a href="/sign-up" onClick={(e)=>{e.preventDefault();localStorage.setItem('subscription','pro');location.href="/sign-up"}} className="text-white bg-black hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
      </div>
      <div className="m-3 p-3">25% of your subscription costs* will be donated to Ghost Organisation and various other organizations for supporting Open Source development
<br/><sub>*Excluding Taxes</sub></div>

  </div>
</section>

  );
}
