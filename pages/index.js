import Head from "next/head";
import { JobOpening } from "@/components/JobOpening";
import { InfoBox } from "@/components/InfoBox";

export default function index() {
  return (
    <>
      <Head>
        <title>Agrotrade</title>
      </Head>
      <main>
        <InfoBox>
          <ul>
            <li>Watermelon</li>
            <li>orange</li>
            <li>guava</li>
          </ul>
        </InfoBox>
        <JobOpening title='Next JS Hybrid Work' location='Nairobi'/>

        <JobOpening title='React Developer' location='Enugu'/>
      </main>
    </>
  )
}