
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <nav className="bg-white border-b sticky top-0 z-50 w-full px-48">
        <div className=" flex justify-between items-center py-4 align-middle">
          <div className="text-2xl font-semibold"><a href="/" className=" ">OIS Student Council</a></div>
          <ul className="flex space-x-14 flex-row items-center align-middle">
            <li><a href="/calendar" className="hover:text-stone-600 text-xl ">Calendar</a></li>
            <li><a href="/news" className="hover:text-stone-600 text-xl">News</a></li>
            <li><a href="/finances" className="hover:text-stone-600 text-xl">Finances</a></li>
          </ul>
        </div>
      </nav>
        <Outlet/>
        <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
         
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Student Council</h2>
            <p className="mt-2 text-gray-400">
              Representing student voices, organizing events, and creating a
              positive impact in our school community.
            </p>
            
          </div>
  
          <div className="flex space-x-6 text-center md:text-right">
            <a href="/news" className="text-gray-400 hover:text-white">
              News
            </a>
            <a href="/calendar" className="text-gray-400 hover:text-white">
              Calendar
            </a>
            <a href="/constitution" className="text-gray-400 hover:text-white">
              Constitution
            </a>
            <a href="/finances" className="text-gray-400 hover:text-white">
              Finances
            </a>
          </div>
  
          
        </div>
        <div className='w-full my-6 text-xl text-gray-300 items-center align-middle justify-center flex flex-col '>
            <p className='hover:text-grey-400 flex'>
              <p className='' >Send us an email: student.council@ois.pt</p>
            </p>
            <p className='flex mt-2'>
              <img height="30px" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"/>
              <a className='ml-1 hover:underline hover:text-grey-400' href="https://www.instagram.com/ois_stuco/">@ois_stuco</a>
            </p>
            </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} OIS Student Council. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default MainLayout