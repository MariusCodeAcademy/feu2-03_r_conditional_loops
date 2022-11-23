function Condition() {
  const userIsAdmin = false;
  const isUserLoggedIn = true;
  return (
    <div>
      {userIsAdmin ? <h2>Main title admin</h2> : <h2>Hello not admin</h2>}
      {userIsAdmin && <h3>Subtitle hello admin</h3>}
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
}

export default Condition;
