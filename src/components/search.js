
const Search = ({searchedItem, handleSearch }) => {

  return (
    <>
      <input
        type="text"
        value={searchedItem}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search transactions..."
        className='form-control'
      />
      </>

  );
};

export default Search;