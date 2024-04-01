import { useRef, useEffect } from "react";

interface Props {
  backgroundImageSrc: string;
  foregroundImageSrc: string;
}

function ImageCombiner(props: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundImageRef = useRef<HTMLImageElement>(null);
  const foregroundImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const backgroundImage = backgroundImageRef.current;
    const foregroundImage = foregroundImageRef.current;

    if (backgroundImage && foregroundImage) {
      backgroundImage.onload = () => {
        canvas?.setAttribute("width", backgroundImage.width.toString());
        canvas?.setAttribute("height", backgroundImage.height.toString());
        ctx?.drawImage(backgroundImage, 0, 0);

        const foregroundWidth = foregroundImage.width / 3;
        const foregroundHeight = foregroundImage.height / 3;
        const x = (backgroundImage.width - foregroundWidth) / 2; // Center the foreground image horizontally
        const y = (backgroundImage.height - foregroundHeight) / 2; // Center the foreground image vertically

        ctx?.drawImage(
          foregroundImage,
          x,
          y,
          foregroundWidth,
          foregroundHeight
        );
      };
    }
  }, [props.backgroundImageSrc, props.foregroundImageSrc]);

  return (
    <div>
      <canvas ref={canvasRef} />
      <img
        ref={backgroundImageRef}
        src={props.backgroundImageSrc}
        style={{ display: "none" }}
      />
      <img
        ref={foregroundImageRef}
        src={props.foregroundImageSrc}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ImageCombiner;
