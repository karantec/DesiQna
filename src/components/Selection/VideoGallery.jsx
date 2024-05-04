import { useEffect,useState } from "react";
import axios from "axios";
import { DOMAIN } from "../../env/env";
function VideoGallerys() {
  const [video,setVideo] = useState([])

  useEffect(()=>{
  fetchVideo()
  },[])

  async function fetchVideo(){
    try {
      const response  = await axios.get(`${DOMAIN}api/youtube-videos`);
      const {data}  =  await response;
      setVideo(data.data)
    } catch (error) {
      setVideo([])
      
    }

  }




  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4">
        {video.map((videoUrl, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9 items-center">
            <iframe
              className="w-full h-full"
              src={videoUrl.attributes.Links}
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>

          </div>
          
        ))}
        
      </div>
      <div className='inline-flex flex-col items-center justify-center'>
          <button role="button" className=" mt-4 text-red hover:before:bg-red border-2  rounded-lg border-orange-500  relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-2xl">View More</span>
          </button>
        </div>
    </div>
  );
}

export default VideoGallerys;
