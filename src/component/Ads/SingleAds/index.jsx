import Image from "next/image"

export default function SingleAds() {

    return (
        <div className="w-[45%] md:w-full">
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