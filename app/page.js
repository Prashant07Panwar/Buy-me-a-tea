import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] ">
      <div className="font-bold flex gap-2 text-5xl justify-center items-center">Buy me a Chai<span><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzJxaTFzM2hrM3hlNGV6emhwNmkxdXl2MWMxZTk4dHR4Z2lqbHM3MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4vDlf0MClhTaF9AEB/giphy.webp" width={33} alt="#"></img></span></div>
    <p>
      A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
    </p>
      <div>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>

      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto pb-32 pt-14">
      <h1 className="text-3xl font-bold text-center mb-14">Your fans can buy you a chai</h1>
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className="bg-pink-50 rounded-full p-2 text-black" width={58} src="/man.jpg" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help</p>
        </div>
        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className="bg-white rounded-full p-2 text-black" width={58} src="coin.jpg" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help</p>
        </div>
        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className= "bg-blue-300 rounded-full p-2 text-black" width={58} src="heads.jpeg" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto pb-32 pt-14">
      <h1 className="text-3xl font-bold text-center mb-14">Learn more about us</h1>
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className="bg-pink-50 rounded-full p-2 text-black" width={58} src="/man.jpg" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help</p>
        </div>
        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className="bg-white rounded-full p-2 text-black" width={58} src="coin.jpg" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help</p>
        </div>
        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className= "bg-blue-300 rounded-full p-2 text-black" width={58} src="heads.jpeg" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help</p>
        </div>
      </div>
    </div>
    </>
  );
}
