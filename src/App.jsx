function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-center text-red-600 font-bold text-2xl">
        WELCOME TO MY LANDING PAGE
      </h1>
      <form onSubmit={handleSubmit} clasName="flex flex-col">
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
