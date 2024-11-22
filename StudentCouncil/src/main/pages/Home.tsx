import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: 'url(https://oeirasischool.wpenginepowered.com/wp-content/uploads/2021/05/OIS-33-2048x1368.jpg)' }} // Replace with your image URL
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white">Welcome to the Student Council</h1>
          <p className="text-xl text-white mt-4">
            Empowering students and making a difference in our community.
          </p>
          <Button  className="mt-6 bg-white text-black hover:bg-black hover:text-white"><Link to="/talk-to-us">Talk to us</Link> </Button>
        </div>
      </section>
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Student Council - Who We Are</h2>
          <p className="mt-4 text-lg text-gray-600">
            The Student Council is the voice of the student body, representing and
            advocating for students while contributing to the school community
            through projects, events, and service.
          </p>
  
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Our Structure</h3>
              <p className="mt-4 text-gray-700">
                Led by the Head Students (President and Vice President), we have
                representatives from each year group (7-12), and committee roles
                for senior students, such as Treasurer, Secretary, and Events
                Coordinators.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">What We Do</h3>
              <p className="mt-4 text-gray-700">
                We aim to build on the foundation set by previous councils, working
                on projects that enhance student life, organize events, and promote
                sustainability. Every member contributes to ongoing projects to
                ensure continuity.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Meetings & Service</h3>
              <p className="mt-4 text-gray-700">
                We meet weekly during lunchtime, and these meetings count towards
                Service as Action / CAS. All students are encouraged to voice their
                opinions and suggestions through their representatives.
              </p>
            </div>
          </div>
  
          
        </div>
      </section>
    </div>
  )
}

export default Home