import React from 'react'
import './UsersProfile.css'

const ProfileBio = ({currentProfile}) => {
  return (
    <div>
        <div>
            {
                currentProfile?.tags.length === 0 ?
                (
                    <p>No Watched Tags</p>
                ):(
                    <>
                    <h4>Tags Watched</h4>
                    {
                        currentProfile?.tags.map((tag) =>(
                        <p key={tag}>{tag}</p>
                    ))
                    }
                    </>
                    )
            }
        </div>
        <div>
            <>
                <h4>About</h4>
                {
                    currentProfile?.about ?
                    (
                        <p>{currentProfile.about}</p>
                    ):(
                        <p>No Bio Found</p>
                    )
                }
            </>
        </div>
    </div>
  )
}

export default ProfileBio