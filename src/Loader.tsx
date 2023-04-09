import "./assets/css/Loader.css";

export default function Loader() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-[99] bg-gray-600 bg-opacity-60" />
      <div className="fixed w-[200px] h-[200px] z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
        <div className="load-wrapp grid place-items-center h-full">
          <div className="load-9"> 
            <div className="spinner">
              <div className="bubble-1"></div>
              <div className="bubble-2"></div>
            </div>
            <p className="text-center mt-4 text-xl">加载中...</p>
          </div>
        </div>
      </div>
    </>
  );
}
