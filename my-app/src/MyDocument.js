import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

export default function MyDocument() {

    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(pageNumber)
        setPageNumber(1)
    }

  return (
    <>
        {/* Load one page at a time, add buttons to navigate */}
        {/* <Document file="/Ryan Drake Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber}/>
        </Document> */}

        {/* Load entire document at once */}
        <center>
            <div>
            <Document file="/Ryan Drake Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(
                    new Array(numPages),
                    (el,index) => (
                        <Page height={1080} key={`page_${index+1}`} pageNumber={index+1} />
                    )
                )}
            </Document>
            </div>
        </center>
    </>
  )
}
