import type React from "react";
import { useState } from "react";

function UploadArtwork() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("/placeholder.svg");
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
      <div className="mb-20 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:mt-2">
        <h1 className="font-semibold text-2xl mb-10 fade-in">Upload an Artwork</h1>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl flex-col overflow-hidden md:flex-row">
          <div className="group relative h-72 w-full fade-in fade-in-delay-1 sm:h-90 md:w-sm">
            <img src={previewUrl} className="h-full w-full object-cover" alt="Artwork preview" />
            <label className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 sm:rounded-l-md">
              <span className="text-sm font-medium text-white">Select Image</span>
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <div className="fade-in fade-in-delay-2 mt-6 flex w-full flex-col items-center gap-4 p-4 sm:p-5 md:mt-0 md:w-70 lg:ml-4">
            <div className="flex w-full items-center gap-2 border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Artwork name" className="w-full bg-transparent text-sm outline-none" />
            </div>
            <div className="flex w-full items-center gap-2 border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="text" onChange={(e) => setArtist(e.target.value)} placeholder="Artist Name" className="w-full bg-transparent text-sm outline-none" />
            </div>
            <div className="flex w-full items-center gap-2 border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full bg-transparent text-sm outline-none" />
            </div>
            <div className="flex w-full items-center gap-2 border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="text" onChange={(e) => setMedium(e.target.value)} placeholder="Medium" className="w-full bg-transparent text-sm outline-none" />
            </div>
            <div className="flex w-full items-center gap-2 border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="w-full bg-transparent text-sm outline-none" />
            </div>

            <button type="submit" className="w-full cursor-pointer rounded-sm bg-black p-2 text-sm text-white sm:w-60">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadArtwork;