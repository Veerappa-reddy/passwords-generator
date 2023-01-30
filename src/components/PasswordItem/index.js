import './index.css'

const PasswordItem = props => {
  const {passwordDetails, typePassword, filterAfterDelete} = props
  const {id, name, password, website} = passwordDetails

  const passwordElement = typePassword ? (
    <p className="password-text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-img"
    />
  )

  const onDelete = () => {
    filterAfterDelete(id)
  }

  return (
    <li>
      <div className="item-container">
        <h1 className="initial">{name[0].toUpperCase()}</h1>
        <div className="name-container">
          <p className="website-name">{website}</p>
          <p className="name">{name}</p>
          {/* <input type={typeOf} className="password" value={password} disabled /> */}
          {passwordElement}
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={onDelete}
          //   testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
