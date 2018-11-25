import React from 'react'

const ContentPage = ({ data: { contentfulContentPage: pageData } }) => {
    return (
        <div>
            <h1>{pageData.title}</h1>
        </div>
    )
}

export default ContentPage

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulContentPage(slug: {eq: $slug}) {
            title
        }
    }
`