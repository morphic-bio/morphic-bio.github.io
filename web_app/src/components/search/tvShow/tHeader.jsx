import React from "react";
 import styled from "styled-components";
 
 const TvShowContainer = styled.div`
   width: 100%;
   min-height: 3em;
   display: flex;
   border-bottom: 3px solid #d8d8d852;
   padding: 6px 8px;
   align-items: center;
   z-index: 2;
   position: sticky;
   top: 0;
   background-color: white;
 `;
 
 const Name = styled.h3`
   font-family: 'Manrope', sans-serif;
   font-size: 12.5px;
   color: #333;
   padding: 5px;
   flex: 2;
   display: flex;
   max-width: 500px;
   max-height: 60px;
   overflow: hidden;
   text-overflow: ellipsis;
 `;
 
 export function THeader(props) {
   const {gene, id, phenotype_hom, phenotype_het, omin_name, dd_name} = props;
 
   return (
     <TvShowContainer onClick={()=>console.log("ga")}>
       <Name>{gene}</Name>
       <Name>{phenotype_hom}</Name>
       <Name>{phenotype_het}</Name>
       <Name>{omin_name}</Name>
       <Name>{dd_name}</Name>
     </TvShowContainer>
   );
 }
 