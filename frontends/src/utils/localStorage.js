export const addFavouriteToLocalStorage = (product) => {
    const favourites = getFavouritesFromLocalStorage()
    if(!favourites.some(p => p._id === product._id)){
        favourites.push(product)
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }
}

export const removeFavouritesFromLocalStorage = (productId) => {
    const favourites = getFavouritesFromLocalStorage()
    const updateFavourites = favourites.filter((product) => product._id !== productId )
    localStorage.setItem("favourites",JSON.stringify(updateFavourites))
}

export const getFavouritesFromLocalStorage = () => {
    const favouritesJSON = localStorage.getItem("favourites")
    return favouritesJSON ? JSON.parse(favouritesJSON) : []
}