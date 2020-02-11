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
        <form className="form">
            <div className="form-label-group">
                <input 
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text" className="form-control form-control-material-outlined" 
                    placeholder="Name"
                    autocomplete="off"
                />
                <label for="searchMovie">Name</label>
            </div>
            <div className="form-group text-right">
                <button onClick={callSearchFunction} type="submit" 
                    value="SEARCH" 
                    className="btn btn-primary m-0">Search</button>
            </div>
        </form>
    );
}

export default Search;