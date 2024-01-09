import { FaArrowLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Keyboard = () => {
  return (
    <>
      <div className="mb-20 w-full justify-center bottom-0 fixed ">
        <div className="flex justify-center gap-2 my-2 mb-4">
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            1
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            2
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            3
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            4
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            5
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            6
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            7
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            8
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            9
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info">
            0
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-2">
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            Q
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            W
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            E
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            R
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            T
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            Y
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            U
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            I
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            O
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            P
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-2">
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            A
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            S
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            D
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            F
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            G
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            H
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            J
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            K
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            L
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-1">
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            Z
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            X
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            C
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            V
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            B
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            N
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-info ">
            M
          </kbd>
          <kbd className="kbd-lg scale-150 m-4 btn btn-outline btn-error">
            <FaArrowLeft className="text-error"/>
          </kbd>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
