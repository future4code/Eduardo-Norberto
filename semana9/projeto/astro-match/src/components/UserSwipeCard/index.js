import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  BlurredBackground,
  InfoWrapper,
  ProfilePicture,
  TitleWrapper,
  UserAge,
  UserCardWrapper,
  UserName,
  UserBio,
} from './styled'
import { connect } from 'react-redux'
import { updateCurrentPage } from '../../actions/route'

class UserSwipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAnimation: null,
    }
  }


  render() {
    const { userToSwipe, animationDirection: animation, goToProfileScreen } = this.props

    return (
      <UserCardWrapper animation={animation} >
        <BlurredBackground photo={userToSwipe.photo}/>
        <ProfilePicture src={userToSwipe.photo} onClick={goToProfileScreen}/>
        <InfoWrapper>
          <TitleWrapper>
            <UserName>{userToSwipe.name},</UserName>
            <UserAge>{userToSwipe.age}</UserAge>
          </TitleWrapper>
        </InfoWrapper>
      </UserCardWrapper>)
  }
}

const mapDispatchToProps = dispatch => ({
  goToProfileScreen: () => dispatch(updateCurrentPage('ProfileScreen')),
})



export default connect(null, mapDispatchToProps) (UserSwipeCard)

UserSwipeCard.propTypes = {
  userToSwipe: PropTypes.object
}