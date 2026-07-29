import type React from "react";
import { useState } from "react";

function UploadArtwork() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("/duck.png");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [description, setDescription] = useState("");
  const [medium, setMedium] = useState("");
  const [price, setPrice] = useState("");

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", title);
    formData.append("artist", artist);
    formData.append("description", description);
    formData.append("medium", medium);
    formData.append("price", price);

    try {
      const res = await fetch("/api/artworks", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      console.log("Uploaded", data);
      alert("Artwork Uploaded")
    } catch (err) {
      console.error(err);
      alert("Something broke")
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-row gap-4 rounded-md shadow-md bg-(--bg-card)">
          
          <div className="group relative h-100 w-90">
            <img src={previewUrl} className="h-full w-full rounded-l-md object-cover"/>
            <label className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-l-md bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm font-medium text-white">Upload image</span>
              <input type="file" className="hidden" onChange={handleFileChange}/>
            </label>
          </div>

          <div className="flex flex-col items-center w-70 gap-4 p-5">
            <h1 className="font-semibold">Upload an Artwork</h1>

            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Artwork name" className="outline-none bg-transparent text-sm w-full"/>
            </div>
            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="text" onChange={(e) => setArtist(e.target.value)} placeholder="Artist Name" className="outline-none bg-transparent text-sm w-full"/>
            </div>
            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="outline-none bg-transparent text-sm w-full"/>
            </div>
            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="text" onChange={(e) => setMedium(e.target.value)} placeholder="Medium" className="outline-none bg-transparent text-sm w-full"/>
            </div>
            <div className="flex items-center w-60 p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)">
              <input type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="outline-none bg-transparent text-sm w-full"/>
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