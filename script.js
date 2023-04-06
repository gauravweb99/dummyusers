const generateBtn = document.getElementById('generate-btn');
const nameDisplay = document.getElementById('getgo');
const imggoDisplay = document.getElementById('imggo');
const imggoDisplay2 = document.getElementById('imggo2');

  fetch('https://randomuser.me/api/?password=upper,lower,special,number,8')
    .then(response => response.json())
    .then(data => {

      document
      imggoDisplay2.src = `${data.results[0].picture.large}`;
      imggoDisplay.src = `${data.results[0].picture.large}`;
      
       nameDisplay.innerHTML = `
      <div class="row about-list">
                            <div class="col-md-6">
      <div class="media">
                                    <label>Name</label>
                                    <p>${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</p>
                                </div>
                                <div class="media">
                                    <label>Age</label>
                                    <p>${data.results[0].registered.age} Yr</p>
                                </div>
                                <div class="media">
                                    <label>Gender</label>
                                    <p>${data.results[0].gender}</p>
                                </div>
                                <div class="media">
                                    <label>Mail</label>
                                    <p>${data.results[0].email}</p>
                                </div>
                                <div class="media">
                                    <label>U.name </label>
                                    <p> ${data.results[0].login.username}</p>
                                </div>
                                <div class="media">
                                    <label>Password</label>
                                    <p>${data.results[0].login.password}</p>
                                </div>
                                
                                
                                
                            </div>
                            <div class="col-md-6">
                               <div class="media">
                                    <label>City</label>
                                    <p> ${data.results[0].location.city}</p>
                                </div>
                                <div class="media">
                                    <label>State</label>
                                    <p> ${data.results[0].location.state}</p>
                                </div>
                                <div class="media">
                                <label>Country</label>
                                <p>${data.results[0].location.country}</p>
                            </div>
                            <div class="media">
                            <label>Postcode</label>
                            <p> ${data.results[0].location.postcode}</p>
                        </div>
                        <div class="media">
                                <label>Phone</label>
                                <p>${data.results[0].phone}</p>
                                </div>
                                <div class="media">
                                <label>My boss</label>
                                <p>Dev. Gaurav Jatt</p>
                                </div>
      `;
      
      
      
    })
    .catch(error => console.log(error));

