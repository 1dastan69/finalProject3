import React, { Fragment, useEffect, useState } from 'react'
import { Route } from 'react-router'
import { Edit } from '../components/Edit/Edit'
import { useHttp } from '../hooks/http.hook'

export const ProductFragment = () => {

    const { loading, request, API_URL } = useHttp()
    const [data, setData] = useState([])

    useEffect(() => {
        let mounted = true
        try {
            if (mounted) {
                request(`${API_URL}`, "GET", null).then(result => {
                    setData(result)
                })
            }
        } catch (e) {}
        return () => mounted = false
    }, [request, API_URL])

    if (loading) {
        return (
            <div className="container">
                <div className="center">
                    <div className="loading"></div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            {
                data.map(({ id }, i) => {
                    return (
                        <Route key={ i } path={`/edit/${id}`} exact>
                            <Edit data={ data[i] } />
                        </Route>
                    )
                })
            }
        </Fragment>
    )
}
