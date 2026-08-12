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
      <div className="flex mt-20 lg:mt-2 flex-col items-center justify-center px-4 py-8 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl flex-col overflow-hidden rounded-md bg-(--bg-card) shadow-md sm:flex-row">
          <div className="group relative h-64 sm:h-auto w-full">
            <img src={previewUrl} className="object-cover w-full h-full sm:rounded-l-md" alt="Artwork preview" />
            <label className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 sm:rounded-l-md">
              <span className="text-sm font-medium text-white">Upload image</span>
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <div className="flex w-full flex-col items-center gap-4 p-4 ml-none lg:ml-4 sm:w-70 sm:p-5">
            <h1 className="font-semibold">Upload an Artwork</h1>
            <div className="flex w-full items-center gap-2 rounded-md border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Artwork name" className="w-full bg-transparent text-sm outline-none" />
            </div>
            <div className="flex w-full items-center gap-2 rounded-md border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="text" onChange={(e) => setArtist(e.target.value)} placeholder="Artist Name" className="w-full bg-transparent text-sm outline-none" />
            </div>
            <div className="flex w-full items-center gap-2 rounded-md border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full bg-transparent text-sm outline-none" />
            </div>
            <div className="flex w-full items-center gap-2 rounded-md border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="text" onChange={(e) => setMedium(e.target.value)} placeholder="Medium" className="w-full bg-transparent text-sm outline-none" />
            </div>
            <div className="flex w-full items-center gap-2 rounded-md border-2 p-2 focus-within:border-(--accent-coral) sm:w-60">
              <input type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="w-full bg-transparent text-sm outline-none" />
            </div>

            <button type="submit" className="w-full cursor-pointer rounded bg-(--accent-charcoalBlue) p-2 text-sm text-white sm:w-60">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadArtwork;