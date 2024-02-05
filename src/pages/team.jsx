import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";


const Team = () => {
  return (
    <div>
      <Head>
        <title>Team</title>
        <meta name="description" content="Team Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
            
        </RootLayout>
      </main>
    </div>
  );
};

export default Team;
