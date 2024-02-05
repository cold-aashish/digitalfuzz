import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Service1 from "@/components/service/ServiceDetailsService";


const Service = () => {
  return (
    <>
      <Head>
        <title>Service</title>
        <meta name="description" content="Service Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout footer="footer1">
          
          <Service1 />
  
        </RootLayout>
      </main>
    </>
  );
};

export default Service;
