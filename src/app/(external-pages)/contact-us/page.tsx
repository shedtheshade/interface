export default function About() {
  return (
    <>
    <div className="text-centercontent-center bg-black w-full ">
<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="mx-auto max-w-2xl text-center content-center justify-center justify-items-center justify-self-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Sales</h2>
    <p className="mt-2 text-lg leading-8 text-gray-600">Don't worry we don't bite. Or do we ? 😉</p>
  </div>
  <form action="http://localhost:5000/endpoint/forms/contact-us" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div className="mt-2.5">
          <input type="text" name="last-name" id="last-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
        <div className="mt-2.5">
          <input type="text" name="company" id="company" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label className="sr-only">Country</label>
            <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
              <option>AU</option>
              <option>BR</option>
              <option>JP</option>
              <option>MX</option>
              <option>SG</option>
              <option>TH</option>
              <option>ZA</option>
              <option>IN</option>
              <option>RU</option>
              <option>AE</option>
              <option>GB</option>
              <option>FR</option>
              <option>DE</option>
              <option>IT</option>
              <option>ES</option>
              <option>SE</option>
              <option>CH</option>
              <option>NO</option>
              <option>FI</option>
              <option>DK</option>
              <option>PL</option>
              <option>PT</option>
              <option>GR</option>
              <option>TR</option>
              <option>IL</option>
              <option>SA</option>
              <option>AE</option>
              <option>QA</option>
              <option>OM</option>
              <option>KW</option>
              <option>BH</option>
              <option>JO</option>
              <option>LB</option>
              <option>EG</option>
              <option>ZA</option>
              <option>NG</option>
              <option>KE</option>
              <option>GH</option>
              <option>CI</option>
              <option>UG</option>
              <option>CM</option>
              <option>SN</option>
              <option>MA</option>
              <option>ET</option>
              <option>AO</option>
              <option>CD</option>
              <option>LY</option>              
            </select>
            <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>
          <input type="tel" name="phone-number" id="phone-number"  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
      {/* <div className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          <button type="button" className="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
            <span className="sr-only">Agree to policies</span>
            <span aria-hidden="true" className="h-4 w-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
          </button>
        </div>
        <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
          By selecting this, you agree to our
          <a href="/privacy-policy" className="font-semibold text-gray-600"> privacy&nbsp;policy</a>.
        </label>
      </div> */}
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Let's talk</button>
    </div>
  </form>
</div>
    </div>
    {/* <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48"/>
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"/>
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"/>
      <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"/>
      <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"/>
    </div>
  </div>
    </div> */}
    </>
  );
}
