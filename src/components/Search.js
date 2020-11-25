import React from 'react'

const  Search = (props) => {
    return (
        <form onSubmit={props.getProfile}>
            <input type="text" autoComplete="off" name="username"  placeholder="Search Git Profile" />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search