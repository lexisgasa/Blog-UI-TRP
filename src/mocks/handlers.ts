import { http, HttpResponse } from "msw";
import { Post } from "../post/types";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}posts`, () => {
    return HttpResponse.json<{ posts: Post[] }>({
      posts: [
        {
          id: "1",
          author: "",
          title: "el leon de la carcel",
          content: "",
          date: new Date(),
          alternativeText: "",
          imageUrl: "",
        },
        {
          id: "2",
          author: "",
          title: "un elefante en la luna",
          content: "",
          date: new Date(),
          alternativeText: "",
          imageUrl: "",
        },
      ],
    });
  }),
];
