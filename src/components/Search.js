import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="form-row">
            <div className="form-group col-md-8">
                <input 
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text" className="form-control" />
            </div>
            <div className="form-group col-md-4">
                <button onClick={callSearchFunction} type="submit" 
                    value="SEARCH" 
                    className="btn btn-primary">Search</button>
            </div>
        </form>
    );
}

export default Search;