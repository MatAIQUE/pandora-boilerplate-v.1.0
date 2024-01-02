interface Props {
  placeholder: string;
}

const Input = ({ placeholder }: Props) => {
  return (
    <>
      <div className="mb-5">
        <input
        maxLength={4}
          type="text"
          placeholder={placeholder}
          className="input input-bordered text-xl input-secondary w-full bg-white text-black text-start"
        />
      </div>
    </>
  );
};

export default Input;
