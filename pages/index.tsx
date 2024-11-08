// pages/index.tsx
import React from "react";
import CategoryCard from "../components/CategoryCard";
import topLabsData from "../data/topLabsNew.json";
import { TopLabsData, ResearchCategory, Organization } from "../types";

const Home: React.FC = () => {
  const data: TopLabsData = topLabsData as unknown as TopLabsData;
  const categories: ResearchCategory[] = data.researchCategories;

  const getOrganization = (orgId: string): Organization | undefined => {
    return data.organizations.find((org) => org.id === orgId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-left mb-4 sm:mb-8">
          Explore Labs by Domain
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              getOrganization={getOrganization}
              priority={index < 3}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
