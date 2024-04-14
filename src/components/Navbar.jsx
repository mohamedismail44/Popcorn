export default function Navbar({ setQuery,Movies }) {
  return (
    <div>
      <nav className="mx-1 px-6  py-3  items-center rounded-md bg-[#6741D9] flex justify-between">
        <div className="flex gap-2">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <div className="">
          <input
            className="rounded-md px-12 py-1 bg-[#7950F1] "
            type="text"
            placeholder="Search Movies"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className=" ">
          <h1>Found {Movies.length} results</h1>
        </div>
      </nav>
    </div>
  );
}
