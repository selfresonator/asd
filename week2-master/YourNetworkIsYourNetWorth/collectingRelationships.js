var youDontNeedToWorryAboutAnythingInHere = function() {
	var NameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur','Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", 'Gloria Wyche', "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
	var JobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior designer', 'Nun'];
	var CityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
	var emptyNetwork = [];

	function createNetwork(collection){

		for (var i = 0; i < NameArray.length; i++) {
			var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];
			var randomCity = CityArray[Math.floor(Math.random() * CityArray.length)];

			collection.push(createNewUser(NameArray[i], randomJob, randomCity));
		}

		return collection
	}

	return createNetwork(emptyNetwork);

}

function createNewUser(username, job, city){
	var newUser = {
		username: username,
		job: job,
		city: city,
		friends: [],
		family: [],
		coworkers: [],
	};

	return newUser;

};
// creating the user you're going to be adding to
var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
// creating the network collection you're going to be pulling
var allUsers = youDontNeedToWorryAboutAnythingInHere();
// check the console to see what these look like
//console.log(joeyProfile);
//console.log(allUsers);

//console.dir(ourUser);
//console.dir(userNetwork);



// YOUR CODE HERE
// i) Loop through the allUsers array. On each iteration, we'll have a single user object.
for(var i = 0; i < allUsers.length; i++) {
	//(ii) If a user in the allUsers array is from the same city as joeyProfile, push the username into the joeyProfile friends array.
	if(joeyProfile.city === allUsers[i]['city']) {
		joeyProfile['friends'].push(allUsers[i]);
		//(ii) If a user in the allUsers array has the same job as Joey, push the username into the joeyProfile coworker array.
	}
};

//



(joeyProfile.job === allUsers[i]['job']) {
	joeyProfile['coworkers'].push(allUsers.[i]);
}
