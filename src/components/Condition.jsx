const user1 = {
  name: 'James Bunt',
  age: 40,
  gender: 'male',
  town: 'London',
};

function Condition() {
  const userIsAdmin = false;
  const isUserLoggedIn = false;

  const gendr = user1.gender === 'male' ? 'Man' : 'Woman';
  const condAge = user1.age >= 18 ? 'adult' : 'teenager';
  const continent = user1.town === 'London' ? 'Europe' : 'USA';
  return (
    <div>
      {userIsAdmin ? <h2>Main title admin</h2> : <h2>Hello not admin</h2>}
      <h2>{userIsAdmin ? 'Main title admin' : 'Hello not admin'}</h2>
      {userIsAdmin && <h3>Subtitle hello admin</h3>}

      {!isUserLoggedIn && <button>Login</button>}
      {isUserLoggedIn && <button>Logout</button>}

      {/* <h3>{`${gendr} ${user1.name} is ${condAge} and is from ${continent}`}</h3> */}
      <h3>
        {gendr} {user1.name} is {condAge} and is from {continent}
      </h3>
    </div>
  );
}

export default Condition;
