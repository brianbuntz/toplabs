// components/OptimizedImage.tsx
/* eslint-disable react/prop-types */
import Image from "next/image";
import { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
  sizes = "100vw",
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      fill={fill}
      sizes={sizes}
      quality={75}
      {...props}
    />
  );
};

export default OptimizedImage;
