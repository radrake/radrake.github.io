import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

export default function MyDocument({ filepath }) {

    //eslint-disable-next-line
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(pageNumber)
        setPageNumber(1)
    }

  return (
    <>
        {/* Load only first page */}
        <center>
            <Document file={filepath} onLoadSuccess={onDocumentLoadSuccess}>
                <Page className="document" width={1080} renderTextLayer={false} pageNumber={pageNumber}/>
            </Document>
        </center>

        {/* Load entire document at once */}
        {/* <center>
            <Document file={filepath} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(
                    new Array(numPages),
                    (el,index) => (
                        <Page dpi={300} key={`page_${index+1}`} pageNumber={index+1} />
                    )
                )}
            </Document>
        </center> */}
    </>
  )
}
