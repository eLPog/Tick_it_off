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
  </ul>
  <hr>
  <p>Main menu - menu view depending on whether the user is logged in.</p><br>
  <img src="https://user-images.githubusercontent.com/89840843/185792756-f1143c22-2f51-417b-b71e-8dd9d3a683a9.png"><br>
  <p>Login formular with frontend validation - the main validation is included in the backend.</p><br>
  <img src="https://user-images.githubusercontent.com/89840843/185792805-40c1b6cc-ee90-48f0-b5c3-db46a4456898.png"><br>
  <p>Tasks list with edit, delete and checked functions.</p><br>
  <img src="https://user-images.githubusercontent.com/89840843/185792861-c41fe5a3-2e8c-473d-b135-28310d489ca8.png"><br>
  <h2>Code examples</h2>
   <p>App component structure with pages redirect if user has no access.</p>
  <img src="https://user-images.githubusercontent.com/89840843/185793341-9d397b58-b853-4ebc-8a03-898cf96fc2d6.png"><br>
   <p>Redux toolkit thunk function to use async fetch. Function send users login data to backend and set status as logged if they are correct.</p>
  <img src="https://user-images.githubusercontent.com/89840843/185793279-d6861e85-f38f-4e0f-9396-830794c8c5bb.png"><br>
   <p>Functions check if  login values are correctly provided. The second function checks that both given passwords are the same - it does so with a delay to give the user time to enter the second password.</p>
  <img src="https://user-images.githubusercontent.com/89840843/185793412-4f7c0b42-15b7-45af-a470-c2d6f30d9663.png"><br>
   <h2>Test code example</h2>
  <img src="https://user-images.githubusercontent.com/89840843/185793604-6f84bc32-cd33-42b5-a44c-ebcc954e6adc.png"><br>
  <img src="https://user-images.githubusercontent.com/89840843/185793634-fd82899b-3c4c-4ce1-805f-d5a344dabb86.png"><br>
  <hr>
<h2>Technologies Used</h2>
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



