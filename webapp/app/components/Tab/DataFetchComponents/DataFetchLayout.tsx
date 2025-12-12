import React from 'react'
import FetchError from './FetchError'
import DataEmpty from './DataEmpty'
type DataFetchLayoutProps = {
    children: React.ReactNode,
    data: any,
    error: boolean
}
function DataFetchLayout(props: DataFetchLayoutProps) {
    const { children, data, error } = props;
    console.log(data ,'::::::::::::::::::');

    if (!data) {
        return <DataEmpty />
    }
    if (error) {
        return <FetchError />
    }
    return (
        <> {children}</>
    )
}

export default DataFetchLayout