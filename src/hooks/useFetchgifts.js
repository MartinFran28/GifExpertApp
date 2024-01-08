import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";


export const useFetchgifts = ( category ) => {

    const [ gifts, setGifts ] = useState([ ]);
    const [ isLoading, setIsLoading ] = useState( true );

    const obtnerGifts = async() => {
        const nuevosGifts = await getGifts( category );
        setGifts( nuevosGifts );
        setIsLoading( false );
    }

    useEffect(() => {
        obtnerGifts();
    }, [])


    return {
        gifts,
        isLoading
    }

}

