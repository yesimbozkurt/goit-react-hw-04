import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import toast from "react-hot-toast";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn";

//unsplash API
const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "id4k_2UHsEzZ1zvFFy_ZGVa7whX-bYZfyW_Ys9nuduU";

function App() {
  const [search, setSearch] = useState();
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const searchPhoto = (search) => {
    setSearch(search);
    setPhotos([]);
    setPage(1);
    setIsLoading(true);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            query: search,
            page: page,
            per_page: 12,
            client_id: ACCESS_KEY,
          },
        });
        const { total_pages, results, total } = response.data;
        if (results.length < 1) {
          toast.error("No results found");
        } else {
          setPhotos((prev) => [...prev, ...results]);
          toast.success(`Found ${total} results and ${total_pages} pages`);
        }
        console.log(response);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    if (search) {
      fetchPhotos();
    }
  }, [search, page]);

  const selectedImage = (image) => {
    setModal(image);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      <SearchBar searchPhoto={searchPhoto} />
      <ImageGallery
        gallery={photos}
        loading={isLoading}
        selectedImage={selectedImage}
      />
      <ImageModal data={modal} closeModal={closeModal} />
      <LoadMoreBtn />
    </div>
  );
}

export default App;
