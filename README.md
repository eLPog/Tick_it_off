# IMPORTANT

This app is connected with https://github.com/eLPog/To_Do_List_Backend. For security reasons, the configuration of the backend prevents connections from the outside.So if you use git clone and try to run this application locally - it won't work. So please to check all the functionality of the application online on https://www.tickitoff.networkmanager.pl. This is always the same code as on the server.


<h1>Tick it off</h1>
<hr><p>React application created as a frontend for - To Do List Backend - application.</p><h2>General Information</h2>
<hr><ul>
<li>It allows the user to register and log in as well as store, add, edit and delete notes.</li>
</ul><ul>
<li>The state of the application is based on Redux/Toolkit and locals states.</li>
</ul><ul>
<li>App is fetch all data from https://github.com/eLPog/To_Do_List_Backend. Pleace check SETUP INFOs</li>
</ul><h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
<li>React</li>
</ul><h2>Setup</h2>
<hr><p>This app is connected with https://github.com/eLPog/To_Do_List_Backend. For security reasons, the configuration of the backend prevents connections from the outside.So if you use git clone and try to run this application locally - it won't work. So please to check all the functionality of the application online on https://www.tickitoff.networkmanager.pl. This is always the same code as on the server.</p><h5>Steps</h5><ul>
<li>Go to https://www.tickitoff.networkmanager.pl and check all functionalities with test account.</li>
</ul><ul>
<li>User login: test@test.com</li>
</ul><ul>
<li>Password: password</li>
</ul><h2>Usage</h2>
<hr><p>You can add, edit, delete and read tasks. each task has a creation date and execution status. The user can make changes to his account (change of name, e-mail, etc.)</p><h5>Code Examples</h5><ul>
<li>Changing the login status of a user is done with the redux toolkit. If the backend responds with a valid JWT then the user has the status as logged in.</li>
</ul><p><code>  setJwt(state, action) {       state.jwt = action.payload;       action.payload ? state.isLogged = true : state.isLogged = false;     },</code></p><h2>Project Status</h2>
<hr><p>Completed</p><h2>Acknowledgement</h2>
<hr><ul>
<li>The project was created as a visualization of my backend and I paid the greatest attention to the backend code, validation, functionality and security. Frontend only allows you to get to know the functions of the application and is not intended to present the full potential of react.</li>
</ul><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/lukas-pogorzelski-13412123a/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 10%;"></a><span style="margin-right: 30px;"></span><a href="https://github.com/eLPog"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 10%;"></a></p>



