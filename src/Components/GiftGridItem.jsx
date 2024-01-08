
export const GiftGridItem = ({ title, url }) => {

    // console.log(gif);

    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )

}
