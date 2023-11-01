import { Routes, Route } from "react-router-dom";
import pagesData from "./pageData";
import Layout from "./Layout";
const Router = () => {
  const pageRoutes = pagesData.map(({ title, path, element }) => {
    return <Route key={title} path={path} element={element} />;
  });
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {pageRoutes}
      </Route>
    </Routes>
  );
};
export default Router;
