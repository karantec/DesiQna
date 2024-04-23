import React from "react";

function VideoGallery() {
  return (
    <>

      <div className="flex flex-col items-center justify-center pb-10">
        <h1 className="text-3xl text-center font-bold font-sans py-7">Your can see our <span className="text-red-600">Mentor</span> how he teaches</h1>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/tRddj5uBAHs?si=chc_cMSXLfdOXre2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/v6tOS9Lf2VQ?si=eb6dw1_3C0BTTMda"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/QUfiCT9RyGk?si=uvnQdtrdSmwfbqgk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/vky0RHci1Oc?si=Dz8EWh4bvDFb_3-Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
             width="360"
             height="215"
              src="https://www.youtube.com/embed/Af0rakBI7RE?si=fREXjvoIdLULvNaw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/2fQEiI2x9RM?si=Oo8PkUiOg9g1Lazu"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoGallery;
