import { useState, useEffect, useRef, Suspense } from "react";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
// import { download } from "downloadjs"

// importing iamge and data
import Images from "./assets/images";
import CharacterInfo from "./data";

function App() {
  const [randNumber, setRandNum] = useState<number>(1);

  const getRandomNum = () => {
    const randNum = Math.floor(Math.random() * 12) + 1;
    setRandNum(randNum);
  };

  useEffect(() => {
    getRandomNum();
  }, []);
  const mainClr: string = CharacterInfo[randNumber].color;

  const [daysSinceStart, setDaysSinceStart] = useState(0);
  // 2022-08-08 23:59:59
  const startDate = new Date("2022-08-08");
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
    let target = oDivRef.current;
    if (!target) return alert("Getting Some Error");
    toPng(target)
      .then((dataUrl) => {
        setImageUrl(dataUrl);
        downloadImage(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="p-4 grid place-items-center">
      <hr className="mt-2 invisible" />
      <div className="flex flex-nowrap gap-6 w-[1920px]">
        <a
          onClick={handleBtnClick}
          className="block w-1/2 text-center py-4 px-12 rounded-lg bg-blue-600 text-white font-semibold text-xl cursor-pointer active:bg-blue-500 hover:bg-blue-700"
        >
          下载
        </a>
        <a
          onClick={getRandomNum}
          className="block w-1/2 text-center py-4 px-12 rounded-lg bg-blue-600 text-white font-semibold text-xl cursor-pointer active:bg-blue-500 hover:bg-blue-700"
        >
          Regenerate
        </a>
      </div>
      <hr className="my-2 invisible" />
      <Suspense fallback={<>Loading...</>}>
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
            alt=""
            id="Character"
            className="h-full absolute bottom-0 right-0 z-[50]"
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
      {/* <div className="h-[90%] w-screen bg-white block absolute z-[52]"/> */}
    </div>
  );
}

export default App;
