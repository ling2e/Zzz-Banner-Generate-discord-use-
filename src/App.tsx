import { useState, useEffect, useRef, Suspense } from "react";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
// import { download } from "downloadjs"

// importing iamge and data
import Images from "./assets/images";
import CharacterInfo from "./data";

import Loader from "./Loader";
import Navbar from "./component/Navbar";

function App() {
  const [isCharDone, setIsCharDone] = useState<boolean>(false);
  const imgCharRef = useRef<HTMLImageElement>(null);

  imgCharRef.current?.addEventListener("load", () => {
    setIsCharDone(true);
  });

  // get random Number
  const [randNumber, setRandNum] = useState<number>(1);
  const getRandomNum = () => {
    const randNum = Math.floor(Math.random() * 12) + 1;
    setRandNum(randNum);
  };
  useEffect(() => {
    getRandomNum();
  }, []);
  // get random Number end here
  // function reganerate number
  const handleBtnRandomNumClick = () => {
    setImageUrl("");
    getRandomNum();

    setTimeout(() => fcGetDisplayImg(), 1000);
  };

  // get the main color of the character
  const mainClr: string = CharacterInfo[randNumber].color;

  // function display Image
  const fcGetDisplayImg = (): void | Promise<string> => {
    let target = oDivRef.current;
    if (!target) return alert("Getting Some Error");
    return toPng(target).then((dataUrl) => {
      setImageUrl(dataUrl);
      return dataUrl;
    });
  };

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
  }, []);

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
    return () => {
      clearTimeout(ImgTimeout);
    };
  }, [oDivRef.current]);

  return (
    <>
      <div className="w-screen h-screen fixed p-4 z-10 bg-white">
        <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-2">
          <a
            onClick={handleBtnClick}
            className="block w-full md:w-1/2 text-center py-2 rounded-lg bg-blue-600 text-white font-semibold text-lg cursor-pointer active:bg-blue-500 hover:bg-blue-700"
          >
            下载
          </a>
          <a
            onClick={handleBtnRandomNumClick}
            className="block w-full md:w-1/2 text-center py-2 rounded-lg bg-blue-600 text-white font-semibold text-lg cursor-pointer active:bg-blue-500 hover:bg-blue-700"
          >
            Regenerate
          </a>
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

        {/* <Navbar /> */}
      </div>

      <div className="p-4 grid place-items-center w-screen h-screen overflow-hidden relative z-0">
        <Suspense fallback={<Loader />}>
          <main
            ref={oDivRef}
            className={`bg-[#252525] w-[1920px] h-[1080px] rounded-xl overflow-hidden relative
        text-white px-[3rem] py-[4.3rem] after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:block after:z-[51]`}
          >
            <div
              className="block absolute content-[''] top-0 left-0 w-[300px] h-[300px]  rotate-45 -translate-x-1/2 -translate-y-1/2"
              style={{ background: `${mainClr}` }}
            />
            <div
              className="block absolute content-[''] bottom-0 right-0 w-[1100px] h-[1400px] rotate-[58deg] translate-y-[65%] translate-x-[27%] "
              style={{ background: `${mainClr}` }}
            />

            <div className="my-8 mx-16 font-bold text-7xl relative z-[10]">
              <p className="-mx-12 text-9xl">《绝区零》玩家提醒 :</p>
              <hr className="invisible my-2" />
              <p>今日为『调律测试』结束后</p>
              <hr className="invisible mt-1" />
              <p>
                第{" "}
                <span
                  className="text-[12rem] font-semibold tracking-wider"
                  style={{ color: `${mainClr}` }}
                  id="dayCount"
                >
                  {daysSinceStart}
                </span>
                天
              </p>
              <hr className="invisible my-1" />
              <p>继续努力。</p>
            </div>

            <img
              src={CharacterInfo[randNumber].image}
              ref={imgCharRef}
              alt=""
              id="Character"
              height="100%"
              className="h-full absolute bottom-0 right-0 z-[50] object-contain"
            />

            <img
              src={CharacterInfo[randNumber].CategoryImage}
              alt=""
              id="category"
              className="opacity-50 absolute top-0 left-14 h-full"
            />
            <img
              src={Images.Logo.LogoTwo}
              alt="Logo"
              className="absolute bottom-5 left-5 h-[20%] z-[51]"
            />
          </main>
        </Suspense>
      </div>
    </>
  );
}

export default App;
