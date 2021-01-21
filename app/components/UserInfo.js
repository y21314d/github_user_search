import React from 'react'
import styled from 'styled-components'
import { layout } from 'styled-system'
import Loading from '../components/Loading'

const UserInfoBlock = styled.div`
  ${layout}
  margin-top: 15px;

`

const Avatar = styled.img`
  margin-bottom: 0px;
  margin-right: 20px;
  min-height: 50px;
  border-radius: 8px;
  max-height: 250px;
`
const Info = styled.div`
  flex:1 1 0%;
  ${layout}

`
const UserName = styled.div`
  font-size: 30px;
  font-weight: bold;
`
const Link = styled.a`
  text-decoration: none;
  color: #3d4fff
  transition: color .2s ease;
  :hover&{
    color:#27b4e7;
  }
`
const Bio = styled.div`
  font-size: 16px;
`
const Box = styled.div`
  margin:15px;
`
const UlBox = styled.ul`
  display:flex;
  list-style: none;
  margin: 0;
  padding: 0;
`
const LiBox = styled.li`
  margin-right: 15px;
  text-align: center;
  flex-direction: column;
`

const InfoNumber = styled.p`
  font-size: 30px;
  margin:0;
`

const InfoType = styled(InfoNumber)`
  font-size: 14px;
  margin:0;
`


export default function UserInfo(props) {
  const { avatar_url, name, html_url, login, company, blog, location, email, hireable,
    bio, public_repos, public_gists, followers, following } = props.userInfo
  return (
    <div>
      <UserInfoBlock display={["block", "flex", "flex", "flex"]}>
        <Avatar src={avatar_url} />
        <Info >
          <div>
            <UserName>{name}</UserName>
            <Link href={html_url}>@{login}</Link>
          </div>
          <div>{company}</div>
          <Link>{email}</Link>
          <div>{location}</div>
          <div>{hireable}</div>
          <Link href={blog}>{blog}</Link>
          <div>{bio}</div>
        </Info>
      </UserInfoBlock>
      <Box>
        <UlBox>
          <LiBox>
            <InfoNumber>{public_repos}</InfoNumber>
            <InfoType>Repos</InfoType>
          </LiBox>
          <LiBox>
            <InfoNumber>{public_gists}</InfoNumber>
            <InfoType>Gists</InfoType>
          </LiBox>
          <LiBox>
            <InfoNumber>{followers}</InfoNumber>
            <InfoType>Followers</InfoType>
          </LiBox>
          <LiBox>
            <InfoNumber>{following}</InfoNumber>
            <InfoType>Following</InfoType>
          </LiBox>
        </UlBox>
      </Box>
    </div>

  )
}
