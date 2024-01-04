import { FaArrowLeft } from "react-icons/fa";

const Keyboard = () => {
return (
    <>
    <div className="mb-20 w-full justify-center">
        <div className="flex justify-end me-36 gap-1 my-1 mb-4">
            <kbd className="kbd-lg scale-150 m-4 btn border-white bg-transparent"><FaArrowLeft/>BckSpc</kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 mb-4">
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">1</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">2</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">3</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">4</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">5</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">6</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">7</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">8</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">9</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">0</kbd>
        </div>
        <div className="flex justify-center gap-1 my-1">
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">q</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">w</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">e</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">r</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">t</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">y</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">u</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">i</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">o</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">p</kbd>
        </div> 
        <div className="flex justify-center gap-1 my-1">
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">a</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">s</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">d</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">f</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">g</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">h</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">j</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">k</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">l</kbd>
        </div> 
        <div className="flex justify-center gap-1 my-1">
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">z</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">x</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">c</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">v</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">b</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">n</kbd>
            <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral btn-disabled">m</kbd>
        </div>
    </div>
    </>
);


}

export default Keyboard