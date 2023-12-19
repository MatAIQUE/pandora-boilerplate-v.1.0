interface Props {
  placeholder: string;
}

const Input = ({ placeholder }: Props) => {
  return (
    <>
      {/* door input */}
      {/* <div className="">
        <input type="text" placeholder="0 1" className="input input-bordered text-2xl input-secondary w-20 text-center bg-white text-black"/>
    </div> */}
      {/* end of door input */}

      <div className="mb-5">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered text-xl input-secondary w-full text-center bg-white text-black text-start"
        />
      </div>
    </>
  );
};

export default Input;
