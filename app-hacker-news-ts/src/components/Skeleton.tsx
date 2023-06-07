import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="11" y="34" rx="3" ry="3" width="274" height="12" /> 
    <rect x="10" y="5" rx="3" ry="3" width="500" height="15" />
  </ContentLoader>
)

