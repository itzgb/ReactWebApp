const GenreBookLayout = ({data , children}) => {
    return (
        <div>
            {data.map( (item , index) => {
                return (
                        {children}
                    )             
                }
            ) }
        </div>
    )
}
export default GenreBookLayout;