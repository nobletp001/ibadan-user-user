import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import ADDIcon from "../public/CTA.svg";
import addMore from "../public/square.png";
import closeIcon from "../public/close-circle.png";
import Cloud from "../public/cloud.svg";

interface UploaderProps {
  setFileNames: React.Dispatch<React.SetStateAction<File[]>>;
  fileNames: File[];
  error: string;
  errorFileRemove: () => void;
  idFile: string;
}

const UploaderSellFile: React.FC<UploaderProps> = ({
  setFileNames,
  fileNames,
  error,
  errorFileRemove,
  idFile,
}) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];
      errorFileRemove();
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const imageUrl = await new Promise<string>((resolve) => {
          const reader = new FileReader();

          reader.onload = (e) => {
            resolve(e.target?.result as string);
          };

          reader.readAsDataURL(file);
        });

        newImages.push(imageUrl);
      }

      setUploadedImages((prevImages) => [...prevImages, ...newImages]);
      setFileNames([...fileNames, ...Array.from(files).map((file) => file)]);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });

    // Remove the corresponding file name directly from the state
    setFileNames((prevFileNames: File[]) => {
      const newFileNames = [...prevFileNames];
      newFileNames.splice(index, 1);
      return newFileNames;
    });
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-auto ">
          <div className="flex w-full h-[120px] justify-between bg-[#F0F3F8] border-dotted border-grey-900 px-10 items-center border-2">
            <div>
              <Image src={Cloud} alt="" width={30} height={30} />
              <span className="text-zinc-600 mt-8 text-[10px] font-light">
                Browse and choose the files you want
                <br /> to upload from your computer
              </span>
            </div>
            <div>
              <label htmlFor={`file-input-${idFile}`}>
                <Image
                  src={ADDIcon}
                  alt="add-icon"
                  width={30}
                  height={30}
                  style={{ cursor: "pointer" }}
                />
              </label>
              <input
                type="file"
                id={`file-input-${idFile}`}
                accept="image/*"
                className="input-field"
                multiple
                onChange={handleFileChange}
                hidden
              />
            </div>
          </div>

          {/* Display selected images */}
          <div
            className={`flex my-3 w-full gap-2 ${
              uploadedImages.length > 0 ? "h-[120px]" : "h-[0px]"
            }`}
          >
            {uploadedImages.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="w-full h-full flex flex-col justify-center items-center relative"
              >
                <div className="w-full h-full flex items-center gap-2">
                  <Image
                    src={image}
                    objectFit="cover"
                    width={80}
                    className="w-full h-full"
                    height={80}
                    alt={`Selected Image ${index + 1}`}
                  />
                </div>
                <button onClick={() => removeImage(index)} className="">
                  <Image
                    src={closeIcon}
                    alt="add-icon"
                    width={15}
                    height={15}
                    style={{ cursor: "pointer" }}
                  />
                </button>
              </div>
            ))}

            {uploadedImages.length > 2 && (
              <div className="bg-[#F0F3F8] w-[35%] border-dotted h-full border-grey-900 px-10 flex flex-col justify-center items-center border-2">
                <Image
                  src={addMore}
                  alt="add-icon"
                  width={30}
                  height={30}
                  style={{ cursor: "pointer" }}
                />
                <p className="text-black text-[16px] font-medium text-center ]">
                  +{uploadedImages.length - 2} others
                </p>
              </div>
            )}
          </div>
        </div>
        {error && (
          <p className="text-[10px] text-red-400 font-normal pl-5">{error}</p>
        )}
      </div>
    </>
  );
};

export default UploaderSellFile;
