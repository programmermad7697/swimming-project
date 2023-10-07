import Link from "next/link";

function Header() {
  return (
    <header className="px-6 py-10 bg-slate-500 flex flex-row justify-between shadow-lg">
      <div className="flex flex-row space-x-2">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-100 py-2 md:text-2xl">
            Swimming Project
          </h1>
        </Link>
      </div>

      <div className="flex flex-row">
        <Link href="/workoutRecords">
          <h1 className="text-xl font-bold text-gray-100 py-2 md:text-2xl">
            Workout Records
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
