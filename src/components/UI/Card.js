import "./Card.css"

const Card = ({ children, className }) => {
  const classes = "card " + className
  return <div class={classes}>{children}</div>
}

export default Card
