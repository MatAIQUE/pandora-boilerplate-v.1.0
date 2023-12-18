const Input = () => {

  return (
    <>
    
    <div className="text-white font-medium mb-2 flex justify-start">
        <span className="text-2xl">Label here</span>
    </div>

    <div className="font-medium mb-5 flex justify-start">
        <span className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam veritatis culpa harum debitis cumque hic odio, maxime</span>
    </div>


    {/* door input */}
    {/* <div className="">
        <input type="text" placeholder="0 1" className="input input-bordered text-2xl input-neutral w-20 text-center bg-white text-black"/>
    </div> */}
    {/* end of door input */}

    {/* long input */}
    <div className="">
        <input type="text" placeholder="0 0 0 0 0 0" className="input input-bordered text-2xl input-neutral w-full text-center bg-white text-black"/>
    </div>
    {/* end of long input */}
    
    {/* Input Tail */}
    <div className="text-danger font-medium mt-5 flex justify-start">
        <button className="btn btn-ghost">
            <span className="text-error text-lg">Label here</span>
        </button>
    </div>
    {/* End of Input Tail */}
    </>
  );
};

export default Input;
