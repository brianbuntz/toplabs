// components/OrganizationCard.tsx
import React from "react";
import Link from "next/link";
import OptimizedImage from "./OptimizedImage";
import { Organization } from "../types";
import classNames from "classnames";

interface OrganizationCardProps {
  organization: Organization;
  categoryId: string;
  size?: "small" | "normal";
  featured?: boolean;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  organization,
  categoryId,
  size = "normal",
  featured = false,
}) => {
  const isSmall = size === "small";
  const cardClasses = classNames(
    "group block overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg",
    {
      "border-2 border-yellow-400": featured,
    },
  );

  const imageHeight = featured ? "500px" : isSmall ? "160px" : "224px"; // h-40 = 160px, h-56 = 224px

  const renderImage = () => {
    if (organization.heroImage && organization.heroImage.webp) {
      return (
        <div className="relative" style={{ height: imageHeight }}>
          <picture className="relative block h-full">
            <source
              type="image/webp"
              srcSet={`${organization.heroImage.webp["400w"] || ""} 400w, ${
                organization.heroImage.webp["800w"] || ""
              } 800w, ${organization.heroImage.webp["1000w"] || ""} 1000w`}
              sizes={
                organization.heroImage.sizes ||
                "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              }
            />
            <div className="relative w-full h-full">
              <OptimizedImage
                src={organization.heroImage.url}
                alt={organization.heroImage.altText}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="transition-opacity duration-300 group-hover:opacity-90 object-cover"
                priority={featured}
              />
            </div>
          </picture>
        </div>
      );
    } else {
      return (
        <div
          className="bg-gray-700 flex items-center justify-center"
          style={{ height: imageHeight }}
        >
          <span className="text-gray-400 text-sm">No Image</span>
        </div>
      );
    }
  };

  return (
    <Link
      href={`/category/${categoryId}/organization/${organization.id}`}
      className={cardClasses}
    >
      <div className="relative bg-gray-800 overflow-hidden">
        {renderImage()}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3
            className={classNames("font-semibold text-white line-clamp-2", {
              "text-sm": isSmall,
              "text-base": !isSmall,
            })}
          >
            {organization.name}
          </h3>
        </div>
        {featured && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
    </Link>
  );
};

export default OrganizationCard;
