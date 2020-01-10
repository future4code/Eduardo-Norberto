import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import {updateCurrentPage} from '../../actions/route'
import UserSwipeCard from '../../components/UserSwipeCard'
import {AppBar} from '../../components/AppBar'
import {Avatar, List, ListItem, ListText, MatchIcon} from '../MatchScreen/styled'
import {mdiAccountSwitch} from '@mdi/js'
import {
  BlurredBackground,
  InfoWrapper,
  ProfilePicture,
  TitleWrapper,
  UserAge,
  UserCardWrapper,
  UserName,
  UserBio,
} from '../../components/UserSwipeCard/styled'




class ProfileScreen extends React.Component {
  render() {
    const {goToSwipeScreen, matches, goToProfileScreen, profileToSwipe } = this.props
    return (
      <div>
        <AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>
        <UserCardWrapper>
        <ProfilePicture src={profileToSwipe.photo}/>
        </UserCardWrapper>
        <TitleWrapper>
            <UserName>{profileToSwipe.name},</UserName>
            <UserAge>{profileToSwipe.age}</UserAge>
          </TitleWrapper>
          <UserBio>{profileToSwipe.bio}</UserBio>
        
      </div>
    )
  }
}

ProfileScreen.propTypes = {

}

const mapStateToProps = (state) => ({
  profileToSwipe: state.profiles.currentProfile,
})

const mapDispatchToProps = (dispatch) => ({
	goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
