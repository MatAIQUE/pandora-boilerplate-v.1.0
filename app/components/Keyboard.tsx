import { FaArrowLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Keyboard = () => {
  return (
    <>
      <div className="mb-20 w-full justify-center bottom-0 fixed ">
        <div className="flex justify-center gap-2 my-2 mb-4">
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            1
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            2
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            3
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            4
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            5
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            6
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            7
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            8
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            9
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            0
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-2">
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            Q
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            W
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            E
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            R
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            T
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            Y
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            U
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            I
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            O
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            P
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-2">
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            A
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            S
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            D
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            F
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            G
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            H
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            J
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            K
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            L
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-1">
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            Z
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            X
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            C
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            V
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            B
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            N
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral ">
            M
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-white text-neutral">
            <FaArrowLeft />
          </kbd>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
