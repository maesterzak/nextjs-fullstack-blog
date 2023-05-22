import Image from "next/image";


export default function CommentCard(param) {
    let { data } = param

    return (
        <div className="w-full bg-primaryBackground rounded-3xl p-4">
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <div className="relative w-10 h-10">
                        <Image
                            width={700}
                            height={700}
                            sizes={"100vw"}
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            className="mt-2 w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
                            src={data.user.image}
                            alt="Bordered avatar" />
                    </div>
                    <span>{data.user.name}</span>
                </div>
                <span>{data.createdAt}</span>

            </div>
            <div className="mt-5">
                <p>{data.body}</p>

            </div>

        </div>
    )
}