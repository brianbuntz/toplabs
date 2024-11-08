// components/CategoryCard.tsx
import React from "react";
import Link from "next/link";
import OptimizedImage from "./OptimizedImage";
import { ResearchCategory, Organization } from "../types";

interface CategoryCardProps {
  category: ResearchCategory;
  getOrganization: (orgId: string) => Organization | undefined;
  priority?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  getOrganization,
  priority = false,
}) => {
  const { id, name, heroImage, organizations } = category;
  const firstOrganization = organizations?.[0]
    ? getOrganization(organizations[0])
    : undefined;

  if (!heroImage) {
    return null;
  }

  return (
    <Link
      href={`/category/${id}`}
      className="group block overflow-hidden rounded-lg relative h-full"
      aria-label={`View details about ${name}`}
    >
      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64">
        <OptimizedImage
          src={heroImage.url}
          alt={heroImage.altText}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent 
                   opacity-70 transition-opacity duration-300 group-hover:opacity-90"
        />
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 z-10">
          <h2 className="text-base sm:text-lg font-bold text-white mb-1 line-clamp-2">
            {name}
          </h2>
          {firstOrganization && (
            <p
              className="text-xs sm:text-sm text-gray-300"
              style={{ display: "none" }}
            >
              {firstOrganization.name}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
