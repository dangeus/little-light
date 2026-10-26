import Link from "next/link";
import DownArrowIcon from "@/components/icons/DownArrowIcon";
import FireIcon from "@/components/icons/FireIcon";

export default function Home() {
    return (
        <div>
            <div className="flex items-center gap-3">
                <FireIcon size={48}/>
                <p className="text-3xl font-bold">Little Light</p>
            </div>

            <div className="text-center flex flex-col items-center min-h-[95vh] justify-between">
                <div className="max-w-140 flex flex-col items-center gap-6">
                    <p className="text-soft text-xl">music social network</p>
                    <h1 className="text-7xl font-bold">Little Light</h1>
                    <p className="text-2xl">Sit by the fire and listen to music together with friends</p>
                    <div className="flex gap-4">
                        <Link className="border-3 border-ember bg-accent text-black p-3 text-2xl" href="/register">Find your fire</Link>
                        <Link className="border-3 border-line bg-panel-dark p-3 text-2xl" href="/login">I have an account</Link>
                    </div>
                </div>
                <button className="flex flex-col items-center leading-2">How it works <DownArrowIcon/></button>
            </div>

        </div>
    );
}
