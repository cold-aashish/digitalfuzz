import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";

const TeamDetails = () => {
  return (
    <div>
      <Head>
        <title>Team Details</title>
        <meta name="description" content="Team Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
        
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDetails;
