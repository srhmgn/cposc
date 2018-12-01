import React from 'react'
import {graphql} from 'gatsby';

import Layout from '../components/layout';
import Event from '../components/event';
import Link from '../components/link';

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulContentPage(slug: {eq: $slug}) {
            title
            modules {
                __typename
                ... on ContentfulLink {
                    title
                    url
                    description
                }
                ... on ContentfulEvent {
                    title
                    url
                    date
                    location {
                        lon
                        lat
                    }
                }
            }
        }
    }
`

export default ({ data: { contentfulContentPage } }) => (
    <Layout>
        <h1>{contentfulContentPage.title}</h1>
        {contentfulContentPage.modules.map((module, i) => {
            switch (module.__typename) {
                case 'ContentfulEvent':
                    return <Event key={i} {...module} />
                case 'ContentfulLink':
                    return <Link key={i} {...module} />
                default:
                    return null
            }
        })}
    </Layout>
)

