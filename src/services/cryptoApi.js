import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    // 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    // 'x-rapidapi-key': 'fc6c98e036msh736de4aa78957a8p19db1ajsn89b75cdc8529'
    'x-access-token': 'fc6c98e036msh736de4aa78957a8p19db1ajsn89b75cdc8529'
}

const baseUrl = 'https://api.coinranking.com/v2';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),

        getCryptoDetails : builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery
} = cryptoApi;