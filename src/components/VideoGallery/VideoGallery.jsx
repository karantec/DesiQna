import { useEffect,useState } from "react";
import axios from "axios";
import { DOMAIN } from "../../env/env";
function VideoGallery() {
  const [video,setVideo] = useState([])

  useEffect(()=>{
    fetchVideo()
    },[])
  
    async function fetchVideo(){
      try {
        const response  = await axios.get(`${DOMAIN}api/youtube-coding-videos`);
        const {data}  =  await response;
        setVideo(data.data)
      } catch (error) {
        setVideo([])
        
      }
  
    }
  

  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <h1 className="text-2xl sm:text-1xl md:text-5xl lg:text-5xl text-center font-bold font-sans py-7">
      Take A Glimpse of Our DSA Class <br/> Taught by <span className="text-red-600"> Kumar K Sir </span> 
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4">
        {video.map((videoUrl, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9 items-center">
            <iframe
              className="w-full h-full"
              src={videoUrl.attributes.Link}
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGallery;
