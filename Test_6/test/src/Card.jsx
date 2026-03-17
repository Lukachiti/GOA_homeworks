
export default function Card(info){
    let {avatar_url, bio, created_at, login, public_repos, followers, following, location, twitter_username, html_url} = info.info
    return <div>
        <img src={avatar_url}></img>
        <h1>{login}</h1>
        <h3>{bio == null ? "no bio" : bio}</h3>
        <h4>created on: {created_at}</h4>
        <p>Repo count: {public_repos}</p>
        <p>Follower: {followers}</p>
        <p>following: {following}</p>
        <p>location: {location}</p>
        <h3>{twitter_username == null ? "no twitter" : twitter_username}</h3>
        <p>html_url: {html_url}</p>

    </div>
}