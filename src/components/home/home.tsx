import React from 'react';
import {useQuery} from '@apollo/client'
import * as query from '../../Queries'

export default function Home(){
    const {loading,error,data}= useQuery(query.GET_INFO)
    console.log(data)
    if(error){
        console.log(error)
    }
    return(<div>{loading ? (<div>loading...</div>) : error? (<div>error{error}</div>): (<div><h1>{data.company.name}</h1></div>)}</div>)
} 