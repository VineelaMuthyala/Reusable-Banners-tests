import './index.css'

const Banner = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <div className="card">
      <div className={className}>
        <h1 className="heading">{headerText}</h1>
        <p className="text">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </div>
  )
}

export default Banner
