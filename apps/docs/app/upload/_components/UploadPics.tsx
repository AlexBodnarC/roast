"use client";
import { Button } from "@repo/ui/components/ui/button";
import PicContainer from "../../_components/PicContainer";
import { useFilePicker } from "use-file-picker";
import { useEffect, useState } from "react";
import Profile from "../../assets/svg/Profile";
import Image from "next/image";
import Logo from "../../../public/images/OrangeLogo.png";
import { useRouter } from "next/navigation";
import useStore from "../../../store/store";

export default function UploadPics() {
  const [images, setImages] = useState<(string | number)[]>([]);
  const [imagesWioutNumber, setImagesWioutNumber] = useState<string[]>([]);
  const [analyze, setAnalyze] = useState(false);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const { openFilePicker, filesContent } = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
  });

  const router = useRouter();

  const { setImage } = useStore();

  // Handle file content change and update images without number
  useEffect(() => {
    const newImages = filesContent.map((item) => item.content);
    setImagesWioutNumber((prev) => [...prev, ...newImages]);
  }, [filesContent]);

  // Update images state with placeholders and actual images
  useEffect(() => {
    const excludeImg = 6 - imagesWioutNumber.length;
    const items = Array.from({ length: excludeImg }, (_, i) => i);
    setImages([...imagesWioutNumber, ...items]);
  }, [imagesWioutNumber]);

  // Handle image analysis and interval
  useEffect(() => {
    if (!analyze) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => {
        return (prev + 1) % (imagesWioutNumber.length + 1);
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [analyze, imagesWioutNumber.length]);

  useEffect(() => {
    if (imagesWioutNumber.length === 0) return;

    if (imageIndex >= imagesWioutNumber.length) {
      const image = imagesWioutNumber?.[0];
      if (image) {
        setImage(image);
      }

      router.push(`/analysis`);
    }
  }, [imageIndex, imagesWioutNumber, setImage]);

  // Display analysis images
  if (analyze && imagesWioutNumber[imageIndex]) {
    return (
      <div className="absolute w-full h-full">
        <div className="w-full h-full relative">
          <div className="w-full scaning absolute flex items-center justify-center z-50 border-b-4 border-[#FF6032] bg-gradient-to-t h-28 from-[#ff6032cc] to-transparent">
            <Image src={Logo} alt="logo" />
          </div>
          <Image
            src={imagesWioutNumber[imageIndex] ?? ""}
            alt="pic"
            width={390}
            height={844}
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-40">
      <div className="w-full flex flex-wrap items-center justify-center gap-[0.7rem]">
        {images.map((item, index) => (
          <PicContainer
            key={index}
            bordered={typeof item === "number"}
            onClick={() => {
              if (typeof item === "number") {
                openFilePicker();
              }
            }}
            onClose={() => {
              setImagesWioutNumber((prev) => prev.filter((i) => i !== item));
            }}
          >
            {typeof item === "number" ? (
              <div className="w-full flex items-center justify-center h-full">
                <Profile />
              </div>
            ) : (
              <Image
                src={item}
                alt="profile"
                width={100}
                height={100}
                className="w-full h-full rounded-lg object-fill"
              />
            )}
          </PicContainer>
        ))}
      </div>
      <Button variant="orange" size="xl" onClick={() => setAnalyze(true)}>
        Analyze it!
      </Button>
    </div>
  );
}
