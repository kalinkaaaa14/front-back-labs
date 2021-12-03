export const getPosts = async () => {
    const data = await fetch(`http://localhost:8080/posts`);
    return await data.json();
};

export const getPhotos = async () => {
    const data = await fetch(`http://localhost:8080/images`);
    return await data.json();
};

export const getPhotosById = async (id) => {
    const data = await fetch(`http://localhost:8080/images/${id}`);
    return await data.json();
};

export const postPost = async (title,content,author,tags,imageUrl,createdAt) => {
    return await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
            author,
            tags,
            imageUrl,
            createdAt
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const postPhoto = async (url) => {
    return await fetch('http://localhost:8080/images', {
        method: 'POST',
        body: JSON.stringify({
            url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
};





