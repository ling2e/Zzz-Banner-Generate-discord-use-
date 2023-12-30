import { toPng } from "html-to-image";
import { Suspense, useEffect, useRef, useState } from "react";

// components
import BannerDesign from "./component/BannerDesign";

// importing image and data
import CharacterInfo from "./data";

import Loader from "./Loader";

function App() {

  // get random Number
  const [randNumber, setRandNum] = useState<number>(1);
  // get the date
  const [daysSinceStart, setDaysSinceStart] = useState(0);
  // 2022-08-08 23:59:59
  const startDate = new Date("2022-08-08 00:00:01");
  useEffect(() => {
    // Calculate the number of days since the start date
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / 86400000);

    // Update the state with the number of days
    setDaysSinceStart(daysDiff);

    setRandNum(((daysDiff - 1 ) % Object.keys(CharacterInfo).length) + 1)
  }, []);

  
  // get random Number end here
  // function reGenerate number
  const handleBtnRandomNumClick = () => {
    setImageUrl("");

    setTimeout(() => fcGetDisplayImg(), 1000);
  };


  // function display Image
  const fcGetDisplayImg = (): void | Promise<string> => {
    let target = oDivRef.current
    if (!target) return alert("Getting Some Error");
    return toPng(target).then((dataUrl) => {
      setImageUrl(dataUrl);
      return dataUrl;
    });
  };


  const oDivRef = useRef<HTMLDivElement>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const downloadImage = (imageDataURL: string) => {
    const link = document.createElement("a");
    if (!imageDataURL) return;
    link.href = imageDataURL;
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleBtnClick = () => {
    fcGetDisplayImg()
      ?.then((dataUrl: string) => {
        downloadImage(dataUrl);
      })
      .catch((err) => alert("Something went wrong!Please try again later."));
  };

  useEffect(() => {
    let ImgTimeout = setTimeout(() => fcGetDisplayImg(), 1000);
    return () => clearTimeout(ImgTimeout)
  }, [oDivRef.current]);

  return (
    <>
      <div className="w-screen h-screen fixed p-4 z-10 bg-white">
        <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-2 px-10">
          <a
            onClick={handleBtnClick}
            className="block w-full col text-center py-2 rounded-lg bg-blue-600 text-white font-semibold text-lg cursor-pointer active:bg-blue-500 hover:bg-blue-700"
          >
            下载
          </a>
          {/* <a
            onClick={handleBtnRandomNumClick}
            className="block w-full md:w-1/2 text-center py-2 rounded-lg bg-blue-600 text-white font-semibold text-lg cursor-pointer active:bg-blue-500 hover:bg-blue-700"
          >
            Regenerate
          </a> */}
        </div>
        <hr className="invisible my-2" />
        <div className="w-full grid place-items-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Banner"
              className="max-w-[1000px] w-full"
            />
          ) : (
            <Loader />
          )}
        </div>

      </div>

      <div className="p-4 grid place-items-center w-screen h-screen overflow-hidden relative z-0">
        <Suspense fallback={<Loader />}>
          <BannerDesign ref={oDivRef} Character={CharacterInfo[randNumber]} date={daysSinceStart} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
