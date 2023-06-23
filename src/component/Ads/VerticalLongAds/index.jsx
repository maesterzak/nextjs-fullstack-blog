
import Image from "next/image"
export default function VerticalAds() {

    return (
        <div className="w-full h-full">
            <Image

                width={700}
                height={700}
                sizes="100vw"
                style={{
                    width: "auto",
                    height: "auto",
                }}
                className="w-full h-[auto]" src='/img/ads-placeholder.png' />

        </div>
    )
}