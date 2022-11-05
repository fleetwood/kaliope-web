import type { NextPage } from "next";
import MainContent from "../components/containers/mainContent";
import MainLayout from "../components/layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout sectionTitle="Kaliope Web" subTitle="the writer's site">
      <MainContent />
    </MainLayout>
  );
};

export default Home;
