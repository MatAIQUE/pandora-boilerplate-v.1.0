import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import RootLayout from "@layout";

const HomePageWithSuspense = dynamic(() => import("./home/page"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Home = () => {
  return (
    <RootLayout>
      {/* <Suspense fallback={<div>Loading HomePage...</div>}> */}
      <HomePageWithSuspense />
      {/* </Suspense> */}
    </RootLayout>
  );
};

export default Home;
