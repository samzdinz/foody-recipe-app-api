import React from "react";

const SearchBar = ({
    value,
    isLoading,
    handleSubmit, 
    onChange
}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input 
            value={value}
            isLoading={isLoading}
            onChange={onChange}
            placeholder="Search Recipes Here..."
            className="form-control" 
            />
            <input 
            type="submit" 
            className="btn" 
            value="search" 
            disabled={isLoading || !value} />
        </form>
    )
}

export default SearchBar