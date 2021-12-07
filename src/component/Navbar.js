import React from "react";
import { addFavourite, handleMovieSearch, removeFavourite, showSearch } from "../actions";

class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            // showSearchResults : false,
            searchText : ''
        }
    }

    handleChange = (e)=>{
        this.setState({
            searchText : e.target.value
        })
    }

    handleSearch = ()=>{
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
        
    }


    handleFavouriteClick = () =>{
        const {result} = this.props.search;
        this.props.dispatch (addFavourite(result)); 
        this.props.dispatch(showSearch(false));
    }

    handleRemoveFavouriteClick = () =>{
        const { result } =this.props.search;
        this.props.dispatch(removeFavourite(result));
    }

    handleCloseSearch = () =>{
        this.props.dispatch(showSearch(false));
    }


    render(){
        const {isFavourite} = this.props
        const {result, showSearchResult} = this.props.search;
        
        return (
            <>
            <nav className='navbar'>
                <div className='search-container'> 
                    <input placeholder='Search' onChange = {this.handleChange}/>&nbsp;
                    <button className='search-btn' onClick ={this.handleSearch}>Search</button>
                </div>
                {showSearchResult ? 
                <div className='search-result-container'>
                    <div className='search-image'><img alt='movie-poster' src={result.Poster}/></div>
                    <div><h3>{result.Title}</h3>
                    <span>{result.Rated}</span><br/>
                    <span>{result.Released}</span> <br/>
                    <span>{result.imdbRating}</span>
                    {/* <button className='search-fav' onClick ={() => this.handleFavouriteClick(result)} >Add To Favourite</button> */}
                    {isFavourite ?
                        <button className='search-fav un-fav-btn' onClick={this.handleRemoveFavouriteClick}>Remove favourite</button>
                    : <button className='search-fav fav-btn' onClick={this.handleFavouriteClick}>Add to Favourite</button>}
                    <button className='close-search' onClick = {this.handleCloseSearch}>X</button></div>
                </div>
                 : null}
            </nav>
            

            </>
        )
    }
}

export default Navbar;