// Todo
function StaffHours() {
    return (
      <div>
        <body>
          <div className="min-h-20 mx-0 px-40 bg-lime-200 grid">
            <div className="py-10 max-w-7xl px-2 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold pb-5 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">Have Questions?</h1>
              <p class="text-lg font-bold">
                Drop by for help from a friendly volunteer staffer!
              </p>
            </div>
          </div>
          <div className="h-screen mx-0 px-40 bg-slate-200 grid grid-cols-2 gap-4">
            <div className="mt-4 py-5 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100">
                <p>
                    OCF staff members hold regular drop-in staff hours to provide assistance with account issues or with OCF services. 
                    We're always happy to help troubleshoot account or service issues!
                </p>
                <br/>
                <p>
                    Keep in mind the OCF volunteers sometimes have last-minute conflicts, so it's a good idea to check this page for cancellations.
                </p>
                <br/>
                <p>
                    Visit <a href="https://ocf.io/lab">ocf.io/lab</a> for directions. If you need online staff hours, 
                    please email <a href="mailto:help@ocf.berkeley.edu">help@ocf.berkeley.edu</a>.
                </p>
            </div>
            <div className="mt-4 py-5 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100">
              <h1 class="text-3xl font-bold pb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">location</h1>
            </div>
          </div>
        </body>
      </div>
    );
  }
  
  export default StaffHours;
  
  