import { FaArrowLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface Props {
  handleKeyClick: (key: string) => void;
  handleDeleteClick: () => void;
}

const Keyboard = ({ handleKeyClick, handleDeleteClick }: Props) => {
  return (
    <>
      {/* <div className="mb-20 w-full justify-center bottom-0 fixed ">
        <div className="flex justify-center gap-2 my-2 mb-4">
          <kbd
            onClick={() => handleKeyClick("1")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            1
          </kbd>
          <kbd
            onClick={() => handleKeyClick("2")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            2
          </kbd>
          <kbd
            onClick={() => handleKeyClick("3")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            3
          </kbd>
          <kbd
            onClick={() => handleKeyClick("4")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            4
          </kbd>
          <kbd
            onClick={() => handleKeyClick("5")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            5
          </kbd>
          <kbd
            onClick={() => handleKeyClick("6")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            6
          </kbd>
          <kbd
            onClick={() => handleKeyClick("7")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            7
          </kbd>
          <kbd
            onClick={() => handleKeyClick("8")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            8
          </kbd>
          <kbd
            onClick={() => handleKeyClick("9")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            9
          </kbd>
          <kbd
            onClick={() => handleKeyClick("0")}
            className="kbd-lg scale-150 m-4 btn btn-info"
          >
            0
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-2">
          <kbd
            onClick={() => handleKeyClick("Q")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            Q
          </kbd>
          <kbd
            onClick={() => handleKeyClick("W")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            W
          </kbd>
          <kbd
            onClick={() => handleKeyClick("E")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            E
          </kbd>
          <kbd
            onClick={() => handleKeyClick("R")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            R
          </kbd>
          <kbd
            onClick={() => handleKeyClick("T")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            T
          </kbd>
          <kbd
            onClick={() => handleKeyClick("Y")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            Y
          </kbd>
          <kbd
            onClick={() => handleKeyClick("U")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            U
          </kbd>
          <kbd
            onClick={() => handleKeyClick("I")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            I
          </kbd>
          <kbd
            onClick={() => handleKeyClick("O")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            O
          </kbd>
          <kbd
            onClick={() => handleKeyClick("P")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            P
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-2">
          <kbd
            onClick={() => handleKeyClick("A")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            A
          </kbd>
          <kbd
            onClick={() => handleKeyClick("S")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            S
          </kbd>
          <kbd
            onClick={() => handleKeyClick("D")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            D
          </kbd>
          <kbd
            onClick={() => handleKeyClick("F")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            F
          </kbd>
          <kbd
            onClick={() => handleKeyClick("G")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            G
          </kbd>
          <kbd
            onClick={() => handleKeyClick("H")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            H
          </kbd>
          <kbd
            onClick={() => handleKeyClick("J")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            J
          </kbd>
          <kbd
            onClick={() => handleKeyClick("K")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            K
          </kbd>
          <kbd
            onClick={() => handleKeyClick("L")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            L
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-1">
          <kbd
            onClick={() => handleKeyClick("Z")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            Z
          </kbd>
          <kbd
            onClick={() => handleKeyClick("X")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            X
          </kbd>
          <kbd
            onClick={() => handleKeyClick("C")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            C
          </kbd>
          <kbd
            onClick={() => handleKeyClick("V")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            V
          </kbd>
          <kbd
            onClick={() => handleKeyClick("B")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            B
          </kbd>
          <kbd
            onClick={() => handleKeyClick("N")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            N
          </kbd>
          <kbd
            onClick={() => handleKeyClick("M")}
            className="kbd-lg scale-150 m-4 btn btn-info "
          >
            M
          </kbd>
          <kbd
            onClick={() => handleDeleteClick()}
            className="kbd-lg scale-150 m-4 btn focus:bg-outline"
          >
            <FaArrowLeft className="text-error" />
          </kbd>
        </div>
      </div> */}

      <div className="mb-20 w-full justify-center bottom-0 fixed">
        <div className="flex justify-center gap-2 my-2">
          <button
            onClick={() => handleKeyClick("1")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">1</p>
          </button>
          <button
            onClick={() => handleKeyClick("2")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">2</p>
          </button>
          <button
            onClick={() => handleKeyClick("3")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">3</p>
          </button>
          <button
            onClick={() => handleKeyClick("4")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">4</p>
          </button>
          <button
            onClick={() => handleKeyClick("5")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">5</p>
          </button>
          <button
            onClick={() => handleKeyClick("6")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">6</p>
          </button>
          <button
            onClick={() => handleKeyClick("7")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">7</p>
          </button>
          <button
            onClick={() => handleKeyClick("8")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">8</p>
          </button>
          <button
            onClick={() => handleKeyClick("9")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">9</p>
          </button>
          <button
            onClick={() => handleKeyClick("0")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">0</p>
          </button>
        </div>
        <div className="flex justify-center gap-2 my-2">
          <button
            onClick={() => handleKeyClick("Q")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">Q</p>
          </button>
          <button
            onClick={() => handleKeyClick("W")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">W</p>
          </button>
          <button
            onClick={() => handleKeyClick("E")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">E</p>
          </button>
          <button
            onClick={() => handleKeyClick("R")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">R</p>
          </button>
          <button
            onClick={() => handleKeyClick("T")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">T</p>
          </button>
          <button
            onClick={() => handleKeyClick("Y")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">Y</p>
          </button>
          <button
            onClick={() => handleKeyClick("U")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">U</p>
          </button>
          <button
            onClick={() => handleKeyClick("I")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">I</p>
          </button>
          <button
            onClick={() => handleKeyClick("O")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">O</p>
          </button>
          <button
            onClick={() => handleKeyClick("P")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">P</p>
          </button>
        </div>
        <div className="flex justify-center gap-2 my-2">
          <button
            onClick={() => handleKeyClick("A")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">A</p>
          </button>
          <button
            onClick={() => handleKeyClick("S")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">S</p>
          </button>
          <button
            onClick={() => handleKeyClick("D")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">D</p>
          </button>
          <button
            onClick={() => handleKeyClick("F")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">F</p>
          </button>
          <button
            onClick={() => handleKeyClick("G")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">G</p>
          </button>
          <button
            onClick={() => handleKeyClick("H")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">H</p>
          </button>
          <button
            onClick={() => handleKeyClick("J")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">J</p>
          </button>
          <button
            onClick={() => handleKeyClick("K")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">K</p>
          </button>
          <button
            onClick={() => handleKeyClick("L")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">L</p>
          </button>
        </div>
        <div className="flex justify-center gap-2 my-2">
          <button
            onClick={() => handleKeyClick("Z")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">Z</p>
          </button>
          <button
            onClick={() => handleKeyClick("X")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">X</p>
          </button>
          <button
            onClick={() => handleKeyClick("C")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">C</p>
          </button>
          <button
            onClick={() => handleKeyClick("V")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">V</p>
          </button>
          <button
            onClick={() => handleKeyClick("B")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">B</p>
          </button>
          <button
            onClick={() => handleKeyClick("N")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">N</p>
          </button>
          <button
            onClick={() => handleKeyClick("M")}
            className="btn border-none flex items-center justify-center w-[85px] h-[85px] active:btn-primary"
          >
            <p className="text-2xl font-bold pe-none">M</p>
          </button>
          <button
            onClick={() => handleDeleteClick()}
            className="btn btn-outline border-error border-4 flex items-center text-error justify-center w-[85px] h-[85px] focus:bg-error active:text-white duration-75"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
