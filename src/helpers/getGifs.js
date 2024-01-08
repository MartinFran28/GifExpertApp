export const getGifts = async( category ) => {

    try {

        const api_key = 'rwQGcFrAI4VM9wmmeHeMKj6cDUXmIbdQ';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=10`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( ( gif ) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
        }));
        
        // console.log(gifs);

        return gifs;

    } catch (error) {
        console.log( error );
    }

}
