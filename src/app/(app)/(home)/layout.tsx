import React, { PropsWithChildren } from "react";
import { getPayload } from "payload";
import configPromise from "@payload-config";

import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { SearchFilters } from "./search-filters";
import { Category } from "@/payload-types";

async function Layout({ children }: PropsWithChildren) {
  const payload = await getPayload({
    config: configPromise,
  });

  const results = await payload.find({
    collection: "categories",
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedResults = results.docs.map((doc) => ({
    ...doc,
    subcategories: doc.subcategories?.docs?.map((sub) => ({
      ...(sub as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedResults} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
