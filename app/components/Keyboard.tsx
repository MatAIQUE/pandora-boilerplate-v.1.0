import { FaArrowLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface Props {
  handleKeyClick: (key: string) => void;
  handleDeleteClick: () => void;
}

const Keyboard = ({ handleKeyClick, handleDeleteClick }: Props) => {
  return (
    <>
      <div className="mb-20 w-full justify-center bottom-0 fixed ">
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
            className="kbd-lg scale-150 m-4 btn btn-outline btn-error"
          >
            <FaArrowLeft className="text-error" />
          </kbd>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
