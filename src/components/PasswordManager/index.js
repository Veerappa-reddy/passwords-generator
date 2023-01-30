import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    websiteName: '',
    userName: '',
    userPassword: '',
    showPasswords: false,
  }

  onChangeWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePasswordName = event => {
    this.setState({userPassword: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteName, userName, userPassword} = this.state
    const passwordItem = {
      id: v4(),
      website: websiteName,
      name: userName,
      password: userPassword,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, passwordItem],
      websiteName: '',
      userName: '',
      userPassword: '',
    }))
  }

  renderPassword = () => {
    const {passwordsList, showPasswords} = this.state

    return passwordsList.map(eachItem => (
      <PasswordItem
        passwordDetails={eachItem}
        key={eachItem.id}
        typePassword={showPasswords}
        filterAfterDelete={this.filterAfterDelete}
      />
    ))
  }

  filterAfterDelete = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(eachItem => eachItem.id !== id)

    this.setState({passwordsList: filteredList})
  }

  onTogglePasswords = () => {
    //   const {showPasswords} = this.state

    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  searchItemPassword = event => {
    const {passwordsList} = this.state
    const filterList = passwordsList.filter(eachPasswordItem =>
      eachPasswordItem.website
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    )

    this.setState({passwordsList: filterList})
  }

  render() {
    const {passwordsList, userName, userPassword, websiteName} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo-img"
        />
        <div className="password-manager-top-container">
          <form className="password-container" onSubmit={this.onAddPassword}>
            <h1 className="heading">Add New Password</h1>
            <div className="enter-website-container website-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="website-img"
                alt=" website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-website"
                value={websiteName}
                onChange={this.onChangeWebsiteName}
              />
            </div>
            <div className="enter-website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="website-img"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-website"
                value={userName}
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="enter-website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="website-img"
                alt="  password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-website"
                value={userPassword}
                onChange={this.onChangePasswordName}
              />
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <img
            src="
https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="password-img"
            alt=" password manager"
          />
        </div>
        <div className="password-manager-bottom-container">
          <div className="your-passwords-search-container">
            <div className="no-passwords-container">
              <h1 className="your-passwords">Your Passwords </h1>
              <p className="number-1">{passwordsList.length}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={this.searchItemPassword}
              />
            </div>
          </div>
          <hr className="hor-line" />
          <div className="show-passwords-container">
            <input
              type="checkbox"
              id="showPasswords"
              onClick={this.onTogglePasswords}
            />
            <label htmlFor="showPasswords" className="show-password">
              Show Passwords
            </label>
          </div>
          {passwordsList.length > 0 ? (
            <ul className="unorder-list">{this.renderPassword()}</ul>
          ) : (
            <div className="no-passwords-1-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
                className="no-passwords"
              />
              <p className="no-pass">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
