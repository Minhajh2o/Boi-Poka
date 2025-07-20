import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Body/Home/Home';
import ListedBooks from './components/Body/ListedBooks/ListedBooks';
import PagesToRead from './components/Body/PagesToRead/PagesToRead';
import BookDetails from './components/Body/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        loader: () => fetch("booksData.json"),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("booksData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
