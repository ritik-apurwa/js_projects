const requestUrl = 'https://api.github.com/users/ritik-apurwa';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);


/// Display the Avatar 
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        displayAvatar(data.avatar_url);
        displayFollowerCount(data.followers);
        fetchRepositories(data.repos_url);
    }
};
xhr.send();

function displayAvatar(avatarUrl) {
    const avatarElement = document.getElementById('avatar');
    const img = document.createElement('img');
    img.src = avatarUrl;
    img.alt = 'Avatar';
    avatarElement.appendChild(img);
}


// displaying Follower Count
function displayFollowerCount(count) {
    const followerCountElement = document.getElementById('follower-count');
    followerCountElement.textContent = `Followers: ${count}`;
}

// fetching repositories Name 

function fetchRepositories(repoUrl) {
    const reposXhr = new XMLHttpRequest();
    reposXhr.open('GET', repoUrl);
    reposXhr.onreadystatechange = function() {
        if (reposXhr.readyState === 4) {
            const reposData = JSON.parse(this.responseText);
            displayRepositories(reposData);
        }
    };
    reposXhr.send();
}

function displayRepositories(repositories) {
    const reposListElement = document.getElementById('repos-list');
    repositories.forEach(repo => {
        const li = document.createElement('li');
        li.textContent = repo.name;
        reposListElement.appendChild(li);
    });
}


