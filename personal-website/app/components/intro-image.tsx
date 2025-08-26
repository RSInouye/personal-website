export function Intro() {
  return (
    <div
      className="h-[66vh] flex bg-cover bg-center bg-[url(/images/front-page-main-picture.jpg)]"
    >
      <div className="w-2/5"></div>
      <div className="w-3/5 flex items-center justify-center flex-col gap-5">
        <div>
          <h1 className="text-5xl text-white font-bold"> Hello, I'm Stanley Inouye </h1>
        </div>
        <div>
          <h6 className="text-white">Software Engineer. Musician. UVA Alumni.</h6>
        </div>
        <div className="flex flex-row gap-10">
          <div>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition">
              Contact Me
            </button>     
          </div>
        </div>
      </div >
    </div>
  )
}
