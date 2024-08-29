import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import PostsListPage from "../post/pages/PostsListPage/PostsListPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PostFormPage from "../post/pages/PostFormPage/PostFormPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/posts" />} />
      <Route path="posts" element={<PostsListPage />} />
      <Route path="create-post" element={<PostFormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
