import { useFetchgifts } from "../hooks/useFetchgifts";
import { GiftGridItem } from "../Components";


export const GiftsGrid = ({ category }) => {

    const { gifts, isLoading } = useFetchgifts( category );

    // console.log(isLoading);

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && (<h1>Cargando...</h1>)
            }
            
            <div className="card-grid">
                {
                    gifts.map( ( gif ) => 
                        <GiftGridItem 
                            key={ gif.id }
                            { ...gif }
                        />
                    )
                }
            </div>

        </>
    )

}
