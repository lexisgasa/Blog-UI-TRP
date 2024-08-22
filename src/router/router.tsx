import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import PostsListPage from "../post/pages/PostsListPage/PostsListPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="posts" element={<PostsListPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
