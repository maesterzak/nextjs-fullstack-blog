import Button1 from "@/component/Reuseable/Buttons/Button1";


export default function SectionTwo() {

    return (
        <div className="grid grid-cols-3 gap-6 ">

            <div class="col-span-3 lg:col-span-2 bg-[red] p-5">04</div>
            <div class="shadow-xl rounded-md col-span-3  lg:col-span-1 p-5 flex flex-col gap-4 ">
                <h2 className="font-bold">Subscribe To Our Newsletter</h2>
                <p className="text-sm">Egestas eu molestie lacus, rhoncus, gravida aliquet sociis vulputate faucibus tristique odio</p>
                <div className="flex gap-4 flex-col md:flex-row">
                    <input className="w-full border-2 p-2 bg-grayBackground border-grayBorder" placeholder="Email address" /><Button1 text={"Subscribe"} classList={"px-5 font-bold py-1 border-2 border-primaryColor flex justify-center items-center"} />
                </div>
            </div>

        </div >
    )
}