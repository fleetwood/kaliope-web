import type { GetServerSideProps, NextPage } from "next";
import MainContent from "../components/containers/mainContent";
import MainLayout from "../components/layouts/MainLayout";
import { __host__ } from "../utils/constants";
import { PostFeedResponse } from "./api/post";
import CachePage, { redis_cache } from "./_cachePage";

export const getServerSideProps: GetServerSideProps<PostFeedResponse|{}> = async (context) => {
  return { props: { ...await (await fetch(`http://${__host__}:3000/api/post`)).json() }};
}

const Home: CachePage = (props:PostFeedResponse) => {
  return (
  <MainLayout className="scroll-smooth" sectionTitle="Kaliope Web" subTitle="the writer's site">
      <MainContent {...props} />
    </MainLayout>
  );
};

Home.cache = redis_cache

export default Home;
