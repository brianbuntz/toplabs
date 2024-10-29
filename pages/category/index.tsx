// pages/category/index.tsx
import React from "react";
import Head from "next/head";
import EnhancedNavBar from "../../components/EnhancedNavBar";
import CategoryCard from "../../components/CategoryCard";
import topLabsDataImport from "../../data/topLabsNew.json";
import { TopLabsData, ResearchCategory, Organization } from "../../types";

// Pre-compute organizations map for better performance
const topLabsData: TopLabsData = topLabsDataImport as unknown as TopLabsData;
const organizationsMap = new Map(
  topLabsData.organizations.map((org) => [org.id, org]),
);

export async function getStaticProps() {
  return {
    props: {
      categories: topLabsData.researchCategories,
    },
  };
}

interface CategoriesPageProps {
  categories: ResearchCategory[];
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ categories }) => {
  const getOrganization = (orgId: string): Organization | undefined => {
    return organizationsMap.get(orgId);
  };

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/category" },
  ];

  return (
    <>
      <Head>
        <title>Categories - Top Labs</title>
        <meta
          name="description"
          content="Explore various research categories at Top Labs."
        />
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />
        {/* Add cookie policy meta tag */}
        <meta
          name="cookie-policy"
          content="This site uses essential cookies for basic functionality and YouTube cookies for video playback."
        />
      </Head>
      <div className="flex flex-col min-h-screen bg-background text-text">
        <EnhancedNavBar items={breadcrumbItems} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-white">
            Research Categories
          </h1>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{
              minHeight: "calc(100vh - 200px)",
              gridAutoRows: "minmax(300px, auto)",
            }}
          >
            {categories.map((category: ResearchCategory, index) => (
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
    </>
  );
};

export default CategoriesPage;
