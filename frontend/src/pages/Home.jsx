function Home() {
  return (
    <div>
      <body>
        <div className="min-h-80 mx-0 px-40 bg-lime-200 grid grid-cols-2">
          <div className="py-10 max-w-7xl px-2 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold py-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">Welcome to the Open Computing Facility!</h1>
            <p>
              The Open Computing Facility (OCF) is an all-volunteer student organization dedicated to free computing for all University of California, Berkeley students, faculty, and staff.
              <br/>
              We're passionate about open source and free software.
            </p>
          </div>
          <div>
            <center>
            <img
                alt="Your Company"
                src="../src/assets/penguin-swing.svg"
                className="mx-5 h-80 w-auto"
              />
              </center>
          </div>
        </div>
        <div className="h-screen mx-0 px-40 bg-slate-200 grid grid-cols-3 gap-4">
          <div className="mt-4 py-5 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100">
            <h1 class="text-3xl font-bold pb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">lab hours</h1>
          </div>
          <div className="mt-4 py-5 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100">
            <h1 class="text-3xl font-bold pb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">location</h1>
          </div>
          <div className="mt-4 py-5 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100">
            <h1 class="text-3xl font-bold pb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">blurb</h1>
          </div>
          <div className="py-5 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100">
            <h1 class="text-3xl font-bold pb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">news</h1>
          </div>
          <div className="py-5 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100">
            <h1 class="text-3xl font-bold pb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">join</h1>
          </div>
          <div className="py-5 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100">
            <h1 class="text-3xl font-bold pb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">stats</h1>
          </div>

          <div className="py-5 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100">
            <h1 class="text-3xl font-bold pb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-800 font-bold">decal</h1>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;

