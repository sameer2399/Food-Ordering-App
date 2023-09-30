const Contact = () => {
  return (
    <div>
        <h1 className="font-bold text-3xl">Contact Us Page</h1>
        <form action="">
          <input type="text" className="border border-black p-2 m-2" placeholder="name" />
          <input type="text" className="border border-black p-2 m-2" placeholder="message" />
          <button className="border border-black p-2 m-2 rounded-r-lg">Submit</button>
        </form>
    </div>
  )
}

export default Contact