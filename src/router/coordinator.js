export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToPostPage = (navigate, id) => {
    navigate(`/post`)
}

export const goToUpdatePage = (navigate, id) => {
    navigate(`/${id}`)
}
