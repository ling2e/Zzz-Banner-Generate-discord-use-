import { ForwardedRef, forwardRef } from 'react';

// importing image and data
import Images from "../assets/images";

interface Props {
    Character: {
        color: string;
        image: string;
        name: string;
        CategoryImage: string;
    },
    date : number
}

const BannerDesign= forwardRef(({ Character , date } : Props, ref: ForwardedRef<HTMLDivElement>) => {

    // get the main color of the character
    const mainClr: string = Character.color;

    return <>
        <main
            ref={ref}
            className={`bg-[#252525] w-[1920px] h-[1080px] rounded-xl overflow-hidden relative
        text-white px-[3rem] py-[4.3rem] after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:block after:z-[51]`}
        >
            <div
                className="block absolute content-[''] top-0 left-0 w-[300px] h-[300px]  rotate-[58deg] -translate-x-1/2 -translate-y-[65%]"
                style={{ background: `${mainClr}` }}
            />
            <div
                className="block absolute content-[''] bottom-0 right-0 w-[1100px] h-[1400px] rotate-[58deg] translate-y-[65%] translate-x-[27%] "
                style={{ background: `${mainClr}` }}
            />

            <div className="mx-16 font-bold  relative z-[10]" style={{
                lineHeight: 1,
                fontSize: '5.6rem',
            }}>
                <p className="-mx-12 text-9xl">《绝区零》玩家提醒 :</p>
                <hr className="invisible my-2" />
                <p>今日为『调律测试』结束后</p>
                <hr className="invisible mt-1" />
                <p>
                    第{" "}
                    <span
                        className="text-[13rem] font-semibold tracking-wider"
                        style={{ color: `${mainClr}` }}
                        id="dayCount"
                    >
                        {date}
                    </span>
                    天
                </p>
                <hr className="invisible my-1" />
                <p>继续努力。</p>
            </div>

            <img
                src={Character.image}
                alt={Character.name}
                id="Character"
                style={{
                    height: "100%",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    zIndex: 50,
                    objectFit: "contain",
                }}
            />

            <img
                src={Character.CategoryImage}
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
    </>
})

export default BannerDesign;