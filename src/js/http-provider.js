const urlJoke = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';
const cloudPreset = 'ml_default';
const urlCloudinary = 'https://api.cloudinary.com/v1_1/dwzeydb7o/upload';


// fetch(url).then((response) => {
//     response.json().then(console.log);
// });

//
// fetch(url)
//     .then(response => response.json())
//     .then(console.log);


const getJoke = async () => {

    try {

    const response = await fetch(urlJoke);
    if (!response.ok) throw `data not found`;

    const {id, icon_url, value} = await response.json();
    return {id, icon_url, value};

    } catch(err) {
        throw err;
    }
}


const getUsers = async () => {
    const response  = await fetch(urlUsers);
    const {data: users} = await response.json();
    return users;
}


const uploadFiles = async (file) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', file);

    try {
        const response = await fetch(`${urlCloudinary}`, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const cloudResponse = await response.json();
            return cloudResponse.secure_url;
        } else {
            throw await response.json();
        }
    } catch (err) {
      throw err;
    }
}



export {
    getJoke,
    getUsers,
    uploadFiles
}