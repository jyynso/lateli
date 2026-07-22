import type React from "react";

function UploadArtwork() {

  const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("wowzers"); 
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-row gap-4 rounded-md shadow-md bg-(--bg-card)">
          
          <img src="/duck.png" className="h-100 w-90 rounded-l-md object-cover"/>
          
          <div className="flex flex-col items-center w-70 gap-4 p-5">
            <h1 className="font-semibold">Upload an Artwork</h1>

            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="text" placeholder="Artwork name" className="outline-none bg-transparent text-sm w-full"/>
            </div>
            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="text" placeholder="Artist Name" className="outline-none bg-transparent text-sm w-full"/>
            </div>
            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="text" placeholder="Description" className="outline-none bg-transparent text-sm w-full"/>
            </div>
            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="text" placeholder="Medium" className="outline-none bg-transparent text-sm w-full"/>
            </div>
            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="number" placeholder="Price" className="outline-none bg-transparent text-sm w-full"/>
            </div>

            <button type='submit' className='text-sm w-60 p-2 cursor-pointer bg-(--accent-charcoalBlue) text-white rounded'>
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default UploadArtwork;