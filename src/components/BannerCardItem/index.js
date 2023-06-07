import './index.css'

const Banner = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="text">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner

