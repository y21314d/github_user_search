import React from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'


const Box = styled.div`
    padding: 0 16px;
    display: flex;
    flex-flow: column;
`
const H2 = styled.h2`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`
const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const Li = styled.li`
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    padding-bottom: 5px;
`

const Link = styled.a`
  text-decoration: none;
  color: #3d4fff
  transition: color .2s ease;
  :hover&{
    color:#27b4e7;
  }
`
const ReposName = styled.p`
    margin-bottom: 10px;
    font-size: 18px;
    margin-top: 0;
    white-space: pre-line;
    word-break: break-word;
`

const ReposDes = styled.p`
    font-size: 14px;
    line-height: 1.4;
    white-space: pre-line;
    word-break: break-word;
`

function Repos(props) {
    const { repos } = props
    return (
        <Box>
            <H2>Repositories</H2>
            <Ul>
                {
                    repos.map(repo => {
                        return (
                            <Li key={repo.id}>
                                <div>
                                    <ReposName>
                                        <Link href={repo.html_url}>{repo.name}</Link>
                                    </ReposName>
                                    <ReposDes>{repo.description}</ReposDes>
                                </div>
                            </Li>
                        )
                    })
                }
            </Ul>
        </Box>
    )
}

export default (Repos)
