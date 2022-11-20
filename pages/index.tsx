import type { GetServerSideProps, NextPage } from "next";
import MainContent from "../components/containers/mainContent";
import MainLayout from "../components/layouts/MainLayout";
import { __host__ } from "../utils/constants";
import { PostFeedResponse } from "./api/post";

export const getServerSideProps: GetServerSideProps<PostFeedResponse|{}> = async (ctx) => {
  return { props: { ...await (await fetch(`http://${__host__}:3000/api/post`)).json() }};
}

const Home: NextPage = (props:PostFeedResponse) => {
  
  return (
  <MainLayout sectionTitle="Kaliope Web" subTitle="the writer's site">
      <MainContent {...props} />
    </MainLayout>
  );
};

export default Home;
