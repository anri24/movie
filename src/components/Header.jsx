import { Link, useResolvedPath } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useState } from "react";




function Header() {
  let [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useResolvedPath()
  return (
    <header className="flex justify-center bg-black fixed top-0 w-full z-50">

      <div className="flex justify-between items-center w-[80%] mx-auto py-5">
        <Link to='/'>logo</Link>
        <div className="hidden lg:flex min-w-[25vw] justify-around border-gray-700 border-2 py-5 px-2 rounded-2xl bg-zinc-950">
          <Link to='/' className={`p-3 rounded-xl ${pathname === '/' && 'bg-zinc-800'}`}>მთავარი</Link>
          <Link to='/movies' className={`p-3 rounded-xl ${pathname === '/movies' && 'bg-zinc-800'}`}>ფილმები</Link>
          <Link to='/serials' className={`p-3 rounded-xl ${pathname === '/serials' && 'bg-zinc-800'}`}>სერიალები</Link>
          <Link to='animes' className={`p-3 rounded-xl ${pathname === '/animes' && 'bg-zinc-800'}`}>ანიმეები</Link>
        </div>
        <div className="hidden lg:flex items-center justify-end gap-5 w-32">
          <div className="text-2xl flex justify-start">
            <input className="w-[10vw] bg-stone-300 text-black px-2 outline-none rounded-l-xl" />
            <button className="bg-stone-300 text-black rounded-r-xl px-2"><HiMagnifyingGlass /></button>
          </div>
          <Link to='login' className="text-2xl"><HiOutlineUserCircle /></Link>
        </div>

        <div className="lg:hidden text-3xl">
          <div onClick={() => setIsSidebarOpen(is => !is)}>
            <HiBars3 />
          </div>
          {isSidebarOpen && (
            <div className="absolute left-0 top-15 w-[100vw] h-[100vh] z-50 bg-black">
              <div className="flex flex-col  gap-5 mt-10 ml-10">
              <div className="flex justify-start  ">
                    <input className="bg-stone-500 w-[70vw] p-2 outline-none rounded-l-xl" />
                    <button className="bg-stone-500 p-2 rounded-r-xl"><HiMagnifyingGlass /></button>
                  </div>
                <div className="flex flex-col text-xl gap-5 mt-5">
                  <Link to='/' onClick={() => setIsSidebarOpen(false)}>მთავარი</Link>
                  <Link to='/movies' onClick={() => setIsSidebarOpen(false)}>ფილმები</Link>
                  <Link to='/serials' onClick={() => setIsSidebarOpen(false)}>სერიალები</Link>
                  <Link to='animes' onClick={() => setIsSidebarOpen(false)}>ანიმაციები</Link>
                </div>
                <div className="flex flex-col gap-5 mt-10 text-xl">
                  <Link to='/login' onClick={() => setIsSidebarOpen(false)}>შესვლა</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>

  )
}

export default Header
