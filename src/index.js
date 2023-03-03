import './styles.css';
import {init as initJoke} from "./js/joke-page";
import {getUsers} from "./js/http-provider";
import {init as initUsers} from "./js/usuarios-page";

import * as CRUD from './js/crud-provider';
import {updateUser} from "./js/crud-provider";
import {init as initFile} from "./js/file-page";

// initJoke();
// initUsers();
// getUsers();


// CRUD.getUsers(1).then(console.log);
// CRUD.createUser({name: 'Lepmah', job: 'Enginner'}).then(console.log);
// CRUD.updateUser(1,{name: 'Lepmah', job: 'Enginner'}).then(console.log);
// CRUD.deleteUser(1).then(console.log);

initFile();


