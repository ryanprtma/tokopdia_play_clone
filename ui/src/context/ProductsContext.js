import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [videoId, setVideoId] = useState('')
    const [products, setProducts] = useState([]);

    const fetchWebApi = async (videoId) => {
        try {
            const apiUrl = `/api/videos/${videoId}/products`;
            const response = await fetch(apiUrl, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const results = await response.json();
            setProducts(await results.data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    useEffect(() => {
        fetchWebApi(videoId);
    }, [videoId]);

    return (
        <>
            <ProductsContext.Provider value={
                { products, setProducts, videoId, setVideoId }
            }>{props.children}</ProductsContext.Provider>
        </>
    )
};
