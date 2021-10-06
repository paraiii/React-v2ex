// import axios from "axios";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { useState, useEffect } from "react";
// import "./styles.css";
// import { Loading } from "./loading";
// import { Empty } from "../Empty/empty";
// import React, { useCallback} from 'react';
// import styled from 'styled-components';
// import { ContentLine } from "../Content/ContentLine";
// import { useTranslations } from "../../hooks/useTranslations";

// export const Contents = () => {
//     const [ loading, setLoading ] = useState(true);
//     const [ error, setError ] = useState(" ");
//     const translations = useTranslations ();
//     const [contentDatas, setContentData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://www.aRandomAPI.com")
//       .then((response) => {
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false); 
//         setError("failed to load data");

//       });
//   }, []);
  
//   const mapContentDataToContentLine = useCallback((contentData : any) => {
//     return <ContentLine content={contentData} translation={translations}></ContentLine>
// }, [translations])

//   if (loading) {
//     return <Loading></Loading> 
// }

// if (error !== "" ) {
//     return <Empty reason={error}></Empty> 
// }
//   return (
//     <div>
//     <StyledTable>
//         <tbody>
//             {
//                 contentDatas.map((contentData) => {
//                     return mapContentDataToContentLine(contentData);
//                 })
//             } 
//         </tbody>
//     </StyledTable>
// </div>
//   );
// }

// const StyledTable = styled.table`
//     width: 100%;
//     border-collapse: collapse;
// `
import React from 'react'

export default function LoadingPage() {
    return (
        <div>
            
        </div>
    )
}
