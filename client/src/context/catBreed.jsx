import { useState } from "react";
import { createContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/CatData";

const CatBreedContext = createContext({});

export const CatBreedProvider = ({ children }) => {
  const [breedData, setBreedData] = useState([]);
  const [popularBreed, setPopularBreed] = useState([]);
  const [sortedName, setSortedName] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(false);
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const breedResponse = await api.get("/breeds");
      setBreedData(breedResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const popularSort = () => {
      //! Sorting for Descending Order for Popular Search
      const compareDescending = (a, b) => {
        return b.popular - a.popular;
      };

      //! Sorting in Ascending Order for Breed Name
      const compareAscending = (a, b) =>
        a.name < b.name ? -1 : a.name > b.name ? 1 : 0;

      //! Filter by Breed Name for Search result
      const filterBreedName = [...breedData]
        .sort(compareAscending)
        .filter((data) =>
          data.name.toLowerCase().includes(search.toLowerCase())
        );

      //! Set Sorted Breed Name and popular Breed datas
      setSortedName(filterBreedName);
      setPopularBreed([...breedData].sort(compareDescending));

      //! Ternary Statment for Showing Display of Breed naem
      search === "" ? setFilterDisplay(false) : setFilterDisplay(true);
    };
    popularSort();
  }, [breedData, search]);

  const singleBreedPage = async (id) => {
    const response = await api.get(`/breeds/${id}`);
    navigate(`/${id}`);
  };

  return (
    <CatBreedContext.Provider
      value={{
        breedData,
        imageData,
        setImageData,
        popularBreed,
        sortedName,
        search,
        setSearch,
        filterDisplay,
        singleBreedPage,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CatBreedContext.Provider>
  );
};

export default CatBreedContext;
