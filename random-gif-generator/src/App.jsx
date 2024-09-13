import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
    return (

        <div className="w-full h-screen flex-col background relative">
            <h1 className="absolute bg-white rounded-sm w-full text-center mt-[40px]">RANDOM GIFS</h1>
             <div className="flex flex-col">
                <Random/>
                <Tag/>
             </div>
        </div>
    );
}