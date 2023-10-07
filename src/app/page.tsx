
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{ backgroundColor: '#ccc' }}>
      <div className=" w-full items-center justify-between font-mono text-sm lg:flex">
        <nav style={{ position: 'relative', left: 0, top: 0, width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(20, 83, 45, 0.5)', paddingTop: '2rem', paddingBottom: '1.5rem', backdropFilter: 'blur(2px)', zIndex: 10 }}>
          <button className="p-2 font-bold">About</button>
          <button className="p-2 font-bold">How To Use</button>
          <button className="p-2 font-bold">Security</button>
        </nav>
        <div className="">
          
        </div>
      </div>


      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gray-100 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="bg-gray-100 h-[100px] w-[480px] rounded-full" />
      </div>

      <div className="mb-4 text-center max-w-3xl text-black dark:text-gray-700">
        <h1 className="text-4xl font-bold mb-4">BudgetSaku: Aplikasi Pelacakan Pengeluaran</h1>
        <p className="text-lg mb-6">
          BudgetSaku memungkinkan Anda mengelola anggaran harian, bulanan, dan tahunan dengan mudah. Lacak pengeluaran Anda di berbagai bank yang Anda hubungkan.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full py-2 px-4 border border-gray-300 rounded" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">Password:</label>
              <input type="password" id="password" name="password" placeholder="Your Password" required className="w-full py-2 px-4 border border-gray-300 rounded" />
            </div>
            <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
