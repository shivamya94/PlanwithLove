export default function App() {
    return (

        <div className="w-full h-screen flex-col background ">
            <h1 className="bg-white rounded-sm">RANDOM GIFS</h1>
             <div className="flex flex-col">
                <Random/>
                <Tag/>
             </div>
        </div>
    );
}