import React from "react"
import ContentLoader from "react-content-loader"

const BookSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={190}
        height={360}
        viewBox="0 0 190 360"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="26" y="229" rx="10" ry="10" width="92" height="22" />
        <rect x="0" y="426" rx="10" ry="10" width="95" height="30" />
        <rect x="122" y="421" rx="10" ry="10" width="152" height="45" />
        <rect x="25" y="257" rx="10" ry="10" width="104" height="16" />
        <rect x="25" y="278" rx="10" ry="10" width="122" height="16" />
        <rect x="154" y="313" rx="5" ry="5" width="28" height="27" />
        <rect x="25" y="25" rx="0" ry="0" width="142" height="192" />
        <rect x="25" y="313" rx="10" ry="10" width="103" height="29" />
    </ContentLoader>
)

export default BookSkeleton;