import PhotoGallery from "@/components/PhotoGallery"

const News = () => {
  return (
    <div className="mb-12">
    <h2 className="text-6xl font-normal my-8 w-full text-center">News</h2>
    <div className="border-b mx-6 sm:mx-12 md:mx-32 lg:mx-48 "/>
    <div className="flex flex-col">
    <div className="mx-6 sm:mx-12 md:mx-32 lg:mx-48  p-4">
        <p className="text-stone-600 pb-2">16/12/2024</p>
  
  <h2 id="preamble" className="text-4xl font-normal text-stone-800 pb-3">Spirit Week</h2>
  <PhotoGallery photos={["https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/SPIRITWEEKstuco.pdf"]}/>
  <p className="py-4 pt-1 text-xl">
  Spirit Week is the Annual End of Year week when each day has it's own dress-theme. Watch out for free Hot Chocolate and Marshmallows!
  </p>
    
     </div>
        <div className="mx-6 sm:mx-12 md:mx-32 lg:mx-48  p-4">
        <p className="text-stone-600 pb-2">13/11/2024</p>
  
  <h2 id="preamble" className="text-4xl font-normal text-stone-800 pb-3">Costume Competition Pizza Party</h2>
  <PhotoGallery photos={["https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/6.png", "https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/7.png"]}/>
  <p className="py-4 pt-1 text-xl">
  This week, we threw a Pizza Party to the Costume Competition Winners: Year 13 Mr Zamith’s Class! They dressed up with a theme of Boys as Girls and 
  Girls as Boys, a well deserved win! They received over 67 votes, taking the lead over Year 8 with 27 votes and Years 9 and 7 who tied with 14 votes.
  </p>
    
     </div>
        <div className="mx-6 sm:mx-12 md:mx-32 lg:mx-48  p-4">
        <p className="text-stone-600 pb-2">23/10/2024</p>
  
  <h2 id="preamble" className="text-4xl font-normal text-stone-800 pb-3">Halloween</h2>
  <PhotoGallery photos={["https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/4.png", "https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/1.png", "https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/2.png", "https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/3.png"]}/>
  <p className="py-4 pt-1 text-xl">
    On the last Wednesday before the Mid-Term Break, we had our annual Halloween party after school. 
  </p>
    
  <p className="text-xl py-4 pt-1">This year we had a Costume Competition, the Haunted House, a Golden Ticket hunt during the entire week, Craft Stands and Games, and a Movie Night </p>
        </div>
        <div className="mx-6 sm:mx-12 md:mx-32 lg:mx-48  p-4">
        <p className="text-stone-600 pb-2">23/10/2024</p>
  
  <h2 id="preamble" className="text-4xl font-normal text-stone-800 pb-3">Halloween Posters</h2>
  <PhotoGallery photos={["https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/H4.png",
    "https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/H3.png", 
    "https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/HalloweenposterTHEMEDACTIVITIES.pdf",
    "https://raw.githubusercontent.com/y0n1n1/StudCO/refs/heads/main/StudentCouncil/public/HaloweenPosterMOVIENIGHT.pdf"]}/>
       </div>
    </div>
    </div>
  )
}

export default News