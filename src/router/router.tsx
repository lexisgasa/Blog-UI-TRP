import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../post/components/App/App";
import PostsListPage from "../post/pages/PostsListPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="posts" element={<PostsListPage />} />
    </Route>,
  ),
);

export default router;
